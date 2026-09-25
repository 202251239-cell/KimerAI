"use client";
import { m } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
const stats=[
  { v:200, suffix:"+", label:"models via FreeLLMAPI", sub:"20+ providers • one OpenAI-compatible endpoint" },
  { v:198, suffix:"", label:"models on 9Router", sub:"5 providers • latency-aware auto-routing" },
  { v:118, suffix:"+", label:"skills in Hermes Agent", sub:"memory • cron • 6 Telegram bots" },
  { v:6, suffix:"", label:"production bots shipped", sub:"eye_bot • DealScout • KimerBot" },
];
export default function StatsStrip(){
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((s,i)=>(
        <m.div key={s.label} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08, ease:[0.16,1,0.3,1], duration:0.6}}
          className="rounded-[16px] bg-[#11111b] border border-[#2a2a3e] p-4 sm:p-5 hover:border-[#3a3a5e] hover:bg-[#1a1a2e] transition-colors">
          <div className="text-[26px] sm:text-[28px] font-bold tracking-tight leading-none"><AnimatedCounter value={s.v} suffix={s.suffix}/></div>
          <div className="text-[12.5px] font-semibold leading-tight mt-1">{s.label}</div>
          <div className="mono text-[11px] text-[#71717a] mt-1 leading-snug">{s.sub}</div>
        </m.div>
      ))}
    </div>
  );
}
