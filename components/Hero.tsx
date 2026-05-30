import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Linkedin,
  Layers3,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-chart-3/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary shadow-[0_0_40px_-18px_hsl(var(--primary))] backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Available for modern MERN and Next.js projects
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
            Building modern web products with clean full-stack engineering.
          </h1>

          <p className="mt-6 text-xl font-semibold text-primary">
            {profile.name} / {profile.title}
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {profile.heroDescription}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href="#projects">
                View selected work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            {profile.resumeUrl && (
              <Button asChild size="lg" variant="outline">
                <a href={profile.resumeUrl} download={profile.resumeDownloadName}>
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            )}
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Let&apos;s talk</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/80 bg-card/70 p-3 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              aria-label="Visit my GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socialLinks[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/80 bg-card/70 p-3 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              aria-label="Connect with me on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="h-px w-16 bg-border"></span>
            <span className="text-sm text-muted-foreground">
              Based in {profile.location}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-primary/25 via-accent/10 to-chart-3/10 blur-2xl"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/80 p-5 shadow-[0_30px_100px_-50px_hsl(var(--primary))] backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between border-b border-border/70 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-chart-4"></span>
                <span className="h-3 w-3 rounded-full bg-chart-5"></span>
                <span className="h-3 w-3 rounded-full bg-accent"></span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Terminal className="h-4 w-4" /> portfolio.tsx
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-border/70 bg-background/55 p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">
                      Product engineering dashboard
                    </p>
                    <h2 className="mt-1 text-2xl font-black tracking-tight">
                      Fast, accessible, scalable.
                    </h2>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Layers3 className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-border/70 bg-card/70 p-4"
                    >
                      <p className="text-2xl font-black text-primary">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-4 text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Responsive UI systems",
                  "API and database design",
                  "Authentication flows",
                  "Performance-focused delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/40 p-4 text-sm font-semibold text-muted-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/40 p-4 font-mono text-sm leading-7">
                <p className="text-muted-foreground">
                  <span className="text-primary">const</span> stack = [&quot;React&quot;, &quot;Next.js&quot;, &quot;Node&quot;, &quot;MongoDB&quot;];
                </p>
                <p className="text-muted-foreground">
                  <span className="text-accent">focus</span>: &quot;maintainable products that ship&quot;
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="h-4 w-4 text-primary" /> production-ready interfaces + APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-primary/60">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
}
