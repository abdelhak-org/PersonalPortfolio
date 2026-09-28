import { ArrowDownRight } from "lucide-react";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-[#171d30] py-24 text-[#f6f5f0] sm:py-32">
      <div className="page-shell">
        <div className="grid gap-8 border-b border-white/20 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#a8b4ff]">
              03 / The toolkit
            </p>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              The right tools.<br />Thoughtfully connected.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-8 text-white/65 lg:justify-self-end">
            From interaction design to database structure, every layer is built
            as part of one coherent product system.
          </p>
        </div>

        <div className="divide-y divide-white/15">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="group grid gap-5 py-8 sm:py-10 lg:grid-cols-[4rem_0.7fr_1.3fr] lg:items-start"
            >
              <span className="font-mono text-xs font-semibold text-[#a8b4ff]">
                0{index + 1}
              </span>
              <div>
                <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                  {category.title}
                  <ArrowDownRight className="h-5 w-5 text-[#a8b4ff] transition-transform group-hover:rotate-[-45deg]" />
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-white/65">
                  {category.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-3 lg:justify-end">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 font-mono text-xs text-white/80 transition-colors hover:border-white/40 hover:bg-white/10"
                  >
                    {skill.name}
                    <span className="sr-only">, {skill.level} level</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
