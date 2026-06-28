"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  // Sequence control: 0 = Cinematic Loader, 1 = Manifesto Hero, 2 = Product Workflow Journey Page
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage(1);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const productManifesto = `
    Digital products do not fail from a lack of lines written or components rendered—they fail when code becomes disconnected from business intent and human realities. I architect engineering systems anchored in deep analytical parameters, refined through rigorous interaction design, and deployed on highly optimized technology stacks. I do not build standalone code matrices. I translate enterprise problems into reliable, revenue-driving digital solutions.
  `;

  return (
    <main className="min-h-screen w-full overflow-x-hidden overflow-y-auto bg-[#030303] selection:bg-emerald-500/20 antialiased text-white font-sans">
      <AnimatePresence mode="wait">
        
        {/* PHASE 1: THE CINEMATIC LOADER */}
        {stage === 0 && (
          <motion.div 
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(15px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-64 h-64 md:w-80 md:h-80 relative z-10"
              >
                <Image 
                  src="/spec_girl_intro.png" 
                  alt="😜" 
                  fill 
                  priority
                  sizes="(max-width: 768px) 100vw, 320px" // <-- ADD THIS LINE
                  className="object-contain drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)]" 
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
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* PHASE 2: MANIFESTO HERO */}
        {stage === 1 && (
          <motion.section 
            key="manifesto-hero"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-24 py-16 text-center bg-[#050505] relative"
          >
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-16 opacity-20 pointer-events-none">
              <Image src="/spec_girl_intro.png" alt="😜" fill className="object-contain grayscale" 
              sizes="64px"/>
            </div>

            <div className="max-w-5xl">
              <h1 className="text-white text-[7.5vw] md:text-[5vw] font-black uppercase tracking-tighter mb-8 leading-[0.9] italic">
                THE LOGIC OF AN <span className="text-white/30">ENGINEER.</span> <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  THE SOUL OF A DESIGNER.
                </span>
              </h1>
              
              <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-16 italic max-w-4xl mx-auto font-sans tracking-wide">
                {productManifesto}
              </p>

              <button 
                onClick={() => setStage(2)}
                className="group relative px-12 py-5 bg-white text-black font-mono font-bold uppercase tracking-widest text-[10px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-98 shadow-[0_0_50px_rgba(255,255,255,0.08)]"
              >
                <span className="relative z-10 flex items-center gap-2">SEE MY PRODUCT THINKING →</span>
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16, 1, 0.3, 1]" />
              </button>
            </div>
          </motion.section>
        )}

        {/* PHASE 3: THE LIFECYCLE WORKFLOW FRAMEWORK */}
        {stage === 2 && (
          <motion.section 
            key="lifecycle-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen w-full flex flex-col bg-[#030303] pt-12 md:pt-16 relative"
          >
            {/* HEADLINE AREA & PERSONAL POSITIONING MANIFESTO */}
            <div className="px-8 md:px-16 pb-6 max-w-6xl z-20">
              <p className="text-emerald-400 font-mono tracking-[0.4em] text-[10px] uppercase mb-3 italic">
                {"// PRODUCT THINKING"}
              </p>
              <h1 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic mb-4 leading-none">
                FROM BUSINESS PROBLEM TO DIGITAL SOLUTION
              </h1>
              <p className="text-white/80 text-sm md:text-base font-light tracking-wide leading-relaxed max-w-4xl">
                I don't specialize in one discipline. I specialize in connecting them. Every product begins with understanding the business, evolves through thoughtful design, and succeeds through engineering.
              </p>
            </div>

            {/* MINIMAL PRODUCT PIPELINE VISUAL FLOW BAR */}
            <div className="px-8 md:px-16 py-4 flex items-center justify-start flex-wrap gap-2 text-white/30 text-[10px] font-mono tracking-widest uppercase border-t border-b border-white/5 bg-[#050505]/40 z-20 select-none">
              <span>Business Problem</span>
              <span className="text-emerald-500/40 animate-pulse">&bull;</span>
              <span className="text-emerald-400/80">Business Analysis</span>
              <span className="text-purple-500/40 animate-pulse">&bull;</span>
              <span className="text-purple-400/80">UX Strategy</span>
              <span className="text-cyan-500/40 animate-pulse">&bull;</span>
              <span className="text-cyan-400/80">Engineering</span>
              <span className="text-emerald-500/40 animate-pulse">&bull;</span>
              <span>Digital Product</span>
            </div>

            {/* MEMORABLE HIGH-CONVICTION PREMIUM BRAND TAGLINE */}
            <div className="px-8 md:px-16 py-3 text-[10px] md:text-xs font-mono text-white/40 tracking-[0.4em] uppercase z-20 font-bold">
              Business First. <span className="text-white/20">&bull;</span> User Always. <span className="text-white/20">&bull;</span> Engineering with Purpose.
            </div>

            {/* THREE-PANEL CONTINUOUS LIFECYCLE GRID ENGINE */}
            <div className="w-full flex flex-col md:flex-row border-t border-white/5 relative z-10 h-auto md:flex-1">
              
              {/* STAGE 01: UNDERSTAND (Business Analysis) */}
              <Link href="/business-analyst" className="flex-1 relative group overflow-hidden bg-[#070707] flex flex-col justify-between p-8 md:p-12 transition-all duration-700 ease-[0.16, 1, 0.3, 1] hover:flex-[1.25] border-b md:border-b-0 md:border-r border-white/5 text-left min-h-[380px] md:min-h-0">
                {/* Subtle Visual Identity Drop Shadow/Glow Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(16,185,129,0.02)]" />
                <div className="absolute top-0 right-0 p-8 font-mono text-emerald-500/[0.03] group-hover:text-emerald-500/[0.08] text-7xl font-black tracking-tighter select-none transition-all duration-700 transform group-hover:-translate-y-2">01</div>
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-emerald-400 font-mono tracking-[0.4em] uppercase text-[10px] group-hover:scale-105 transition-transform duration-500">STAGE 01</span>
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/5 px-2.5 py-0.5 rounded border border-emerald-500/10">ANALYSIS</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black text-white/90 uppercase tracking-tighter mb-1 transition-colors duration-500 group-hover:text-emerald-400 group-hover:brightness-125">
                    UNDERSTAND
                  </h2>
                  <p className="text-emerald-400 font-mono text-[11px] uppercase tracking-wider mb-6">EY Business Analyst Internship</p>
                  
                  {/* Clean Evidence-Driven Narrative Stack */}
                  <div className="space-y-2 font-sans text-xs text-white/40 max-w-xs font-light tracking-wide transition-colors duration-500 group-hover:text-white/90">
                    <p className="flex items-center gap-2"><span className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors">&bull;</span> Insurance Domain Expertise (EY)</p>
                    <p className="flex items-center gap-2"><span className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors">&bull;</span> Requirements Gathering</p>
                    <p className="flex items-center gap-2"><span className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors">&bull;</span> BRD & FSD Documentation</p>
                    <p className="flex items-center gap-2"><span className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors">&bull;</span> Business Process Mapping</p>
                    <p className="flex items-center gap-2"><span className="text-emerald-400/60 group-hover:text-emerald-400 transition-colors">&bull;</span> User Stories & Acceptance Criteria</p>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-emerald-400 font-mono text-[10px] italic opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 mb-4 h-4">
                    "Every great product begins with understanding the problem."
                  </p>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 group-hover:text-emerald-400 border-b border-white/10 group-hover:border-emerald-500/30 pb-1 transition-all flex items-center gap-1 group-hover:gap-3">
                    Explore Business Journey <span className="transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>

              {/* STAGE 02: DESIGN (UX Portfolio) */}
              <Link href="/ux-design" className="flex-1 relative group overflow-hidden bg-[#090909] flex flex-col justify-between p-8 md:p-12 transition-all duration-700 ease-[0.16, 1, 0.3, 1] hover:flex-[1.25] border-b md:border-b-0 md:border-r border-white/5 text-left min-h-[380px] md:min-h-0">
                {/* Subtle Visual Identity Drop Shadow/Glow Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(168,85,247,0.02)]" />
                <div className="absolute top-0 right-0 p-8 font-mono text-purple-500/[0.03] group-hover:text-purple-500/[0.08] text-7xl font-black tracking-tighter select-none transition-all duration-700 transform group-hover:-translate-y-2">02</div>
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-purple-400 font-mono tracking-[0.4em] uppercase text-[10px] group-hover:scale-105 transition-transform duration-500">STAGE 02</span>
                    <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">EXPERIENCE</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black text-white/90 uppercase tracking-tighter mb-1 transition-colors duration-500 group-hover:text-purple-400 group-hover:brightness-125">
                    DESIGN
                  </h2>
                  <p className="text-purple-400 font-mono text-[11px] uppercase tracking-wider mb-6">4 UX Case Studies</p>
                  
                  {/* Clean Evidence-Driven Narrative Stack */}
                  <div className="space-y-2 font-sans text-xs text-white/40 max-w-xs font-light tracking-wide transition-colors duration-500 group-hover:text-white/90">
                    <p className="flex items-center gap-2"><span className="text-purple-400/60 group-hover:text-purple-400 transition-colors">&bull;</span> User Research</p>
                    <p className="flex items-center gap-2"><span className="text-purple-400/60 group-hover:text-purple-400 transition-colors">&bull;</span> Information Architecture</p>
                    <p className="flex items-center gap-2"><span className="text-purple-400/60 group-hover:text-purple-400 transition-colors">&bull;</span> Wireframing</p>
                    <p className="flex items-center gap-2"><span className="text-purple-400/60 group-hover:text-purple-400 transition-colors">&bull;</span> Prototyping</p>
                    <p className="flex items-center gap-2"><span className="text-purple-400/60 group-hover:text-purple-400 transition-colors">&bull;</span> Design Systems</p>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-purple-400 font-mono text-[10px] italic opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 mb-4 h-4">
                    "Complex ideas deserve simple experiences."
                  </p>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 group-hover:text-purple-400 border-b border-white/10 group-hover:border-purple-500/30 pb-1 transition-all flex items-center gap-1 group-hover:gap-3">
                    Explore Design Journey <span className="transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>

              {/* STAGE 03: BUILD (Engineering) */}
              <Link href="/developer-journey" className="flex-1 relative group overflow-hidden bg-[#0b0b0b] flex flex-col justify-between p-8 md:p-12 transition-all duration-700 ease-[0.16, 1, 0.3, 1] hover:flex-[1.25] text-left min-h-[380px] md:min-h-0">
                {/* Subtle Visual Identity Drop Shadow/Glow Accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none shadow-[inset_0_0_40px_rgba(0,194,255,0.02)]" />
                <div className="absolute top-0 right-0 p-8 font-mono text-cyan-500/[0.03] group-hover:text-cyan-500/[0.08] text-7xl font-black tracking-tighter select-none transition-all duration-700 transform group-hover:-translate-y-2">03</div>
                
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-cyan-400 font-mono tracking-[0.4em] uppercase text-[10px] group-hover:scale-105 transition-transform duration-500">STAGE 03</span>
                    <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">ENGINEERING</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black text-white/90 uppercase tracking-tighter mb-1 transition-colors duration-500 group-hover:text-cyan-400 group-hover:brightness-125">
                    BUILD
                  </h2>
                  <p className="text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-6">6 Full Stack Projects</p>
                  
                  {/* Clean Evidence-Driven Narrative Stack */}
                  <div className="space-y-2 font-sans text-xs text-white/40 max-w-xs font-light tracking-wide transition-colors duration-500 group-hover:text-white/90">
                    <p className="flex items-center gap-2"><span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">&bull;</span> MERN Stack Applications</p>
                    <p className="flex items-center gap-2"><span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">&bull;</span> REST APIs & Authentication</p>
                    <p className="flex items-center gap-2"><span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">&bull;</span> Database Design</p>
                    <p className="flex items-center gap-2"><span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">&bull;</span> System Design</p>
                    <p className="flex items-center gap-2"><span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">&bull;</span> Secure Deployment Pipelines</p>
                  </div>
                </div>

                <div className="pt-8">
                  <p className="text-cyan-400 font-mono text-[10px] italic opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500 mb-4 h-4">
                    "Reliable software turns ideas into reality."
                  </p>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 group-hover:text-cyan-400 border-b border-white/10 group-hover:border-cyan-500/30 pb-1 transition-all flex items-center gap-1 group-hover:gap-3">
                    Explore Engineering Journey <span className="transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>

            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}