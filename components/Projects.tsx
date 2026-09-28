import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectImage from "@/components/ProjectImage";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Projects() {
  const github = profile.socialLinks.find((social) => social.type === "github");

  return (
    <section id="projects" className="border-b border-border bg-card py-24 sm:py-32">
      <div className="page-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="section-eyebrow">01 / Selected work</p>
            <h2 className="section-title">Ideas, brought to life.</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Full-stack products shaped around clear user flows, practical
              architecture, and technology chosen for the problem at hand.
            </p>
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-foreground underline decoration-primary decoration-2 underline-offset-8"
              >
                Full GitHub archive <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/5 ${
                index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
              }`}
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                fallbackEmoji={project.fallbackEmoji}
                className={index === 0 ? "lg:h-full lg:min-h-[440px] lg:border-b-0 lg:border-r" : ""}
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary">
                    PROJECT / 0{index + 1}
                  </span>
                  <span className="technical-label">Full stack</span>
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="rounded-full border-transparent bg-secondary/70 px-3 py-1 text-[0.65rem] font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <ul className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <Button asChild variant="outline">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github /> View source
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live product <ArrowUpRight />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
