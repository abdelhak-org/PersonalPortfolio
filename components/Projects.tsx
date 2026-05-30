import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, ExternalLink, Github } from "lucide-react";
import ProjectImage from "@/components/ProjectImage";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-secondary/30"></div>
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title mb-4">
            Projects that show product thinking and execution.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A focused collection of full-stack applications with clean UI,
            practical architecture, and measurable user value.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-8 grid gap-6">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group grid overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/50 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <ProjectImage
                src={project.image}
                alt={project.title}
                fallbackEmoji={project.fallbackEmoji}
                className="h-64 border-b lg:h-full lg:min-h-[360px] lg:border-b-0 lg:border-r"
              />
              <div className="flex flex-col">
                <CardHeader className="p-7">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured case study 0{index + 1}
                    </Badge>
                    <span className="text-sm font-semibold text-muted-foreground">
                      Full-stack build
                    </span>
                  </div>
                  <CardTitle className="text-3xl font-black tracking-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-base leading-7">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow px-7">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-border/70 bg-background/45 p-4 text-sm font-semibold text-muted-foreground"
                      >
                        <CheckCircle2 className="mb-3 h-5 w-5 text-accent" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3 p-7 pt-2">
                  <Button asChild variant="outline" className="flex-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button asChild className="flex-1">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden transition-all hover:-translate-y-2 hover:border-primary/50"
            >
              {/* Project Image */}
              <ProjectImage
                src={project.image}
                alt={project.title}
                fallbackEmoji={project.fallbackEmoji}
              />
              <CardHeader>
                <CardTitle className="text-2xl font-black tracking-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-6">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* Highlights */}
                <div className="space-y-1">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 shadow-[0_0_18px_hsl(var(--primary))]"></span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                {project.demoUrl && (
                  <Button asChild className="flex-1">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href={profile.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
