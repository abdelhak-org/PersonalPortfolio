"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-9 h-9"
      aria-label="Toggle theme"
    >
      <Sun className="hidden h-5 w-5 rotate-0 scale-100 transition-all dark:block" />
      <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
