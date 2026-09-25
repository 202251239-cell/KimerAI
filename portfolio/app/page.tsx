"use client";
import { useRef, useEffect } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Nav from "../components/Nav";
import TerminalDemo from "../components/TerminalDemo";
import StatsStrip from "../components/StatsStrip";
import ProjectCard, { Project } from "../components/ProjectCard";
import SkillMatrix from "../components/SkillMatrix";
import ChatDemo from "../components/ChatDemo";
import { ArrowRight, Github, Mail, MapPin, Calendar, Mic2, GraduationCap, ExternalLink, Sparkles, Terminal, Layers, Cpu, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
  {
    title: "FreeLLMAPI", tag: "LLM GATEWAY • FLAGSHIP", featured: true, icon: "zap", accent: "#00e5ff",
    desc: "Unified OpenAI-compatible gateway — 200+ models dari 20+ provider (NVIDIA NIM, Groq, Cloudflare, HuggingFace, dll) dalam satu endpoint. Auto-fallback, streaming, self-hosted di EC2.",
    bullets: ["Satu baseURL untuk semua provider — gak perlu ganti SDK", "Fallback otomatis kalau provider rate-limit / down", "Dashboard usage + per-key rate limiting"],
    stack: ["TypeScript", "OpenAI SDK", "Nginx", "EC2", "SQLite"],
    metric: "200+", metricLabel: "models",
    links: { github: "https://github.com/202251239-cell", live: "https://api.kimerai.com" }
  },
  {
    title: "9Router", tag: "INTELLIGENT ROUTER", featured: true, icon: "layers", accent: "#7c3aed",
    desc: "Advanced LLM gateway dengan auto-routing pintar. 198 model dari 5 provider (Groq, api.b.ai, NVIDIA, Mistral, Gemini) — router milih yang tercepat & termurah per-request.",
    bullets: ["model: auto — router pilih provider optimal real-time", "Latency-optimized + cost-aware routing", "5 provider, 198 model, satu contract"],
    stack: ["TypeScript", "Hono", "Cloudflare", "Redis", "EC2"],
    metric: "198", metricLabel: "models",
    links: { github: "https://github.com/202251239-cell", live: "https://router.kimerai.com" }
  },
  {
    title: "eye_bot", tag: "CRYPTO • REAL-TIME", icon: "cpu", accent: "#10b981",
    desc: "Arbitrage scanner yang monitor orderbook 3 exchange real-time. Alert kalau spread > threshold — hitung depth, bukan cuma ticker.",
    bullets: ["Scan Binance ↔ Bybit ↔ OKX tiap detik", "Hanya alert kalau depth cukup untuk eksekusi", "Telegram alert + dashboard"],
    stack: ["Python", "ccxt", "WebSocket", "Telegram Bot API"],
    metric: "1.8%", metricLabel: "max spread found",
    links: { github: "https://github.com/202251239-cell" }
  },
  {
    title: "DealScout AI", tag: "AI • PRODUCT DISCOVERY", icon: "search", accent: "#ec4899",
    desc: "Bot discovery deal/produk pakai AI — scrape, rank, dan ringkas deal terbaik dari multi-source. Cocok buat hunting produk & price tracking.",
    bullets: ["Scrape + AI ranking multi-source", "Price tracking & alert target", "Notifikasi Telegram real-time"],
    stack: ["Python", "Playwright", "LLM", "Telegram"],
    metric: "24/7", metricLabel: "monitoring",
    links: { github: "https://github.com/202251239-cell" }
  },
  {
    title: "Hermes Agent", tag: "AGENT • 118+ SKILLS", icon: "bot", accent: "#ffd700",
    desc: "Personal AI agent — 118+ skills, memory SQLite, cron automation, multi-profile. Yang ngejalanin semua bot dan workflow KimerAI.",
    bullets: ["118+ skills: trading, scraping, media, devops, research", "Cron + memory + multi-agent orchestration", "Hermes kanban & curator lifecycle"],
    stack: ["Python", "SQLite", "Cron", "MCP", "Telegram"],
    metric: "118+", metricLabel: "skills",
    links: { github: "https://github.com/202251239-cell" }
  },
  {
    title: "Telegram Bots", tag: "BOTS • AI-POWERED", icon: "message", accent: "#00e5ff",
    desc: "Koleksi bot Telegram AI: KimerAI, KimerBot, dan 4 bot lain — dari AI chat sampai automation harian. Semua jalan di atas Hermes.",
    bullets: ["6 bots, satu agent runtime (Hermes)", "AI chat + command + scheduled jobs", "Inline + group + privacy mode"],
    stack: ["Python", "python-telegram-bot", "Hermes", "SQLite"],
    metric: "6", metricLabel: "bots live",
    links: { github: "https://github.com/202251239-cell" }
  },
];

const timeline = [
  { year: "2022", title: "Masuk Teknik Informatika UMK", desc: "Mulai ngulik Python, web, dan automation. First bot: scraper sederhana." },
  { year: "2023", title: "First production bots", desc: "eye_bot & DealScout live. Belajar EC2, Nginx, systemd — ship beneran, bukan tutorial." },
  { year: "2024", title: "FreeLLMAPI & 9Router", desc: "Bangun LLM gateway sendiri. Dari butuh API murah → jadi infra yang dipakai sendiri tiap hari." },
  { year: "2025", title: "Hermes Agent (118+ skills)", desc: "Agent framework dengan memory, cron, kanban. Semua bot sekarang jalan di atas Hermes." },
  { year: "2026 — Oct", title: "Wisuda UMK • Speaker era", desc: "Lulus S1 Teknik Informatika. Fokus: ngajar coding & AI yang praktis — bukan teori doang." },
];

export default function Page(){
  const gridRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    if(!gridRef.current) return;
    gsap.to(gridRef.current, {
      backgroundPosition: "40px 40px",
      ease: "none",
      scrollTrigger: { trigger: document.body, start:"top top", end:"bottom bottom", scrub: 1.2 }
    });
  }, []);

  // subtle hero parallax
  useGSAP(()=>{
    if(!heroRef.current) return;
    gsap.to(heroRef.current, {
      y: -30, ease:"none",
      scrollTrigger:{ trigger: heroRef.current, start:"top top", end:"bottom top", scrub:1 }
    });
  },[]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-[#00e5ff] selection:text-[#0a0a0f]">
        <Nav />

        {/* BG grid */}
        <div ref={gridRef} className="pointer-events-none fixed inset-0 grid-cyan grid-fade opacity-[0.45]" aria-hidden />

        {/* HERO — editorial asymmetric */}
        <section className="relative pt-[96px] pb-10 sm:pb-14">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
              {/* left */}
              <div ref={heroRef}>
                <m.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6, ease:[0.16,1,0.3,1]}}
                  className="inline-flex items-center gap-2 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10 px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse" />
                  <span className="mono text-[11px] tracking-[0.14em] text-[#ffd700]">SPEAKER • CODING & AI • BOOKING OPEN</span>
                </m.div>

                <m.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.08, duration:0.7, ease:[0.16,1,0.3,1]}}
                  className="display font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[0.92] tracking-[-0.04em] mt-5">
                  I teach teams<br />
                  to <span className="text-[#00e5ff]">ship AI</span><br />
                  that actually<br />
                  <span className="text-[#a1a1aa]">works.</span>
                </m.h1>

                <m.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.16, duration:0.6}}
                  className="text-[15px] sm:text-[16px] leading-7 text-[#a1a1aa] mt-4 max-w-[560px]">
                  Riski Eka Nanda — <span className="text-white font-medium">Teknik Informatika UMK (wisuda Okt 2026)</span>, builder di balik
                  FreeLLMAPI, 9Router, dan Hermes Agent. Kelas saya bukan teori — live coding, real API, error beneran, fix beneran.
                </m.p>

                <m.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.22, duration:0.6}}
                  className="flex flex-wrap gap-3 mt-6">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-[#00e5ff] text-[#0a0a0f] font-semibold px-6 py-3 rounded-full hover:bg-[#ffd700] transition-colors">
                    Book a talk <ArrowRight size={16}/>
                  </a>
                  <a href="#work" className="inline-flex items-center gap-2 border border-[#2a2a3e] text-white font-medium px-6 py-3 rounded-full hover:bg-[#1a1a2e] hover:border-[#3a3a5e] transition">
                    <Layers size={16}/> Lihat work
                  </a>
                  <a href="https://github.com/202251239-cell" target="_blank" className="inline-flex items-center gap-2 border border-[#2a2a3e] text-white font-medium px-5 py-3 rounded-full hover:bg-[#1a1a2e] transition">
                    <Github size={16}/> GitHub
                  </a>
                </m.div>

                <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.32}}
                  className="flex flex-wrap gap-2 mt-5">
                  {["FreeLLMAPI 200+ models","9Router 198 models","Hermes 118+ skills","6 bots live","EC2 • Docker • Nginx"].map(t=>(
                    <span key={t} className="mono text-[11px] px-2.5 py-1 rounded-full bg-[#1a1a2e] border border-[#2a2a3e] text-[#a1a1aa]">{t}</span>
                  ))}
                </m.div>

                <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.38}}
                  className="flex items-center gap-4 mt-6 mono text-[12px] text-[#71717a]">
                  <span className="inline-flex items-center gap-1.5"><MapPin size={14}/> Kudus, Indonesia</span>
                  <span className="inline-flex items-center gap-1.5"><GraduationCap size={14}/> UMK — S1 Informatika</span>
                  <span className="hidden sm:inline-flex items-center gap-1.5"><Mail size={14}/> 202251239@std.umk.ac.id</span>
                </m.div>
              </div>

              {/* right — terminal */}
              <m.div initial={{opacity:0,y:18, scale:0.98}} animate={{opacity:1,y:0,scale:1}} transition={{delay:0.18, duration:0.7, ease:[0.16,1,0.3,1]}}
                className="lg:sticky lg:top-[84px]">
                <TerminalDemo />
                <div className="flex gap-2 mt-3">
                  <span className="mono text-[11px] px-2.5 py-1 rounded-full bg-[#1a1a2e] border border-[#2a2a3e] text-[#71717a]">Next.js 14 • Motion v12 • GSAP • Tailwind</span>
                  <span className="mono text-[11px] px-2.5 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/20 text-[#00e5ff] hidden sm:inline-flex">real code — copy & run</span>
                </div>
              </m.div>
            </div>

            {/* stats */}
            <div className="mt-10 sm:mt-12">
              <StatsStrip />
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="relative py-10 sm:py-14">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <div className="mono text-[11px] tracking-[0.14em] text-[#00e5ff]">SELECTED WORK — REAL SHIPS, NOT SLIDES</div>
                <h2 className="display font-bold text-[28px] sm:text-[34px] leading-none tracking-[-0.03em] mt-2">Bukti, bukan janji.</h2>
                <p className="text-[14px] leading-6 text-[#a1a1aa] mt-2 max-w-[640px]">Semua project di bawah live & dipakai harian. Klik Code untuk lihat repo, atau coba endpoint-nya langsung.</p>
              </div>
              <a href="https://github.com/202251239-cell" target="_blank" className="hidden sm:inline-flex items-center gap-1.5 mono text-xs font-semibold px-4 py-2 rounded-full border border-[#2a2a3e] hover:bg-[#1a1a2e] hover:border-[#3a3a5e] transition">GitHub <ExternalLink size={12}/></a>
            </div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              {projects.map((p,i)=> <ProjectCard key={p.title} p={p} index={i} />)}
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="relative py-10 sm:py-14">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#00e5ff]" />
              <span className="mono text-[11px] tracking-[0.14em] text-[#00e5ff]">STACK & SKILLS</span>
            </div>
            <h2 className="display font-bold text-[28px] sm:text-[34px] leading-none tracking-[-0.03em]">Yang diajarin, yang dipakai sendiri.</h2>
            <p className="text-[14px] text-[#a1a1aa] mt-2 max-w-[640px]">Skill matrix di bawah animasi on-scroll (spring). Hover bar untuk glow.</p>
            <div className="mt-6"><SkillMatrix /></div>

            {/* mini chat + teaching topics */}
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 mt-6">
              <ChatDemo />
              <div className="rounded-[24px] bg-[#1a1a2e] border border-[#2a2a3e] p-6">
                <div className="mono text-[11px] tracking-[0.14em] text-[#ffd700]">WHAT I TEACH</div>
                <h3 className="display font-bold text-[20px] leading-none mt-2">Kelas yang hands-on, bukan hand-wavy.</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    { t:"Build your own LLM Gateway", d:"Dari OpenAI SDK → multi-provider fallback → deploy di EC2. Peserta pulang bawa gateway sendiri." },
                    { t:"Telegram Bot + AI (ship in 90 min)", d:"python-telegram-bot + LLM + webhook. Live coding: bot yang beneran reply, bukan echo." },
                    { t:"Agent yang nggak halu", d:"Hermes-style: skill isolation, tool calling yang strict, memory & cron. Anti-demo yang cuma prompt." },
                    { t:"Scraping & Automation yang tahan banting", d:"Playwright, anti-bot, rotation, watermark dedup — yang dipakai DealScout & eye_bot." },
                  ].map(item=>(
                    <li key={item.t} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00e5ff] shrink-0" />
                      <div><div className="text-[13.5px] font-semibold">{item.t}</div><div className="text-[13px] leading-6 text-[#a1a1aa]">{item.d}</div></div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {["Live coding","Real API keys","Error handling","Deploy to Vercel/EC2","Q&A brutal"].map(b=>(
                    <span key={b} className="mono text-[11px] px-2.5 py-1 rounded-full bg-[#11111b] border border-[#2a2a3e] text-[#a1a1aa]">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TALKS / TIMELINE */}
        <section id="talks" className="relative py-10 sm:py-14">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
            <div className="mono text-[11px] tracking-[0.14em] text-[#7c3aed]">TALKS & JOURNEY</div>
            <h2 className="display font-bold text-[28px] sm:text-[34px] leading-none tracking-[-0.03em] mt-2">Ngajar dengan cara engineer ngajar engineer.</h2>
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 mt-6">
              {/* timeline */}
              <div className="rounded-[24px] bg-[#1a1a2e] border border-[#2a2a3e] p-6 sm:p-7">
                <div className="mono text-[11px] tracking-[0.14em] text-[#71717a]">TIMELINE</div>
                <div className="relative mt-4 pl-6 border-l border-[#2a2a3e]">
                  {timeline.map((it,i)=>(
                    <m.div key={it.year} initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.06}}
                      className="relative pb-6 last:pb-0">
                      <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[#00e5ff] ring-4 ring-[#0a0a0f] border border-[#0a0a0f]" style={{ background: i===timeline.length-1 ? "#ffd700" : "#00e5ff" }} />
                      <div className="mono text-[11px] tracking-[0.12em] text-[#00e5ff]" style={{ color: i===timeline.length-1 ? "#ffd700" : "#00e5ff" }}>{it.year}</div>
                      <div className="text-[14px] font-semibold mt-1">{it.title}</div>
                      <div className="text-[13px] leading-6 text-[#a1a1aa]">{it.desc}</div>
                    </m.div>
                  ))}
                </div>
              </div>
              {/* talk cards */}
              <div className="space-y-4">
                {[
                  { k:"CODING CLASS", title:"Build an LLM Gateway in 2 Hours", meta:"Hands-on • 30–60 peserta • Laptop required", bullets:["Multi-provider fallback live","Rate limit & key rotation","Deploy ke EC2/Vercel — peserta bawa pulang URL"] },
                  { k:"AI CLASS", title:"Agents That Don't Hallucinate", meta:"Talk + live demo • Hermes architecture", bullets:["Skill isolation & strict tool calling","Memory + cron untuk agent yang hidup lama","Evaluasi: kapan agent, kapan function biasa"] },
                  { k:"WORKSHOP", title:"Telegram Bots That Ship", meta:"90 min • Zero to live bot", bullets:["Webhook vs polling — pilih yang benar","AI reply + command + scheduled jobs","Publish & monitor — bukan cuma run di laptop"] },
                ].map((card,idx)=>(
                  <m.div key={card.title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.07}}
                    className="rounded-[24px] bg-[#11111b] border border-[#2a2a3e] p-6 hover:border-[#3a3a5e] hover:bg-[#1a1a2e] transition-colors">
                    <div className="mono text-[10px] tracking-[0.14em] text-[#a1a1aa]">{card.k}</div>
                    <div className="display font-bold text-[18px] leading-none mt-1">{card.title}</div>
                    <div className="mono text-[11px] text-[#71717a] mt-1">{card.meta}</div>
                    <ul className="mt-3 space-y-1.5">
                      {card.bullets.map(b=> <li key={b} className="flex gap-2 text-[13px] text-[#a1a1aa]"><span className="mt-[7px] w-1 h-1 rounded-full bg-[#7c3aed] shrink-0" />{b}</li>)}
                    </ul>
                  </m.div>
                ))}
                <div className="rounded-[24px] border border-dashed border-[#2a2a3e] p-5 flex items-center justify-between gap-4">
                  <div><div className="text-sm font-semibold">Butuh topik custom?</div><div className="text-[13px] text-[#a1a1aa]">Aku sesuaikan ke kurikulum & level peserta.</div></div>
                  <a href="#contact" className="shrink-0 inline-flex items-center gap-1.5 bg-white text-[#0a0a0f] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#ffd700] transition">Request <ArrowRight size={14}/></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contact" className="relative py-12 sm:py-16">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
            <div className="rounded-[24px] overflow-hidden border border-[#2a2a3e] bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#11111b] p-6 sm:p-10 relative">
              <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background:"radial-gradient(600px 300px at 85% 0%, rgba(0,229,255,0.12), transparent 60%), radial-gradient(500px 300px at 0% 100%, rgba(124,58,237,0.10), transparent 60%)" }} />
              <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 mono text-[11px] tracking-[0.14em] text-[#ffd700] border border-[#ffd700]/20 bg-[#ffd700]/10 rounded-full px-3 py-1"><Mic2 size={14}/> BOOKING OPEN — SEMESTER GANJIL 2026/2027</div>
                  <h2 className="display font-bold text-[28px] sm:text-[38px] leading-[0.95] tracking-[-0.03em] mt-4">Undang KimerAI<br />ke kelas / meetup kamu.</h2>
                  <p className="text-[14px] leading-6 text-[#a1a1aa] mt-3 max-w-[520px]">Kelas coding & AI yang pesertanya beneran nge-ship — bukan cuma nonton slide. Cocok untuk universitas, komunitas, dan internal company training.</p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    <a href="mailto:202251239@std.umk.ac.id?subject=Booking%20KimerAI%20Talk" className="inline-flex items-center gap-2 bg-[#00e5ff] text-[#0a0a0f] font-semibold px-6 py-3 rounded-full hover:bg-[#ffd700] transition">Email Riski <Mail size={16}/></a>
                    <a href="https://github.com/202251239-cell" target="_blank" className="inline-flex items-center gap-2 bg-white text-[#0a0a0f] font-semibold px-6 py-3 rounded-full hover:bg-[#f0f4f8] transition"><Github size={16}/> GitHub</a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 mono text-[11px] text-[#71717a]">
                    <span className="inline-flex items-center gap-1.5"><MapPin size={12}/> Kudus • Semarang • Remote</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar size={12}/> Flexible — weekend & weekday</span>
                  </div>
                </div>
                <div className="rounded-[16px] bg-[#0a0a0f] border border-[#2a2a3e] p-5">
                  <div className="mono text-[11px] tracking-[0.14em] text-[#00e5ff]">QUICK PITCH — COPY & SEND</div>
                  <div className="mt-3 rounded-[12px] bg-[#11111b] border border-[#2a2a3e] p-4 mono text-[12.5px] leading-6 text-[#e4e4e7]">
                    Halo Kak Riski (KimerAI) —<br />
                    Kami dari <span className="text-[#71717a]">[nama kampus/komunitas]</span> ingin mengundangmu sebagai speaker coding & AI.<br />
                    Topik: <span className="text-[#71717a]">[LLM Gateway / Telegram Bot / Agent]</span><br />
                    Peserta: <span className="text-[#71717a]">[jumlah & level]</span> • Durasi: <span className="text-[#71717a]">[90–180 menit]</span><br />
                    Tanggal opsi: <span className="text-[#71717a]">[2 opsi tanggal]</span>
                  </div>
                  <a href="mailto:202251239@std.umk.ac.id?subject=Booking%20KimerAI%20Talk&body=Halo%20Kak%20Riski%20(KimerAI)%20—%0AKami%20dari%20[nama%20kampus/komunitas]%20ingin%20mengundangmu%20sebagai%20speaker%20coding%20%26%20AI.%0ATopik%3A%20[LLM%20Gateway%20%2F%20Telegram%20Bot%20%2F%20Agent]%0APeserta%3A%20[jumlah%20%26%20level]%20%E2%80%A2%20Durasi%3A%20[90%E2%80%93180%20menit]%0ATanggal%20opsi%3A%20[2%20opsi%20tanggal]"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#1a1a2e] border border-[#2a2a3e] hover:border-[#3a3a5e] transition w-full justify-center">
                    <Send size={14}/> Buka email dengan template
                  </a>
                  <div className="mono text-[11px] text-[#71717a] mt-3 text-center">atau email manual ke <span className="text-[#00e5ff]">202251239@std.umk.ac.id</span></div>
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 mono text-[11px] text-[#71717a] border-t border-[#1a1a2e] pt-6">
              <span>© {new Date().getFullYear()} KimerAI — Riski Eka Nanda • Built with Next.js 14 • Motion v12 + GSAP</span>
              <span className="inline-flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#ffd700] grid place-items-center text-[#0a0a0f] font-bold text-[10px]">K</span>
                KimerAI • Kudus, Indonesia
              </span>
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
}
