export const skillCategories = [
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
    ],
  },
  {
    title: "Database",
    description: "Designing and managing efficient data structures",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "Mongoose", level: "Advanced" },
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
      { name: "Vercel", level: "Intermediate" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Jest/Testing Library", level: "Intermediate" },
    ],
  },
] as const;
