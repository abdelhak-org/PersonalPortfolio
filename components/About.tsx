"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Server } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive and interactive UIs with React, Next.js, and modern CSS frameworks.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side logic with Node.js, Express, and RESTful architecture.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Designing and optimizing databases with MongoDB, Mongoose, and efficient data structures.",
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description:
        "Delivering end-to-end web applications with seamless integration and deployment.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about crafting elegant solutions to complex problems
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer Specializing in MERN Stack
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a passionate Full Stack Developer with expertise in the
              MERN stack (MongoDB, Express.js, React, Node.js). I love creating
              web applications that are not only functional but also provide
              exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I bring ideas to life through clean, efficient code and modern
              development practices. I&apos;m constantly learning and adapting
              to new technologies to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <Code2 className="w-32 h-32 text-primary/40" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
