"use client";
import { useEffect, useState, useRef } from "react";
import { m, useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, suffix="" }: { value:number; suffix?:string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once:true, margin:"-20%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping:30, stiffness:90 });
  const [n, setN] = useState(0);
  useEffect(()=>{ const u = spring.on("change", v=> setN(Math.round(v))); return ()=>u(); },[spring]);
  useEffect(()=>{ if(inView) mv.set(value); },[inView, value, mv]);
  return <span ref={ref} className="mono">{n}{suffix}</span>;
}
