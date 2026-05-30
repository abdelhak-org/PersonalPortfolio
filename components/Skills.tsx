import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary/10 text-primary border-primary/25";
      case "Intermediate":
        return "bg-accent/10 text-accent border-accent/25";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-eyebrow">Stack</p>
          <h2 className="section-title mb-4">
            Tools I use to design, build, and ship.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A practical stack for modern React interfaces, backend APIs,
            databases, integrations, and deployment workflows.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <CardHeader className="relative">
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20"></div>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl font-black tracking-tight">
                    {category.title}
                  </span>
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className={`${getLevelColor(skill.level)} px-3 py-1`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="inline-flex items-center gap-2 mr-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Advanced
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Intermediate
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
