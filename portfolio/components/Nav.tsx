"use client";
import { useState, useEffect } from "react";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
const links = [
  { href:"#work", label:"Work" },
  { href:"#stack", label:"Stack" },
  { href:"#talks", label:"Talks" },
  { href:"#contact", label:"Contact" },
];
export default function Nav(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const on=()=>setScrolled(window.scrollY>16);
    on(); window.addEventListener("scroll",on); return()=>window.removeEventListener("scroll",on);
  },[]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-[#2a2a3e]" : "bg-transparent border-transparent"}`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-[#ffd700] grid place-items-center font-bold text-[#0a0a0f] text-[14px] tracking-tighter shadow-[0_0_20px_rgba(255,215,0,0.35)]">K</span>
          <span className="display font-bold text-[16px] tracking-tight">KimerAI</span>
          <span className="hidden lg:inline-flex mono text-[10px] tracking-[0.14em] text-[#a1a1aa] border border-[#2a2a3e] rounded-full px-2.5 py-1 ml-1">RISKI EKA NANDA</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l=> <a key={l.href} href={l.href} className="px-3.5 py-1.5 text-[13px] font-medium text-[#a1a1aa] hover:text-white rounded-full hover:bg-[#1a1a2e] transition">{l.label}</a>)}
          <a href="#contact" className="ml-2 inline-flex items-center gap-1.5 bg-[#00e5ff] text-[#0a0a0f] text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#ffd700] transition-colors">Book a talk →</a>
        </nav>
        <button onClick={()=>setOpen(v=>!v)} aria-label="Menu" className="md:hidden w-9 h-9 rounded-full bg-white text-[#0a0a0f] grid place-items-center">
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <m.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="md:hidden overflow-hidden bg-[#11111b] border-t border-[#2a2a3e]">
            <div className="px-5 py-4 flex flex-col">
              {links.map(l=> <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="py-3 text-[15px] font-medium border-b border-[#1a1a2e] last:border-0">{l.label}</a>)}
              <a href="#contact" onClick={()=>setOpen(false)} className="mt-3 bg-[#00e5ff] text-[#0a0a0f] font-semibold text-center py-3 rounded-full">Book a talk →</a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
