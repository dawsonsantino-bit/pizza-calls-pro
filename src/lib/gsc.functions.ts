import { createServerFn } from "@tanstack/react-start";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "https://feedinsystems.com/";
const SITEMAP_URL = "https://feedinsystems.com/sitemap.xml";

function authHeaders() {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const gscKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovableKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!gscKey) throw new Error("GOOGLE_SEARCH_CONSOLE_API_KEY is not configured");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": gscKey,
    "Content-Type": "application/json",
  };
}

async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  try {
    const res = await fetch(sitemapUrl);
    if (!res.ok) return [SITE];
    const xml = await res.text();
    const matches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
    return matches.length ? matches : [SITE];
  } catch {
    return [SITE];
  }
}

async function submitSitemap() {
  const encodedSite = encodeURIComponent(SITE);
  const encodedSitemap = encodeURIComponent(SITEMAP_URL);
  const url = `${GATEWAY}/webmasters/v3/sites/${encodedSite}/sitemaps/${encodedSitemap}`;
  const res = await fetch(url, { method: "PUT", headers: authHeaders() });
  return { ok: res.ok, status: res.status };
}

async function inspectUrl(inspectionUrl: string) {
  const res = await fetch(`${GATEWAY}/v1/urlInspection/index:inspect`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ inspectionUrl, siteUrl: SITE }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    return {
      url: inspectionUrl,
      ok: false,
      status: res.status,
      error: (body as { error?: { message?: string } })?.error?.message ?? "Inspection failed",
    };
  }
  const result = (body as { inspectionResult?: Record<string, unknown> }).inspectionResult ?? {};
  const indexStatus = (result.indexStatusResult ?? {}) as Record<string, unknown>;
  return {
    url: inspectionUrl,
    ok: true,
    verdict: indexStatus.verdict as string | undefined,
    coverageState: indexStatus.coverageState as string | undefined,
    robotsTxtState: indexStatus.robotsTxtState as string | undefined,
    indexingState: indexStatus.indexingState as string | undefined,
    lastCrawlTime: indexStatus.lastCrawlTime as string | undefined,
    pageFetchState: indexStatus.pageFetchState as string | undefined,
    googleCanonical: indexStatus.googleCanonical as string | undefined,
    userCanonical: indexStatus.userCanonical as string | undefined,
    inspectionResultLink: result.inspectionResultLink as string | undefined,
  };
}

export const runIndexingCheck = createServerFn({ method: "POST" }).handler(async () => {
  const sitemap = await submitSitemap();
  const urls = await fetchSitemapUrls(SITEMAP_URL);
  const inspections = await Promise.all(urls.slice(0, 10).map((u) => inspectUrl(u)));
  return {
    site: SITE,
    sitemap: { url: SITEMAP_URL, ...sitemap },
    inspectedAt: new Date().toISOString(),
    inspections,
  };
});
