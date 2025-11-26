"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building beautiful and responsive user interfaces",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Redux/Context API", level: "Intermediate" },
        { name: "shadcn/ui", level: "Intermediate" },
      ],
    },
    {
      title: "Backend",
      description: "Creating robust and scalable server-side applications",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "JWT Authentication", level: "Advanced" },
        { name: "Socket.io", level: "Intermediate" },
        { name: "Microservices", level: "Intermediate" },
      ],
    },
    {
      title: "Database",
      description: "Designing and managing efficient data structures",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "Mongoose", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Redis", level: "Intermediate" },
        { name: "Database Design", level: "Advanced" },
        { name: "Query Optimization", level: "Intermediate" },
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Streamlining development and deployment processes",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS/Vercel", level: "Intermediate" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "npm/yarn", level: "Advanced" },
        { name: "Webpack/Vite", level: "Intermediate" },
        { name: "Jest/Testing Library", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-xl">{category.title}</span>
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${getLevelColor(skill.level)} px-3 py-1`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="inline-flex items-center gap-2 mr-4">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Advanced
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Intermediate
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
