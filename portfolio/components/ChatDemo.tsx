"use client";
import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

type Msg = { role:"user"|"assistant"; text:string };
const PRESET: Msg[] = [
  { role:"assistant", text:"Hai! Aku KimerAI — tanya apa aja soal FreeLLMAPI, 9Router, atau Hermes. Coba tanya sesuatu 👇" },
];
const REPLIES: Record<string,string> = {
  "freellmapi": "FreeLLMAPI nge-wrap 200+ model dari 20+ provider (NVIDIA NIM, Groq, Cloudflare, HuggingFace…) jadi satu endpoint yang OpenAI-compatible. Auto-fallback kalau satu provider down. Self-hosted di EC2 — latency p95 ~320ms.",
  "9router": "9Router itu LLM gateway yang lebih pintar: dia routing per-request ke provider tercepat/termurah dari 198 model (Groq, api.b.ai, NVIDIA, Mistral, Gemini). Support `model: auto` + latency optimization. Cocok buat prod yang butuh cost control.",
  "hermes": "Hermes Agent punya 118+ skills, memory SQLite, cron automation, dan 6 bot Telegram yang jalan 24/7. Arsitekturnya skill-based — tiap skill isolasi tool-nya sendiri, jadi agent-nya nggak hallucinate tool yang nggak ada.",
  "arbitrage": "eye_bot scan 3 exchange (Binance, Bybit, OKX) tiap detik. Kalau spread > 1.2%, dia alert via Telegram. Logic-nya cek orderbook depth, bukan cuma ticker — jadi nggak false positive.",
  "default": "Good question! Intinya: aku bangun infra AI yang fokus ke reliability & cost — bukan demo cantik tapi nggak ship. Mau deep-dive ke arsitektur atau cara pakainya?"
};
function replyFor(q:string){
  const low=q.toLowerCase();
  if(low.includes("freellm")) return REPLIES.freellmapi;
  if(low.includes("9router") || low.includes("router")) return REPLIES["9router"];
  if(low.includes("hermes")) return REPLIES.hermes;
  if(low.includes("arbit") || low.includes("eye")) return REPLIES.arbitrage;
  return REPLIES.default;
}

export default function ChatDemo(){
  const [msgs,setMsgs]=useState<Msg[]>(PRESET);
  const [input,setInput]=useState("");
  const [typing,setTyping]=useState(false);
  const endRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs, typing]);
  const send = (t?:string) => {
    const text=(t ?? input).trim(); if(!text) return;
    setMsgs(m=>[...m,{role:"user", text}]);
    setInput(""); setTyping(true);
    setTimeout(()=>{ setTyping(false); setMsgs(m=>[...m,{role:"assistant", text: replyFor(text)}]); }, 700+Math.random()*400);
  };
  const chips=["Apa itu FreeLLMAPI?","Gimana 9Router routing?","Hermes punya skill apa?","eye_bot cara kerja?"];
  return (
    <div className="rounded-[24px] bg-[#1a1a2e] border border-[#2a2a3e] overflow-hidden flex flex-col">
      <div className="px-5 py-4 border-b border-[#2a2a3e] flex items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-[#ffd700] grid place-items-center text-[#0a0a0f]"><Sparkles size={16}/></span>
        <div>
          <div className="text-sm font-semibold">KimerAI Chat</div>
          <div className="mono text-[11px] text-[#71717a]">demo — jawaban statis, animasi asli</div>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 mono text-[11px] text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> online</span>
      </div>
      <div className="h-[300px] overflow-y-auto p-4 space-y-3 bg-[#0f0f14]/50">
        {msgs.map((msg,i)=>(
          <m.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className={`flex ${msg.role==="user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-6 ${msg.role==="user" ? "bg-[#00e5ff] text-[#0a0a0f] rounded-br-md" : "bg-[#11111b] border border-[#2a2a3e] text-[#e4e4e7] rounded-bl-md"}`}>
              {msg.text}
            </div>
          </m.div>
        ))}
        {typing && <div className="flex justify-start"><div className="bg-[#11111b] border border-[#2a2a3e] rounded-2xl rounded-bl-md px-3.5 py-3"><span className="flex gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#71717a] animate-bounce" /><span className="w-1.5 h-1.5 rounded-full bg-[#71717a] animate-bounce [animation-delay:120ms]" /><span className="w-1.5 h-1.5 rounded-full bg-[#71717a] animate-bounce [animation-delay:240ms]" /></span></div></div>}
        <div ref={endRef} />
      </div>
      <div className="px-3 py-2 border-t border-[#2a2a3e] bg-[#11111b]/50">
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {chips.map(c=> <button key={c} onClick={()=>send(c)} className="shrink-0 mono text-[11px] px-2.5 py-1 rounded-full bg-[#0a0a0f] border border-[#2a2a3e] text-[#a1a1aa] hover:text-white hover:border-[#3a3a5e] transition">{c}</button>)}
        </div>
        <div className="flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=> e.key==="Enter" && send()}
            placeholder="Tanya sesuatu… (Enter untuk kirim)" className="flex-1 bg-[#0a0a0f] border border-[#2a2a3e] rounded-full px-4 py-2.5 text-sm outline-none focus:border-[#00e5ff] placeholder:text-[#71717a]" />
          <button onClick={()=>send()} className="w-10 h-10 rounded-full bg-[#00e5ff] text-[#0a0a0f] grid place-items-center hover:bg-[#ffd700] transition"><Send size={16}/></button>
        </div>
      </div>
    </div>
  );
}
