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
      className="h-11 w-11 rounded-none border border-transparent"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    >
      <Sun className="hidden h-5 w-5 rotate-0 scale-100 transition-all dark:block" />
      <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:hidden" />
    </Button>
  );
}
