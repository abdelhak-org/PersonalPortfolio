"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/70 bg-background/80 shadow-[0_20px_60px_-45px_hsl(var(--foreground))] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-lg font-black tracking-tight"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-sm text-primary shadow-[0_18px_45px_-25px_hsl(var(--primary))] transition group-hover:bg-primary group-hover:text-primary-foreground">
              AB
            </span>
            <span className="text-foreground transition group-hover:text-primary">
              {profile.brandName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 rounded-full border border-border/70 bg-card/55 px-2 py-2 backdrop-blur-xl md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-secondary/80 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button asChild>
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground backdrop-blur"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className="mb-4 space-y-2 rounded-3xl border border-border/70 bg-card/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-2xl px-4 py-3 font-semibold text-muted-foreground transition hover:bg-secondary/80 hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </nav>
  );
}
