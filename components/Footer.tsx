import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/abdelhak-org", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/boussafer-abdelhak",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/abdelhak_dev",
      label: "Twitter",
    },
    { icon: Mail, href: "mailto:abdelhak.org@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold inline-block mb-4">
              <span className="text-primary">{"<Abdel"}</span>
              <span className="text-muted-foreground">{"/>"}</span>
            </Link>
            <p className="text-muted-foreground">
              Full Stack MERN Developer specializing in building exceptional
              digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} abdelTech . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
