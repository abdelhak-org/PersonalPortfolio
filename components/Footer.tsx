import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/70 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3 text-2xl font-black">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-sm text-primary">
                AB
              </span>
              <span className="text-foreground">{profile.brandName}</span>
            </Link>
            <p className="max-w-sm text-muted-foreground leading-7">
              {profile.title} specializing in building exceptional digital
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {profile.socialLinks.map((social) => {
                const Icon = socialIcons[social.type];

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
              <a
                href={`mailto:${profile.email}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/70 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} abdelTech . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
