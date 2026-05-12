"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function DeveloperPage() {
  const devProjects = [
    { 
      name: "Grid-Lock", 
      link: "https://grid-lock-vert.vercel.app/", 
      desc: "P2P EV Charging solution using MERN stack & Leaflet.js for real-time tracking.", 
      tech: ["MongoDB", "Express", "React", "Node.js"] 
    },
    { 
      name: "Retail Dashboard", 
      link: "https://retail-pulse-eta.vercel.app/", 
      desc: "Comprehensive retail analytics dashboard for inventory and sales tracking.", 
      tech: ["Next.js", "TailwindCSS", "Chart.js"] 
    }
  ];

  const stack = {
    "Web Stack": ["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "SQL"],
    "Hardware & Theory": ["Java", "Python", "Arduino IDE", "Raspberry Pi", "DSA", "DBMS", "OS", "Networks"],
    "Mini-Projects": ["Airbnb Clone", "Scientific Calculator", "Invoice Automation Bot", "Brain Tumor Detection", "LLM Fake News Detector"]
  };

  const subjects = [
    "Data Structures & Algorithms", 
    "Relational Database Management", 
    "Operating Systems", 
    "Computer Networks","Generative AI"
    
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
      {/* 1. NAVIGATION */}

      <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="px-5 py-2 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl z-[10001] relative">
          ← BACK HOME
        </Link>
        <div className="flex items-center gap-4">
  <a href="https://drive.google.com/file/d/1an-3X0G7TXNNqZYU7xloNIy6wdVVxw1q/view?usp=drivesdk" className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-all">
    Get Resume
  </a>
  {/* Existing GitHub/Connect buttons */}
</div>
        <div className="flex items-center gap-6 z-[10001] relative">
          <a href="https://github.com/adjienjeknwc" target="_self" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aditi-verma-8b8220287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="px-6 py-2 bg-cyan-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-500 transition-all">Connect</a>
        </div>
        
      </nav>

      {/* 2. HERO SECTION */}
      <section className="min-h-screen flex items-center px-8 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        <div className="z-10 flex flex-col md:flex-row md:items-center w-full gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <p className="text-cyan-400 font-mono tracking-[0.5em] text-[10px] mb-6 uppercase tracking-widest">// SOFTWARE ENGINEER</p>
            <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter uppercase italic mb-8">
              ENGINEERING <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">SYSTEMS.</span>
            </h1>
            <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light italic leading-relaxed">
              Architecting scalable web applications and AI-driven solutions. Focusing on the MERN stack and robotic process automation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-64 h-64 md:w-96 md:h-96 relative opacity-20"
          >
            <Image 
              src="/spec_girl_intro.png" 
              alt="😜" 
              fill 
              priority
              className="object-contain grayscale contrast-125 drop-shadow-[0_0_40px_rgba(34,211,238,0.3)]" 
            />
          </motion.div>
        </div>
      </section>
      {/* 7. ARCHITECTURE LOGIC */}
<section className="py-24 px-8 md:px-20 max-w-[1600px] mx-auto opacity-40 hover:opacity-100 transition-opacity duration-700">
  <div className="border border-cyan-500/20 rounded-[3rem] p-12 bg-gradient-to-br from-[#0a0a0a] to-black">
    <h2 className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-12 italic">System_Architecture</h2>
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
      <div className="space-y-2">
        <p className="text-white font-black italic text-2xl uppercase">Frontend</p>
        <p className="text-gray-500 font-mono text-[10px]">React • Next.js • Tailwind</p>
      </div>
      <div className="h-[1px] w-20 bg-cyan-900 hidden md:block animate-pulse"></div>
      <div className="space-y-2">
        <p className="text-white font-black italic text-2xl uppercase">Middleware</p>
        <p className="text-gray-500 font-mono text-[10px]">Node.js • Express • JWT</p>
      </div>
      <div className="h-[1px] w-20 bg-cyan-900 hidden md:block animate-pulse"></div>
      <div className="space-y-2">
        <p className="text-white font-black italic text-2xl uppercase">Database</p>
        <p className="text-gray-500 font-mono text-[10px]">MongoDB • SQL • Cloudinary</p>
      </div>
    </div>
  </div>
</section>


      {/* 3. CORE PROJECTS GRID */}
      <section className="py-32 px-8 md:px-20 max-w-[1600px] mx-auto z-20 relative">
        <h2 className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-16 underline decoration-white/10 underline-offset-8">DEPLOYMENT_LOG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {devProjects.map((proj) => (
            <div key={proj.name} className="group border border-white/10 p-10 rounded-[3rem] bg-[#0a0a0a] hover:border-cyan-500/50 transition-all duration-500 flex flex-col items-start relative z-30">
              <h3 className="text-4xl md:text-5xl font-black text-white italic group-hover:text-cyan-400 transition-colors uppercase tracking-tighter mb-4 leading-none">{proj.name}</h3>
              <p className="text-gray-500 mb-8 text-sm md:text-base font-light leading-relaxed italic">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {proj.tech.map(t => (
                  <span key={t} className="text-[9px] font-mono border border-white/10 px-4 py-1.5 rounded-full text-gray-400">{t}</span>
                ))}
              </div>
              
              <a 
                href={proj.link} 
                target="_self" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-auto"
              >
                View Live Project <span className="text-lg">↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* 4. MINI-PROJECTS & AI EXPLORATIONS */}
      <section className="py-24 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Labs_Exploration</h2>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
              Side <br /> <span className="text-gray-700">Functions.</span>
            </h3>
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-xs text-right">
            // experimental builds & AI research modules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Airbnb Clone", type: "Full-Stack", detail: "Next.js + Prisma" },
            { name: "Invoice Automation", type: "RPA", detail: "UiPath + PDF Logic" },
            { name: "Brain Tumor Detection", type: "ML", detail: "CNN + TensorFlow" },
            { name: "Fake News Detector", type: "GenAI", detail: "LLM + Gradio" },
            { name: "Scientific Calculator", type: "Logic", detail: "Vanilla JS" },
            { name: "Portfolio v1", type: "Frontend", detail: "Framer Motion" }
          ].map((mini, i) => (
            <motion.div
              key={mini.name}
              whileHover={{ x: 10 }}
              className="p-8 border border-white/5 bg-[#080808] rounded-2xl group hover:bg-white/[0.02] transition-all flex flex-col justify-between h-48 border-l-2 hover:border-l-cyan-400"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-cyan-900 group-hover:text-cyan-400 transition-colors uppercase">
                  [{mini.type}]
                </span>
                <span className="text-[8px] font-mono text-gray-700">0{i + 1}</span>
              </div>
              
              <div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-gray-300 group-hover:text-white transition-colors">
                  {mini.name}
                </h4>
                <p className="text-gray-600 font-mono text-[10px] mt-2 uppercase tracking-widest">
                  {mini.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. TECH STACK & SUBJECTS */}
      <section className="py-32 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {Object.entries(stack).map(([cat, items]) => (
            <div key={cat} className="space-y-4">
              <h3 className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-8 underline decoration-white/10 underline-offset-8">{cat}</h3>
              <div className="flex flex-col gap-4">
                {items.map(item => (
                  <span key={item} className="text-white text-2xl md:text-3xl font-black italic tracking-tighter hover:text-cyan-400 transition-colors cursor-default leading-none">{item}</span>
                ))}
              </div>
            </div>
          ))}
          {/* Relevant Subjects Column */}
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-8 underline decoration-white/10 underline-offset-8">Theory & CS</h3>
            <div className="flex flex-col gap-4">
              {subjects.map(item => (
                <span key={item} className="text-white text-2xl md:text-3xl font-black italic tracking-tighter hover:text-cyan-400 transition-colors cursor-default leading-none">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. TIMELINE */}
      <section className="py-32 px-8 md:px-20 max-w-[1600px] mx-auto relative border-t border-white/5">
        <h2 className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-20">Deployment History</h2>
        <div className="space-y-24 relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
          {[
            { year: "2021", 
                event: "Class 12th // CISCE", 
                detail: "Completed at Summer Valley School, Dehradun with [82.9 %]%. Focused on PCM and Computer Science." 
               },
            { year: "2023", event: "B.Tech CSE @ MUJ", detail: "Initiated rigorous study in engineering fundamentals and algorithmic logic." },
            { year: "2024", event: "NEXUS Coordinator", detail: "Optimized design-to-development pipelines for MUJ's creative hub." },
            { year: "2025", event: "IEEE Senior Coordinator", detail: "Leading technical affairs and scaling IEEE student branch outreach." },
            { year: "2026", event: "Systems Engineer", detail: "Deploying MERN stacks and exploring AI/ML for real-world automation." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              key={i} 
              className="pl-10 relative"
            >
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              <span className="text-cyan-900 font-mono text-sm font-black italic">{item.year}</span>
              <h4 className="text-white text-3xl font-black uppercase italic tracking-tighter mt-1">{item.event}</h4>
              <p className="text-gray-500 font-mono text-sm max-w-xl mt-2 leading-relaxed italic">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
      

      {/* 6. FOOTER */}
      <footer className="py-40 bg-black text-white px-8 text-center border-t border-white/5 relative z-10">
        <motion.div whileInView={{ opacity: [0, 1], y: [20, 0] }}>
          <p className="text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-8 italic">READY FOR DEPLOYMENT</p>
          <a href="mailto:aditivermauk@gmail.com" className="text-5xl md:text-8xl font-black italic hover:text-cyan-400 transition-all uppercase tracking-tighter leading-none">
            Ping the Server.
          </a>
          <div className="mt-20 flex flex-col md:flex-row justify-center gap-6 opacity-30 font-mono text-[8px] tracking-[0.4em] uppercase">
             <span>LOCATION: JAIPUR // RAJASTHAN // INDIA</span>
             <span className="hidden md:block">|</span>
             <span>© 2026 ADITI VERMA // ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div className="py-20 flex justify-center">
  <a 
    href="mailto:aditivermauk@gmail.com?subject=Technical Collaboration"
    className="group border border-cyan-500/30 px-10 py-4 rounded-xl bg-[#0a0a0a] hover:bg-cyan-500/10 transition-all flex items-center gap-4"
  >
    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
    <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
      Establish_Connection
    </span>
    <span className="text-white font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
      [email]
    </span>
  </a>
</div>
        </motion.div>
      </footer>
    </main>
  );
}