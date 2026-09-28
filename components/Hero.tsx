import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Layers, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden border-b border-border pt-20">
      <div className="page-shell pb-8 pt-14 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="pb-2">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Available for selected projects
            </div>
            <p className="mb-5 text-sm font-medium text-muted-foreground">Hello, I’m Abdelhak <span aria-hidden="true">↗</span></p>
            <h1 className="text-[clamp(3rem,5.7vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.065em]">
              Thoughtfully built.<br />
              <span className="text-primary">From first pixel</span><br />
              <span className="text-primary">to final deploy.</span>
            </h1>
            <p className="mt-7 max-w-[31rem] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I’m a full-stack developer turning complex ideas into clear, intuitive web experiences. Built with care. Made to work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="#projects">Explore my work <ArrowUpRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="#contact">Let’s talk</Link></Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{profile.location}</span>
              <span className="h-3 border-l border-border" aria-hidden="true" />
              {profile.socialLinks.filter(s => s.type !== "twitter").map(s => (
                <a key={s.type} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="transition-colors hover:text-primary">
                  {s.type === "github" ? <Github className="h-4 w-4" /> : <Linkedin className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>
          <div className="relative isolate mx-auto w-full max-w-[520px] py-7 lg:py-12" aria-hidden="true">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#e8eaf4] dark:bg-[#1a2035]" />
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-grid-pattern opacity-40" />
            <div className="relative mx-5 overflow-hidden rounded-xl border border-white/15 bg-[#171d30] text-white shadow-[0_24px_60px_-20px_#11183180] sm:mx-9">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#ff8a80]" /><span className="h-2 w-2 rounded-full bg-[#e9cb75]" /><span className="h-2 w-2 rounded-full bg-[#87bc9b]" /></div>
                <span className="font-mono text-[10px] text-slate-400">a little craft, a lot of care</span>
                <Code2 className="h-3.5 w-3.5 text-slate-400" />
              </div>
              <div className="px-5 py-7 sm:px-7">
                <p className="font-mono text-[10px] text-slate-400">{"// ideas → meaningful experiences"}</p>
                <div className="mt-6 space-y-2 font-mono text-[10px] leading-6 sm:text-xs">
                  <p><span className="text-[#c0adfa]">const</span> developer = {"{"}</p>
                  <p className="pl-4">name: <span className="text-[#abd3b2]">&apos;Abdelhak&apos;</span>,</p>
                  <p className="pl-4">focus: <span className="text-[#abd3b2]">&apos;Full-stack development&apos;</span>,</p>
                  <p className="pl-4">approach: [</p>
                  <p className="pl-8 text-[#f0cb9b]">&apos;Think clearly&apos;,</p>
                  <p className="pl-8 text-[#f0cb9b]">&apos;Build thoughtfully&apos;,</p>
                  <p className="pl-8 text-[#f0cb9b]">&apos;Refine the details&apos;</p>
                  <p className="pl-4">]</p><p>{"}"};</p>
                </div>
                <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 font-mono text-[10px] text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-[#abd3b2]" /> Made for the real world.</div>
              </div>
            </div>
            <div className="absolute -bottom-1 right-3 flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:right-0">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Layers className="h-4 w-4" /></span>
              <div><p className="text-xs font-semibold">One developer. Every layer.</p><p className="mt-1 text-[10px] text-muted-foreground">Interface · API · Database</p></div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-8 border-t border-border pt-7 sm:mt-20 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex justify-between gap-4 sm:justify-start sm:gap-14">
            {profile.stats.map(stat => <div key={stat.label}><p className="text-2xl font-medium tracking-tight">{stat.value}</p><p className="mt-1 text-[11px] text-muted-foreground">{stat.label}</p></div>)}
          </div>
          <a href="#projects" className="hidden items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-primary sm:flex">A few things I’ve built <span className="grid h-9 w-9 place-items-center rounded-full border border-border"><ArrowDown className="h-4 w-4" /></span></a>
        </div>
      </div>
    </section>
  );
}
