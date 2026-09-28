"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, CloudSun, MessageCircle, ShoppingBag } from "lucide-react";

interface ProjectImageProps {
  src?: string | null;
  alt: string;
  fallbackEmoji?: string;
  className?: string;
}

const treatments = [
  "bg-[#e6eade]", "bg-[#e8e4f2]", "bg-[#dde7ef]", "bg-[#e7edf7]", "bg-[#eee4d7]",
];

export default function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const kind = alt.includes("Commerce") ? 0 : alt.includes("Social") ? 1 : alt.includes("Task") ? 2 : alt.includes("Weather") ? 3 : 4;

  if (src && !imageError) {
    return <div className={`relative h-72 w-full overflow-hidden border-b border-border ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" onError={() => setImageError(true)} sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>;
  }

  return (
    <div className={`relative flex h-72 w-full items-center justify-center overflow-hidden border-b border-border p-6 sm:p-9 ${treatments[kind]} ${className}`}>
      <span className="absolute bottom-3 right-4 font-mono text-[9px] uppercase tracking-widest text-slate-600">Concept illustration</span>
      <div aria-hidden="true" className="w-full max-w-[380px] overflow-hidden rounded-lg border border-black/10 bg-[#fcfcfa] text-[#242a30] shadow-[0_20px_35px_-20px_#26334580] transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
          <div className="flex gap-1"><span className="h-1.5 w-1.5 rounded-full bg-black/20" /><span className="h-1.5 w-1.5 rounded-full bg-black/10" /><span className="h-1.5 w-1.5 rounded-full bg-black/10" /></div>
          <span className="text-[9px] text-slate-500">{["THE EVERYDAY STORE", "a place to connect", "WORKSPACE", "a little outlook", "THE JOURNAL"][kind]}</span>
          <ArrowUpRight className="h-3 w-3 text-slate-400" />
        </div>
        {kind === 0 && <div className="p-5">
          <div className="flex items-center justify-between"><p className="text-sm font-semibold tracking-tight">Everyday essentials.</p><ShoppingBag className="h-3 w-3" /></div>
          <p className="mt-1 text-[9px] text-slate-500">Less, but better. Objects for your everyday.</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["bg-[#d5c6b2]", "bg-[#b6c2ad]", "bg-[#d7cec5]"].map((bg, i) => <div key={bg}>
              <div className={`relative flex h-24 items-center justify-center rounded ${bg}`}>
                {i === 0 ? <div className="h-14 w-9 rounded-t-lg rounded-b-xl border-r-4 border-black/10 bg-[#f4eddf] shadow-lg" /> : i === 1 ? <div className="h-12 w-12 rounded-full border-[9px] border-[#465646] bg-[#899985] shadow-lg" /> : <div className="h-14 w-10 rotate-[-12deg] rounded-sm border-l-4 border-[#846b51] bg-[#c09c78] shadow-lg" />}
              </div><p className="mt-2 text-[8px] font-medium">{["The ceramic cup", "Form & function", "Notes, collected"][i]}</p>
            </div>)}
          </div>
        </div>}
        {kind === 1 && <div className="grid grid-cols-[0.65fr_1.35fr] gap-3 p-4">
          <div className="space-y-3 border-r border-black/5 pr-2"><div className="flex items-center gap-1 text-[10px] font-semibold"><MessageCircle className="h-3 w-3 text-violet-600" />Circles</div>{["Your feed", "Messages", "Discover", "Saved"].map(x => <p key={x} className="text-[8px] text-slate-500">{x}</p>)}</div>
          <div><p className="text-[10px] font-semibold">Good things happen together.</p><div className="mt-3 rounded-md bg-[#f0edf7] p-3"><div className="flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-[#b5a4d8]" /><span className="text-[8px] font-medium">Design community</span></div><div className="mt-3 h-1.5 w-full rounded bg-violet-200" /><div className="mt-2 h-1.5 w-3/4 rounded bg-violet-200" /><div className="mt-3 flex h-12 items-center justify-center rounded bg-[#ddd5ec] text-xl text-violet-500">✳</div></div></div>
        </div>}
        {kind === 2 && <div className="p-4"><p className="text-xs font-semibold">Small steps. Big ideas.</p><div className="mt-4 grid grid-cols-3 gap-2">{["To do", "In progress", "Done"].map((label, i) => <div key={label} className="rounded bg-[#eef1f5] p-2"><p className="mb-3 text-[8px] text-slate-500">{label}</p>{[0, 1].map(n => <div key={n} className="mb-2 rounded bg-white p-2 shadow-sm"><span className={`mb-2 block h-1 w-5 rounded ${i === 2 ? "bg-emerald-300" : "bg-blue-300"}`} /><p className="text-[7px]">{["Design system", "Build something", "Ready to launch"][i]}</p><div className="mt-3 flex justify-between"><span className="h-3 w-3 rounded-full bg-slate-200" /><Check className="h-2 w-2 text-slate-400" /></div></div>)}</div>)}</div></div>}
        {kind === 3 && <div className="bg-[#e9eff9] p-5"><div className="flex justify-between"><div><p className="text-[10px]">Wuppertal, DE</p><p className="mt-3 text-5xl font-light tracking-tighter">21°</p><p className="mt-1 text-[9px] text-slate-500">A bright day ahead.</p></div><CloudSun className="mt-4 h-16 w-16 text-[#b08a35]" strokeWidth={1} /></div><div className="mt-5 grid grid-cols-4 gap-2 border-t border-slate-300/50 pt-3">{["Now", "14:00", "15:00", "16:00"].map((t, i) => <div key={t} className="text-center text-[8px] text-slate-500">{t}<p className="mt-2 text-[11px] text-slate-800">{21 + i}°</p></div>)}</div></div>}
        {kind === 4 && <div className="p-5"><p className="text-[8px] uppercase tracking-[0.2em] text-slate-500">Notes on making things</p><div className="mt-3 grid grid-cols-[1.2fr_0.8fr] gap-5"><div><p className="font-serif text-2xl leading-tight">Room for<br />a new idea.</p><div className="mt-3 h-1 w-full bg-stone-200" /><div className="mt-2 h-1 w-3/4 bg-stone-200" /><p className="mt-4 text-[8px]">Read the story ↗</p></div><div className="flex items-center justify-center rounded-t-full bg-[#b6a18b]"><div className="h-16 w-12 rounded-t-full border border-white/70" /></div></div></div>}
      </div>
    </div>
  );
}
