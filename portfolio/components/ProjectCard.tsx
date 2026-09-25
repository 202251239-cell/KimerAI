"use client";
import { m } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Zap, Layers, Bot, Search, MessageCircle, Cpu } from "lucide-react";
import { useState } from "react";
const iconMap: Record<string, any> = { zap: Zap, layers: Layers, bot: Bot, search: Search, message: MessageCircle, cpu: Cpu };
export type Project = {
  title:string; tag:string; desc:string; bullets:string[]; stack:string[]; metric:string; metricLabel:string;
  links:{github?:string; live?:string}; accent:string; icon:string; featured?:boolean;
};
export default function ProjectCard({ p, index }: { p:Project; index:number }){
  const [hover,setHover]=useState(false);
  const Icon=iconMap[p.icon]??Layers;
  return (
    <m.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*0.07, ease:[0.16,1,0.3,1], duration:0.6}}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      className={`group relative rounded-[24px] bg-[#1a1a2e] border overflow-hidden transition-all duration-300 ${hover ? "border-[#3a3a5e] shadow-[0_16px_40px_rgba(0,0,0,0.4)]" : "border-[#2a2a3e]" } ${p.featured ? "lg:col-span-2" : ""}`}
      style={{ transform: hover ? "translateY(-4px)" : "translateY(0)" }}>
      <div className="h-[3px] w-full" style={{background:p.accent}} />
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-[12px] grid place-items-center text-white shrink-0" style={{background:p.accent}}><Icon size={18}/></span>
            <div>
              <div className="mono text-[10px] tracking-[0.14em] text-[#71717a]">{p.tag}</div>
              <div className="display font-bold text-[17px] leading-none">{p.title}</div>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#11111b] border border-[#2a2a3e] text-white whitespace-nowrap">
            {p.metric} <span className="font-normal text-[#71717a]">{p.metricLabel}</span>
          </span>
        </div>
        <p className="text-[13.5px] leading-6 text-[#a1a1aa] mt-3">{p.desc}</p>
        <ul className="mt-3 space-y-1.5">
          {p.bullets.map(b=> <li key={b} className="flex gap-2 text-[13px] text-[#a1a1aa]"><span className="mt-[7px] w-1 h-1 rounded-full bg-[#00e5ff] shrink-0" />{b}</li>)}
        </ul>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {p.stack.map(s=> <span key={s} className="mono text-[11px] px-2.5 py-1 rounded-full bg-[#11111b] border border-[#2a2a3e] text-[#a1a1aa]">{s}</span>)}
        </div>
        <div className="flex items-center gap-2 mt-5">
          {p.links.github && <a href={p.links.github} target="_blank" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-white text-[#0a0a0f] hover:bg-[#ffd700] transition"><Github size={14}/> Code</a>}
          {p.links.live && <a href={p.links.live} target="_blank" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-[#2a2a3e] text-white hover:bg-[#11111b] transition">Live <ExternalLink size={12}/></a>}
          <span className="ml-auto sm:hidden mono text-[11px] text-[#71717a]">{p.metric} {p.metricLabel}</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500" style={{background:`radial-gradient(520px 220px at 85% 0%, ${p.accent}14, transparent 65%)`}} />
    </m.div>
  );
}
