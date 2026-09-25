"use client";
import { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
const SNIPPETS = {
  freellm: {
    label: "FreeLLMAPI",
    code: `// FreeLLMAPI — one endpoint, 200+ models
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.kimerai.com/v1",
  apiKey: process.env.FREELLM_KEY,
});

// auto-fallback across 20+ providers
const res = await client.chat.completions.create({
  model: "llama-3.3-70b", // or gpt-4o, claude-3.5, gemini-2.0...
  messages: [{ role: "user", content: "Jelaskan arbitrage crypto dalam 1 paragraf" }],
  stream: true,
});

for await (const chunk of res) {
  process.stdout.write(chunk.choices[0]?.delta?.content || "");
}`,
  },
  nine: {
    label: "9Router",
    code: `// 9Router — smart routing across 198 models
const res = await fetch("https://router.kimerai.com/v1/chat/completions", {
  method: "POST",
  headers: { "Authorization": "Bearer " + process.env.ROUTER_KEY },
  body: JSON.stringify({
    model: "auto", // router picks cheapest + fastest
    messages: [{ role: "user", content: "Build me a Telegram bot handler" }],
    providers: ["groq", "nvidia", "mistral", "gemini"],
    fallback: true,
    latency_optimized: true
  })
});

const data = await res.json();
console.log(\`Routed to \${data.provider} / \${data.model} in \${data.latency}ms\`);`,
  },
  hermes: {
    label: "Hermes Agent",
    code: `// Hermes Agent — 118+ skills, cron, memory
import { Hermes } from "@kimerai/hermes";

// long-running agent with memory + tools
const agent = new Hermes({
  memory: "sqlite://~/.hermes/memory.db",
  cron: [{ every: "30m", task: "scan arbitrage" }],
  skills: ["crypto-trading", "telegram-bot", "web-scraping"]
});

agent.on("tool:call", (call) => {
  console.log(\`→ \${call.skill}.\${call.tool}\`, call.args);
});

await agent.run("Cek harga BTC di 3 exchange, alert kalau spread > 1.2%");
// → eye_bot scanning... spread 1.8% found on Binance↔Bybit`,
  },
  eye: {
    label: "eye_bot",
    code: `// eye_bot — real-time arbitrage scanner
import { EyeBot } from "@kimerai/eye-bot";

const bot = new EyeBot({
  exchanges: ["binance","bybit","okx"],
  threshold: 0.012, // 1.2% spread
  notify: "telegram:@kimerai_alerts"
});

bot.on("opportunity", (opp) => {
  console.log(\`[ARB] \${opp.pair} \${opp.spread}% \${opp.buy} → \${opp.sell}\`);
  // [ARB] BTC/USDT 1.84% bybit → binance ($412 profit)
});

await bot.watch(["BTC/USDT","ETH/USDT","SOL/USDT"]);`,
  }
} as const;
type Tab = keyof typeof SNIPPETS;

export default function TerminalDemo(){
  const [tab,setTab]=useState<Tab>("freellm");
  const [typed,setTyped]=useState("");
  const full = SNIPPETS[tab].code;
  const idxRef=useRef(0);
  useEffect(()=>{
    setTyped(""); idxRef.current=0;
    let t: ReturnType<typeof setTimeout>;
    const tick=()=>{
      if(idxRef.current < full.length){
        const chunk = Math.ceil(Math.random()*3)+1;
        setTyped(full.slice(0, idxRef.current+chunk));
        idxRef.current+=chunk;
        t=setTimeout(tick, 10 + Math.random()*16);
      }
    };
    const start=setTimeout(tick, 300);
    return()=>{ clearTimeout(t); clearTimeout(start); };
  },[tab, full]);
  const lines=typed.split("\n");
  return (
    <div className="w-full rounded-[16px] overflow-hidden border border-[#2a2a3e] bg-[#0f0f14] shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-4 py-3 bg-[#11111b] border-b border-[#2a2a3e]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 mono text-[11px] tracking-widest text-white/30 hidden sm:inline">kimerai — zsh — 80×24</span>
        </div>
        <div className="hidden sm:flex gap-1 p-1 rounded-full bg-[#0a0a0f] border border-[#2a2a3e]">
          {(Object.keys(SNIPPETS) as Tab[]).map(k=>(
            <button key={k} onClick={()=>setTab(k)} className={`px-3 py-1 rounded-full text-xs font-medium transition ${tab===k ? "bg-[#00e5ff] text-[#0a0a0f]" : "text-[#a1a1aa] hover:text-white"}`}>{SNIPPETS[k].label}</button>
          ))}
        </div>
      </div>
      <div className="flex sm:hidden gap-1.5 p-2 bg-[#11111b] border-b border-[#2a2a3e]">
        {(Object.keys(SNIPPETS) as Tab[]).map(k=>(
          <button key={k} onClick={()=>setTab(k)} className={`flex-1 py-1.5 rounded-full text-xs font-medium transition ${tab===k ? "bg-[#00e5ff] text-[#0a0a0f]" : "bg-[#0a0a0f] text-[#a1a1aa] border border-[#2a2a3e]"}`}>{SNIPPETS[k].label}</button>
        ))}
      </div>
      <div className="relative flex">
        <div className="hidden sm:flex flex-col items-end pr-3 pt-4 gap-0 w-[48px] shrink-0 bg-white/[0.02] border-r border-white/5">
          {lines.map((_,i)=>(<span key={i} className="mono text-[11px] leading-6 text-white/20">{String(i+1).padStart(2,"0")}</span>))}
        </div>
        <pre className="mono text-[11.5px] sm:text-[12.5px] leading-5 sm:leading-6 p-4 sm:pl-4 flex-1 overflow-x-auto min-h-[380px] text-[#e4e4e7] whitespace-pre">
          <code>{typed}<span className="inline-block w-[7px] h-[14px] bg-[#00e5ff] ml-0.5 animate-pulse translate-y-[2px]" /></code>
        </pre>
      </div>
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#11111b] border-t border-[#2a2a3e] mono text-[11px] text-white/30">
        <span>● live · {SNIPPETS[tab].label} · {full.split("\n").length} lines</span>
        <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> API online</span>
      </div>
    </div>
  );
}
