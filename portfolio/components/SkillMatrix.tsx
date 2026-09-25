"use client";
import { m } from "framer-motion";
import { useState } from "react";

const groups = [
  {
    title: "AI / LLM",
    accent: "#7c3aed",
    skills: [
      { name:"LLM Gateway Design", pct:92 },
      { name:"Prompt Engineering", pct:88 },
      { name:"Agent Architecture", pct:90 },
      { name:"RAG & Embeddings", pct:82 },
    ]
  },
  {
    title: "Backend & Infra",
    accent: "#00e5ff",
    skills: [
      { name:"Node.js / TypeScript", pct:90 },
      { name:"Python", pct:88 },
      { name:"AWS EC2 / Nginx / systemd", pct:86 },
      { name:"Docker", pct:80 },
    ]
  },
  {
    title: "Product & Bots",
    accent: "#ffd700",
    skills: [
      { name:"Telegram Bot Platform", pct:92 },
      { name:"Web Scraping & Automation", pct:88 },
      { name:"Crypto / Arbitrage Logic", pct:84 },
      { name:"API Design", pct:86 },
    ]
  },
];

export default function SkillMatrix(){
  const [active,setActive]=useState<number|null>(null);
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {groups.map((g,gi)=>(
        <m.div key={g.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:gi*0.08, ease:[0.16,1,0.3,1]}}
          className="rounded-[24px] bg-[#1a1a2e] border border-[#2a2a3e] p-6 hover:border-[#3a3a5e] transition-colors">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full" style={{background:g.accent}} />
            <span className="mono text-[11px] tracking-[0.14em] text-[#a1a1aa]">{g.title.toUpperCase()}</span>
          </div>
          <div className="space-y-4">
            {g.skills.map((s,si)=>(
              <div key={s.name} onMouseEnter={()=>setActive(gi*10+si)} onMouseLeave={()=>setActive(null)}
                className="group">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] font-medium text-white/90">{s.name}</span>
                  <span className="mono text-[11px] text-[#71717a]">{s.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#11111b] overflow-hidden">
                  <m.div initial={{width:0}} whileInView={{width:`${s.pct}%`}} viewport={{once:true}} transition={{duration:0.9, delay:0.15+si*0.07, ease:[0.16,1,0.3,1]}}
                    className="h-full rounded-full"
                    style={{background: g.accent, boxShadow: active===gi*10+si ? `0 0 12px ${g.accent}60` : undefined }} />
                </div>
              </div>
            ))}
          </div>
        </m.div>
      ))}
    </div>
  );
}
