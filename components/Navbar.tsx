"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        isScrolled || isMobileMenuOpen
          ? "border-border bg-background/95 backdrop-blur-md"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="page-shell flex h-20 items-center justify-between">
        <Link href="#home" className="group flex items-center gap-3" aria-label="Go to homepage">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground transition-transform group-hover:-rotate-6">
            AB
          </span>
          <span className="text-lg font-semibold tracking-[-0.04em]">
            {profile.brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild>
            <Link href="#contact">
              Let&apos;s work <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            className="grid h-11 w-11 place-items-center border border-border bg-background text-foreground transition-colors hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-[1400px] divide-y divide-border">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-between py-4 text-xl font-semibold tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-5 flex h-12 items-center justify-center gap-2 bg-primary font-semibold text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
