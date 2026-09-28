import { ArrowUpRight, Code2, Database, Globe, Server } from "lucide-react";
import { aboutHighlights } from "@/data/about";
import { profile } from "@/data/profile";

const highlightIcons = {
  code: Code2,
  server: Server,
  database: Database,
  globe: Globe,
} as const;

const workingPrinciples = [
  ["01", "Simple systems"],
  ["02", "Clear communication"],
  ["03", "Reliable handoff"],
] as const;

export default function About() {
  return (
    <section id="about" className="border-b border-border py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="section-eyebrow">02 / Behind the work</p>
            <div className="sticky top-28">
              <div className="relative flex aspect-[4/5] max-w-sm items-end overflow-hidden rounded-2xl bg-[#202d78] p-7 text-white">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border-[1px] border-white/25" />
                <span className="absolute left-7 top-7 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                  Profile / 2026
                </span>
                <div className="relative">
                  <span className="block text-[7rem] font-medium leading-none tracking-[-0.09em] text-white sm:text-[9rem]">
                    AB
                  </span>
                  <p className="mt-4 max-w-56 text-sm leading-6 text-white/70">
                    Full-stack engineering with a sharp eye for product detail.
                  </p>
                </div>
              </div>
              <a
                href={profile.locationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
              >
                {profile.location} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="section-title">
              A developer’s mindset.<br />An eye for the details.
            </h2>

            <div className="mt-10 grid gap-6 text-lg leading-8 text-muted-foreground md:grid-cols-2">
              <p>{profile.aboutIntro}</p>
              <p>{profile.aboutDetails}</p>
            </div>

            <div className="mt-14 border-t border-border">
              {aboutHighlights.map((item, index) => {
                const Icon = highlightIcons[item.icon];

                return (
                  <article
                    key={item.title}
                    className="grid gap-4 border-b border-border py-7 sm:grid-cols-[3rem_1fr_1.2fr] sm:items-start"
                  >
                    <span className="font-mono text-xs font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                      <Icon className="h-5 w-5 text-primary" />
                      {item.title}
                    </h3>
                    <p className="leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-14 grid overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-3">
              {workingPrinciples.map(([number, principle], index) => (
                <div
                  key={principle}
                  className={`p-5 sm:p-6 ${index > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}
                >
                  <p className="font-mono text-xs font-semibold text-primary">{number}</p>
                  <p className="mt-5 text-base font-semibold tracking-tight">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
