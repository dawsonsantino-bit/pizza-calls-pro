import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { runIndexingCheck } from "@/lib/gsc.functions";

export const Route = createFileRoute("/admin/indexing")({
  component: IndexingPage,
  head: () => ({
    meta: [
      { title: "Indexing Check" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
});

function verdictTone(verdict?: string) {
  if (!verdict) return "text-muted-foreground";
  if (verdict === "PASS") return "text-green-600";
  if (verdict === "PARTIAL") return "text-amber-600";
  return "text-red-600";
}

function IndexingPage() {
  const run = useServerFn(runIndexingCheck);
  const mutation = useMutation({ mutationFn: () => run() });

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold text-foreground">Google Search Console — Indexing Check</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Resubmits the sitemap and inspects each URL via the URL Inspection API.
      </p>

      <button
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {mutation.isPending ? "Running…" : "Submit sitemap & inspect URLs"}
      </button>

      {mutation.error && (
        <p className="mt-4 text-sm text-red-600">{(mutation.error as Error).message}</p>
      )}

      {mutation.data && (
        <div className="mt-8 space-y-6">
          <div className="rounded-md border border-border p-4">
            <h2 className="font-medium text-foreground">Sitemap submission</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {mutation.data.sitemap.url} — HTTP {mutation.data.sitemap.status}{" "}
              {mutation.data.sitemap.ok ? "✓" : "✗"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Checked at {new Date(mutation.data.inspectedAt).toLocaleString()}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-medium text-foreground">URL inspections</h2>
            {mutation.data.inspections.map((i) => (
              <div key={i.url} className="rounded-md border border-border p-4">
                <div className="flex items-start justify-between gap-4">
                  <a href={i.url} className="text-sm font-medium text-foreground hover:underline">
                    {i.url}
                  </a>
                  {"verdict" in i && (
                    <span className={`text-sm font-semibold ${verdictTone(i.verdict)}`}>
                      {i.verdict ?? "UNKNOWN"}
                    </span>
                  )}
                </div>
                {!i.ok && "error" in i && (
                  <p className="mt-2 text-sm text-red-600">{i.error}</p>
                )}
                {i.ok && (
                  <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <dt>Coverage</dt>
                    <dd className="text-foreground">{i.coverageState ?? "—"}</dd>
                    <dt>Indexing</dt>
                    <dd className="text-foreground">{i.indexingState ?? "—"}</dd>
                    <dt>Robots.txt</dt>
                    <dd className="text-foreground">{i.robotsTxtState ?? "—"}</dd>
                    <dt>Page fetch</dt>
                    <dd className="text-foreground">{i.pageFetchState ?? "—"}</dd>
                    <dt>Last crawl</dt>
                    <dd className="text-foreground">
                      {i.lastCrawlTime ? new Date(i.lastCrawlTime).toLocaleString() : "Not yet crawled"}
                    </dd>
                    <dt>Google canonical</dt>
                    <dd className="text-foreground break-all">{i.googleCanonical ?? "—"}</dd>
                  </dl>
                )}
                {i.ok && i.inspectionResultLink && (
                  <a
                    href={i.inspectionResultLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-primary hover:underline"
                  >
                    Open in Search Console →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
