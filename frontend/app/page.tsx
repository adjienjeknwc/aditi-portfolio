"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  // Sequence control: 0 = Loader, 1 = Intro, 2 = Split Page
  const [stage, setStage] = useState(0);

  // AUTOMATIC SEQUENCE TIMER (Stage 0 to Stage 1)
  useEffect(() => {
    // Show loader for 2.8 seconds, then show introduction
    const timer = setTimeout(() => {
      setStage(1);
    }, 2800);
    return () => clearTimeout(timer); // Cleanup timer if user navs away
  }, []);

  const introductionParagraph = `
   "I occupy the space between logic and empathy. As a Computer Science Engineer, I build robust systems that scale; as a UX Designer, I ensure they feel human. I don’t just write code—I craft digital experiences that leave a mark."
  `;

  return (
    <main className="h-screen w-screen bg-[#030303] overflow-hidden selection:bg-portfolio-blue/20">
      <AnimatePresence mode="wait">
        
        {/* PHASE 1: THE THRILLING LOADER (😜 is the star) */}
        {/* STAGE 0: CINEMATIC PERSONAL GREETING */}
{stage === 0 && (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
    transition={{ duration: 0.8 }}
    className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center"
  >
    {/* Larger Memoji with Ambient Glow */}
    <div className="relative group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse" />
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-64 h-64 md:w-80 md:h-80 relative z-10" // Increased size here
      >
        <Image 
          src="/spec_girl_intro.png" 
          alt="😜" 
          fill 
          priority
          className="object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.3)]" 
        />
      </motion.div>
    </div>

    {/* The Greeting Line */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-center mt-12"
    >
      <h2 className="text-white font-mono text-lg md:text-xl tracking-[0.6em] uppercase mb-4 italic">
        Hi, I am Aditi.
      </h2>
      
      {/* Loading Progress Bar - Adds to the Tech Vibe */}
      <div className="w-48 h-[1px] bg-white/10 mx-auto relative overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />
      </div>
    </motion.div>
  </motion.div>
)}
        {/* PHASE 2: THE INTRODUCTION (😜 reveals the text) */}
        {stage === 1 && (
          <motion.section 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="h-full w-full flex flex-col justify-center items-center px-6 text-center bg-[#050505] relative"
          >
            {/* Small 😜 as a signature at the top */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-16 opacity-30">
              <Image src="/spec_girl_intro.png" alt="😜" fill className="object-contain" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl"
            >
              <h1 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 italic">
              THE LOGIC OF AN <span className="text-gray-500">ENGINEER.</span> <br/> 
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
    THE SOUL OF A DESIGNER.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-14 italic max-w-3xl mx-auto">
                {introductionParagraph}
              </p>

              {/* The CTA Button to trigger Phase 3 */}
              <button 
                onClick={() => setStage(2)}
                className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <span className="relative z-10">EXPLORE MY DUAL IDENTITY →</span>
                <div className="absolute inset-0 bg-portfolio-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.section>
        )}

        {/* PHASE 3: THE DUAL IDENTITY SPLIT (We keep this sleek) */}
        {stage === 2 && (
          <motion.section 
            key="split"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full flex flex-col md:flex-row relative"
          >
            {/* LEFT: DESIGNER (Bright & Colorful) */}
            <Link href="/ux-design" className="flex-1 relative group overflow-hidden bg-white flex flex-col justify-center px-12 transition-all duration-700 hover:flex-[1.4]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <p className="text-purple-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Identity I</p>
                <h2 className="text-6xl lg:text-9xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-4">
                  THE <br/> DESIGNER
                </h2>
              </div>
              <div className="absolute bottom-12 right-12 text-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs font-bold uppercase tracking-widest">Explore Design →</span>
              </div>
            </Link>

            {/* RIGHT: DEVELOPER (Dark, Technical & Cinematic) */}
            <Link href="/developer-journey" className="flex-1 relative group overflow-hidden bg-[#030303] flex flex-col justify-center px-12 transition-all duration-700 hover:flex-[1.4] border-t md:border-t-0 md:border-l border-white/10 text-right md:text-left">
              <div className="absolute inset-0 bg-portfolio-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <p className="text-portfolio-blue font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Identity II</p>
                <h2 className="text-6xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-4">
                  THE <br/> DEVELOPER
                </h2>
              </div>
              <div className="absolute bottom-12 left-12 text-portfolio-blue opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs font-bold uppercase tracking-widest">← View Journey</span>
              </div>
            </Link>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}