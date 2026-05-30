import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Server } from "lucide-react";
import ProfileImage from "@/components/ProfileImage";
import { aboutHighlights } from "@/data/about";
import { profile } from "@/data/profile";

const highlightIcons = {
  code: Code2,
  server: Server,
  database: Database,
  globe: Globe,
} as const;

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title mb-4">
            Full-stack developer focused on polished delivery.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I combine product-minded UI work with reliable backend foundations
            to turn ideas into usable, maintainable web applications.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6 rounded-[2rem] border border-border/70 bg-card/65 p-8 shadow-[0_24px_90px_-55px_hsl(var(--foreground))] backdrop-blur-xl">
            <h3 className="text-3xl font-black tracking-tight">
              Clean interfaces, solid APIs, and practical architecture.
            </h3>
            <p className="text-muted-foreground leading-8">
              {profile.aboutIntro}
            </p>
            <p className="text-muted-foreground leading-8">
              {profile.aboutDetails}
            </p>
            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-background/50 p-4 text-center"
                >
                  <p className="text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <ProfileImage
                src={profile.profileImage}
                alt={`${profile.name} - Full Stack Developer`}
                size="lg"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 -z-10 h-28 w-28 rounded-full bg-primary/25 blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 -z-10 h-36 w-36 rounded-full bg-accent/20 blur-3xl"></div>
              <div className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-border/70 bg-card/85 px-5 py-3 text-sm font-semibold shadow-xl backdrop-blur-xl sm:block">
                Based in {profile.location}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutHighlights.map((item) => {
            const Icon = highlightIcons[item.icon];

            return (
              <Card
                key={item.title}
                className="group transition-all hover:-translate-y-1 hover:border-primary/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="w-6 h-6 text-primary transition group-hover:text-primary-foreground" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
