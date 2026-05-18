import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, BarChart3, Users, Sparkles, Check, ArrowRight, Globe2,
  Timer, DollarSign, ChefHat, TrendingUp, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard.jpg";
import pizzaImg from "@/assets/pizza.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "FeedInEfficiency — AI Phone Assistant for Pizza Restaurants" },
      { name: "description", content: "Bilingual AI answers calls 24/7, takes perfect orders, and gives you real-time analytics. Only $600/month — only if it works." },
      { property: "og:title", content: "FeedInEfficiency — AI Phone Assistant That Increases Profits" },
      { property: "og:description", content: "Never miss another order. 14-day free trial, no credit card required." },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="w-8 h-8 rounded-lg bg-[var(--gradient-warm)] grid place-items-center text-primary-foreground">
            <Sparkles className="w-4 h-4" />
          </span>
          FeedInEfficiency
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Stories</a>
        </nav>
        <Button size="sm" className="rounded-full">Start Free Trial</Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 lg:pt-28 lg:pb-36 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-basil animate-pulse" />
            Now answering calls in English & Spanish
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
            Your AI Phone Assistant That{" "}
            <span className="bg-[var(--gradient-warm)] bg-clip-text text-transparent">
              Actually Increases Profits
            </span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bilingual AI answers calls 24/7, takes orders perfectly, and gives you real-time
            analytics to run your restaurant smarter.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-[var(--shadow-glow)] group">
              Start Free 14-Day Trial
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-basil" />
              No credit card required · Cancel anytime
            </div>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-x-0 -top-10 h-40 bg-[var(--gradient-warm)] blur-3xl opacity-20 rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] bg-card">
            <img
              src={dashboardImg}
              alt="FeedInEfficiency analytics dashboard showing revenue, live kitchen orders, and AI ROI"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProp() {
  return (
    <section className="py-16 border-y border-border bg-card">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
          The FeedInEfficiency Promise
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
          Only pay if it works.
        </h2>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          <span className="text-foreground font-semibold">$600/month</span> after your risk-free trial. If it doesn't grow your revenue, you don't pay.
        </p>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Phone,
    title: "AI Phone System",
    desc: "Bilingual answering that never misses a call. Perfect order accuracy, every single time.",
    bullets: ["Answers in English & Spanish", "Never misses a call or order", "Perfect order accuracy"],
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    desc: "Watch profit, orders, and kitchen flow update live. Know exactly where every dollar comes from.",
    bullets: ["Profit & ROI tracking", "Daily orders + revenue", "Live kitchen prep times", "Avg. order value"],
  },
  {
    icon: Users,
    title: "Customer Intelligence",
    desc: "Built-in rewards and a customer database that turns one-time orders into regulars.",
    bullets: ["Built-in rewards system", "Customer history & profiles", "Custom analytics"],
  },
];

function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Features</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Everything your restaurant needs to run smarter.
          </h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-8 rounded-2xl border border-border bg-card hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-warm)] grid place-items-center text-primary-foreground mb-6 shadow-[var(--shadow-glow)]">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.desc}</p>
              <ul className="mt-6 space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-basil flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  { icon: TrendingUp, label: "Boost Sales", desc: "AI never misses a call, captures upsells, and converts every ring into revenue — more effectively than any human can, 24 hours a day." },
  { icon: DollarSign, label: "Cut Costs", desc: "Replace expensive phone shifts with a single AI that works around the clock, handling more calls for a fraction of the labor cost." },
  { icon: Timer, label: "Save Time", desc: "Your team stays focused on cooking while AI handles every phone order from start to finish — instantly, accurately, and all day long." },
  { icon: ChefHat, label: "Kitchen Efficiency", desc: "See order bottlenecks and prep delays in real time so you can streamline the line before the next rush hits." },
];

function Benefits() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Why owners switch</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Built for the realities of a busy pizzeria.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From the Friday-night rush to the slow Tuesday lunch — FeedInEfficiency keeps your phone line
              perfect and your margins healthy.
            </p>
            <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
              <img
                src={pizzaImg}
                alt="Wood-fired pizza"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.label} className="p-7 rounded-2xl bg-card border border-border">
                <b.icon className="w-6 h-6 text-primary" />
                <div className="mt-4 font-semibold text-lg">{b.label}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const included = [
    "Bilingual AI phone answering (EN/ES)",
    "Real-time analytics dashboard",
    "Live kitchen order tracking",
    "Customer database & rewards",
    "Unlimited calls & orders",
    "Setup + onboarding included",
  ];
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Simple, honest, risk-free.
          </h2>
        </div>
        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)]">
          <div className="p-10 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold mb-4">
                14-DAY FREE TRIAL
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-6xl font-bold">$600</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-muted-foreground">
                But only if you love it. No contracts. Cancel anytime.
              </p>
              <Button size="lg" className="mt-8 rounded-full h-14 px-8 w-full md:w-auto shadow-[var(--shadow-glow)]">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">No credit card required.</p>
            </div>
            <ul className="space-y-3">
              {included.map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-basil/15 grid place-items-center flex-shrink-0">
                    <Check className="w-3 h-3 text-basil" />
                  </span>
                  <span className="text-sm">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl p-12 md:p-20 overflow-hidden text-center" style={{ background: "var(--gradient-warm)" }}>
          <Globe2 className="absolute -right-10 -bottom-10 w-72 h-72 text-primary-foreground/10" />
          <h2 className="relative font-display text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
            Stop missing orders. Start growing.
          </h2>
          <p className="relative mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Set up in under 24 hours. Your phone line — perfect by tomorrow night.
          </p>
          <Button size="lg" variant="secondary" className="relative mt-10 rounded-full h-14 px-8 bg-card text-foreground hover:bg-card/90">
            Start Free 14-Day Trial
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="w-8 h-8 rounded-lg bg-[var(--gradient-warm)] grid place-items-center text-primary-foreground">
              <Sparkles className="w-4 h-4" />
            </span>
            FeedInEfficiency
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            The AI phone assistant built for pizza restaurants. Bilingual, accurate, and always on.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-foreground">Stories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@feedinefficiency.com</li>
            <li>1-800-FEED-INEFF</li>
            <li>Mon–Sun, 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} FeedInEfficiency. All rights reserved.</div>
          <Button size="sm" className="rounded-full">Start Free Trial</Button>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ValueProp />
        <Features />
        <Benefits />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
