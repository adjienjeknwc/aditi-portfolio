"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [stage, setStage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage(1);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const productManifesto = `
    Great products begin by understanding people, evolve through thoughtful design, and come to life through engineering.
  `;

  return (
    <main className="min-h-screen w-full bg-[#0a0a0c] selection:bg-indigo-500/20 antialiased text-white font-sans relative overflow-hidden">
      
      {/* Background Fine Dotted Grid Layer */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Spotlight Cursor Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 opacity-30"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(129, 140, 248, 0.04), transparent 85%)`
        }}
      />

      <AnimatePresence mode="wait">
        
        {/* PHASE 1: CINEMATIC LOADER */}
        {stage === 0 && (
          <motion.div 
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(15px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="relative group flex items-center justify-center">
              {/* Hardware-accelerated radial glow (Safari-safe) */}
              <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] bg-[radial-gradient(circle,rgba(236,72,153,0.15)_0%,transparent_70%)] animate-pulse pointer-events-none z-0" />
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-52 h-52 md:w-64 md:h-64 relative z-10"
              >
                <Image 
                  src="/spec_girl_intro_v2.png" 
                  alt="😜" 
                  fill 
                  priority
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-contain" 
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center mt-12"
            >
              <h2 className="text-white/40 font-mono text-[18px] uppercase tracking-[0.6em] italic mb-4">
                Hi! I am Aditi 
              </h2>
              <div className="w-48 h-[1px] bg-white/5 mx-auto relative overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* PHASE 2: HERO EDITORIAL LANDING */}
        {stage === 1 && (
          <motion.section 
            key="manifesto-hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-24 py-16 text-center bg-[#0a0a0c] relative"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
                 style={{ backgroundImage: 'radial-gradient(circle, #888 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-12 h-12 opacity-35 pointer-events-none">
              <Image src="/spec_girl_intro_v2.png" alt="😜" fill className="object-contain" sizes="48px"/>
            </div>

            {/* Personality Identifier */}
            <div className="mb-6 z-10 font-mono text-[10px] md:text-xs text-white/50 tracking-[0.3em] uppercase max-w-2xl select-none">
              <span>// PRODUCT THINKING</span>
              <span className="mx-3 opacity-25">|</span>
              <span>Business Analyst × UX Designer × Software Engineer</span>
            </div>

            {/* Editorial Sequential Headline */}
            <div className="max-w-5xl z-10 mb-8 select-none">
              <h1 className="text-white text-[7vw] md:text-[4.8vw] font-black uppercase tracking-tighter leading-[0.95] italic">
                <motion.span 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                  className="block"
                >
                  THE CURIOSITY OF AN <span className="text-[#10b981]">ANALYST.</span>
                </motion.span>
                
                <motion.span 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="block my-1.5"
                >
                  THE SOUL OF A <span className="text-[#a78bfa]">DESIGNER.</span>
                </motion.span>

                <motion.span 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
                  className="block"
                >
                  THE LOGIC OF AN <span className="text-[#6366f1]">ENGINEER.</span>
                </motion.span>
              </h1>
            </div>
            
            {/* Constrained manifesto statement */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-12 max-w-[650px] mx-auto font-sans tracking-wide italic"
            >
              {productManifesto}
            </motion.p>

            {/* Action button triggers direct navigation to /explore */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              className="z-10"
            >
              <Link href="/explore">
                <button className="group relative px-10 py-4.5 bg-white text-black font-mono font-bold uppercase tracking-widest text-[10px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-98 shadow-[0_0_50px_rgba(255,255,255,0.06)] cursor-pointer">
                  <span className="relative z-10 flex items-center gap-2">Explore My Three Identities →</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16, 1, 0.3, 1]" />
                </button>
              </Link>
            </motion.div>

          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}