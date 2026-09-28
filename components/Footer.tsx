import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="page-shell py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center bg-primary font-mono text-xs font-bold text-primary-foreground">AB</span>
              <span className="text-xl font-semibold tracking-[-0.04em]">{profile.brandName}</span>
            </Link>
            <p className="mt-5 max-w-lg text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
              Thoughtful interfaces. Reliable engineering. Products ready for real users.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-primary">
                  {item.name}
                </Link>
              ))}
            </nav>
            <a href={`mailto:${profile.email}`} className="mt-7 inline-flex items-center gap-2 text-lg font-semibold underline decoration-primary decoration-2 underline-offset-8">
              {profile.email} <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Boussafer Abdelhak</p>
          <p>Designed and built in Wuppertal, Germany</p>
        </div>
      </div>
    </footer>
  );
}
