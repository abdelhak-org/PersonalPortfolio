"use client";

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
import { ExternalLink, Github } from "lucide-react";
import ProjectImage from "@/components/ProjectImage";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with the MERN stack for optimal performance.",
      image: "/projects/ecommerce.png",
      fallbackEmoji: "🛍️",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/abdelhak-org/ecommerce-platform",
      demo: "#",
      highlights: ["Payment Integration", "Admin Panel", "Real-time Updates"],
    },
    {
      title: "Social Media App",
      description:
        "A real-time social networking platform with posts, comments, likes, and direct messaging. Features JWT authentication and Socket.io for live updates.",
      image: "/projects/social-media.png",
      fallbackEmoji: "💬",
      tags: ["Next.js", "Express", "MongoDB", "Socket.io", "JWT"],
      github: "https://github.com/abdelhak-org/social-media-app",
      demo: "#",
      highlights: ["Real-time Chat", "Social Features", "Responsive Design"],
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with drag-and-drop interface, team collaboration features, and detailed analytics dashboard.",
      image: "/projects/task-manager.png",
      fallbackEmoji: "📋",
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind"],
      github: "https://github.com/abdelhak-org/task-manager",
      demo: "#",
      highlights: ["Drag & Drop", "Team Collaboration", "Analytics"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Modern weather application with location-based forecasts, interactive maps, and weather alerts. Integrates multiple weather APIs for accurate data.",
      image: "/projects/weather.png",
      fallbackEmoji: "🌤️",
      tags: ["Next.js", "TypeScript", "REST API", "Charts", "Geolocation"],
      github: "https://github.com/abdelhak-org/weather-dashboard",
      demo: "#",
      highlights: ["API Integration", "Interactive Maps", "PWA"],
    },
    {
      title: "Blog Platform",
      description:
        "A modern blogging platform with markdown support, SEO optimization, and content management. Features include categories, tags, and search functionality.",
      image: "/projects/blog.png",
      fallbackEmoji: "✍️",
      tags: ["Next.js", "MongoDB", "MDX", "SEO", "shadcn/ui"],
      github: "https://github.com/abdelhak-org/blog-platform",
      demo: "#",
      highlights: ["SEO Optimized", "Markdown Support", "Fast Performance"],
    },
    {
      title: "Fitness Tracker",
      description:
        "Comprehensive fitness tracking application with workout plans, progress tracking, and nutrition monitoring. Includes data visualization and goal setting.",
      image: "/projects/fitness.png",
      fallbackEmoji: "💪",
      tags: ["React", "Express", "MongoDB", "Charts.js", "Redux"],
      github: "https://github.com/abdelhak-org/fitness-tracker",
      demo: "#",
      highlights: ["Progress Tracking", "Data Visualization", "Goal Setting"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all flex flex-col overflow-hidden"
            >
              {/* Project Image */}
              <ProjectImage
                src={project.image}
                alt={project.title}
                fallbackEmoji={project.fallbackEmoji}
              />
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {/* Highlights */}
                <div className="space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" className="flex-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button asChild className="flex-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/yourusername"
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
