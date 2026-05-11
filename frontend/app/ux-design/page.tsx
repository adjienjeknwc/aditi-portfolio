"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function UXDesignPage() {
  const designSkills = ["Figma", "User Research", "Visual Identity", "Typography", "Prototyping", "Wireframing", "Interaction Design"];

  const caseStudies = [
    {
      title: "FOODILY",
      category: "Food Delivery Platform",
      desc: "Foodily is a modern food delivery platform designed to make ordering meals fast, fun, and convenient. Focused on vibrant visuals and trustworthy delivery features.",
      color: "from-[#FF6B6B] to-[#FFD93D]",
      link: "https://www.behance.net/gallery/241169173/Foodily-food-ordering-platform",
      image: "/foodily.jpg" 
    },
    {
      title: "SMOOTHIE BLISS",
      category: "Healthy Recipe App",
      desc: "A mobile app designed for lifestyle wellness, providing curated smoothie bowl recipes focusing on post-workout nutrition with engaging visuals.",
      color: "from-[#6BCB77] to-[#4D96FF]",
      link: "https://www.behance.net/gallery/233537887/Smoothie-recipe-website-ui",
      image: "/smoothie.jpg" 
    },
    {
      title: "COOKING GUIDE APP",
      category: "Educational Experience",
      desc: "A playful, progressive learning experience that breaks down cooking skills into 20-minute daily practice sessions with progress tracking.",
      color: "from-[#F9D923] to-[#EB5353]",
      link: "https://www.behance.net/gallery/233536071/COOKING-GUIDE-APP",
      image: "/cooking.jpg" 
    }
  ];

  return (
    <main className="min-h-screen bg-white text-black selection:bg-yellow-200 overflow-x-hidden">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-[9999] px-8 py-6 flex justify-between items-center pointer-events-auto">
        <Link 
          href="/" 
          className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl relative z-[10001]"
        >
          ← Home
        </Link>

        <div className="flex items-center gap-4 relative z-[10001]">
          <a 
            href="https://www.behance.net/aditiverma55" 
            target="_self" 
            rel="noopener noreferrer"
            className="group relative px-6 py-2 bg-[#0057ff] text-white rounded-full text-[10px] font-bold uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,87,255,0.5)] cursor-pointer inline-block"
          >
            <span className="relative z-10 text-white pointer-events-none">Behance Profile ↗</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-400 blur-[150px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-300 blur-[150px] animate-pulse delay-1000" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-purple-600" />
            <p className="text-purple-600 font-bold tracking-[0.4em] uppercase text-[10px]">Human-Centric Designer</p>
          </div>

          <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase italic mb-8 group">
            CREATING <br/> 
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 transition-all duration-500 group-hover:tracking-widest">
              IMPACT.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-10">
            <p className="max-w-xl text-gray-500 text-lg md:text-xl font-light italic leading-relaxed">
              "I blend technical logic with creative empathy to build products that don't just work—they feel right."
            </p>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="hidden md:flex flex-col items-center gap-2"
            >
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-300 rotate-90 mb-8">Scroll</span>
              <div className="w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          drag
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="absolute right-10 bottom-20 w-48 h-48 md:w-80 md:h-80 cursor-grab active:cursor-grabbing z-20"
        >
          <Image 
            src="/spec_girl_intro.png" 
            alt="😜" 
            fill 
            priority
            className="object-contain drop-shadow-2xl" 
          />
        </motion.div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="py-20 px-6 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-40">
          {caseStudies.map((study, index) => (
            <div 
              key={study.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative group/item`}
            >
              {/* THE INVISIBLE OVERLAY LINK 
                  Using target="_self" ensures Safari doesn't block the redirect.
              */}
              <a 
                href={study.link}
                target="_self" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-[60] cursor-pointer"
                aria-label={`View ${study.title} on Behance`}
              />

              {/* Content Side */}
              <div className="flex-1 space-y-6 relative z-30">
                <div className="flex items-center gap-4">
                   <span className="text-4xl font-black text-gray-100">0{index + 1}</span>
                   <div className="h-[2px] w-8 bg-black/10"></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{study.category}</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic transition-colors group-hover/item:text-purple-600">
                  {study.title}
                </h2>
                <p className="text-gray-600 text-lg md:text-xl font-light italic leading-relaxed">
                  {study.desc}
                </p>
                
                <div className="pt-4">
                    <div className="inline-flex items-center bg-transparent border-b-2 border-black pb-1 group-hover/item:border-purple-600 transition-all duration-300">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] group-hover/item:text-purple-600">
                        View Full Case Study →
                      </span>
                    </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full aspect-[4/3] relative z-10 rounded-[4rem] overflow-hidden shadow-2xl">
                <div className={`w-full h-full bg-gradient-to-br ${study.color} relative overflow-hidden`}>
                  <Image 
                      src={study.image} 
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-90 group-hover/item:opacity-30 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover/item:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-10">
                     <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4 translate-y-4 group-hover/item:translate-y-0 transition-transform">
                        <span className="text-2xl font-bold">↗</span>
                     </div>
                     <p className="text-white text-xs font-black tracking-[0.3em] uppercase">View on Behance</p>
                  </div>
                </div>
                {/* Decorative Background Text */}
                <span className="absolute -bottom-10 -right-10 text-[15vw] font-black text-white/10 uppercase italic pointer-events-none select-none">
                   {study.title.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DESIGNER SKILLS SECTION */}
      <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-xs font-bold tracking-[0.5em] uppercase text-purple-600 mb-6">Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
              MY <br /> <span className="text-gray-300">TOOLKIT.</span>
            </h3>
            <p className="mt-8 text-gray-500 font-light italic text-lg leading-relaxed max-w-xs">
              Blending industry-standard tools with creative intuition to solve complex user problems.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {[
              { name: "Figma", color: "hover:bg-[#F24E1E] hover:text-white" },
              { name: "User Experience", color: "hover:bg-[#6BCB77] hover:text-white" },
              { name: "Prototyping", color: "hover:bg-[#4D96FF] hover:text-white" },
              { name: "Wireframing", color: "hover:bg-[#FF6B6B] hover:text-white" },
              { name: "User Research", color: "hover:bg-[#9333EA] hover:text-white" },
              { name: "Canva", color: "hover:bg-[#00C4CC] hover:text-white" },
              { name: "Framer", color: "hover:bg-black hover:text-white" },
              { name: "Wix Studio", color: "hover:bg-[#8338EC] hover:text-white" },
              { name: "User Interface", color: "hover:bg-[#FFD93D] hover:text-black" },
              { name: "Mobile Designing", color: "hover:bg-[#FF9F43] hover:text-white" }
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className={`group p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 flex flex-col justify-between h-48 transition-all duration-500 cursor-default ${skill.color}`}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight italic">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SOFT SKILLS MARQUEE */}
<div className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
  <motion.div 
    animate={{ x: ["0%", "-50%"] }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    className="flex whitespace-nowrap gap-20 items-center"
  >
    {["Problem Solving", "UX Research", "Storytelling", "Collaboration", "Critical Thinking", "Empathy", "Public Speaking"].map((skill) => (
      <div key={skill} className="flex items-center gap-8">
        <span className="text-xl font-black uppercase tracking-widest italic text-gray-300">{skill}</span>
        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
      </div>
    ))}
    {/* Duplicate for seamless loop */}
    {["Problem Solving", "UX Research", "Storytelling", "Collaboration", "Critical Thinking", "Empathy", "Public Speaking"].map((skill) => (
      <div key={skill} className="flex items-center gap-8">
        <span className="text-xl font-black uppercase tracking-widest italic text-gray-300">{skill}</span>
        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
      </div>
    ))}
  </motion.div>
</div>



      {/* 5. CERTIFICATIONS SECTION */}
      <section className="py-24 px-6 md:px-20 max-w-[1600px] mx-auto border-t border-gray-100">
        <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-purple-600 mb-12">Validations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Figma UX/UI Design Essentials", issuer: "Udemy / Creative Live" },
            { title: "IBM Software Engineering Professional", issuer: "IBM / Coursera" },
            { title: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco" },
            { title: "MERN Stack Specialist", issuer: "Full-Stack Dev" }
          ].map((cert, i) => (
            <div key={i} className="flex items-center justify-between p-8 bg-gray-50 rounded-3xl group hover:bg-black transition-all duration-500">
              <div>
                <h4 className="text-xl font-bold group-hover:text-white transition-colors uppercase tracking-tighter italic">{cert.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              </div>
              <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">✓</div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DESIGN JOURNEY TIMELINE */}
<section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto">
  <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-purple-600 mb-16">The Timeline</h2>
  <div className="space-y-24 relative">
    {/* Vertical Line */}
    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 -translate-x-1/2 hidden md:block"></div>

    {[
      { year: "2023", title: "Started B.Tech CSE", location: "Manipal University Jaipur", desc: "Diving into the world of logic, algorithms, and human-computer interaction." },
      { year: "2024", title: "Graphic Designer Coordinator", location: "NEXUS MUJ", desc: "Leading visual identity for one of MUJ's premier creative clubs." },
      { year: "2025", title: "Senior Coordinator", location: "IEEE MUJ", desc: "Managing corporate affairs and bridging the gap between tech and business." },
      { year: "2026", title: "Product & UX Explorer", location: "Present", desc: "Specializing in the MERN stack and high-fidelity UI design." }
    ].map((event, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="flex-1 text-center md:text-left">
          <span className="text-4xl font-black italic text-purple-100">{event.year}</span>
          <h4 className="text-2xl font-black uppercase tracking-tighter mt-2">{event.title}</h4>
          <p className="text-gray-400 text-sm mb-4 uppercase tracking-widest">{event.location}</p>
          <p className="text-gray-500 font-light italic max-w-sm mx-auto md:mx-0">{event.desc}</p>
        </div>
        <div className="w-4 h-4 rounded-full bg-purple-600 z-10 hidden md:block shadow-[0_0_20px_rgba(147,51,234,0.5)]"></div>
        <div className="flex-1"></div>
      </motion.div>
    ))}
  </div>
</section>

      {/* 6. FOOTER */}
      <footer className="py-40 bg-black text-white px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col items-center">
          <p className="text-[10px] font-bold tracking-[0.5em] uppercase mb-8 text-gray-500 italic">Project Inquiries</p>
          <a href="mailto:aditivermauk@gmail.com" className="text-5xl md:text-8xl font-black italic hover:text-purple-400 transition-all duration-500 mb-16 text-center">
            aditivermauk<br/>@gmail.com
          </a>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.linkedin.com/in/aditi-verma-8b8220287" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">LinkedIn</a>
            <a href="https://www.behance.net/aditiverma55" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#0057ff] transition-all">Behance</a>
            <a href="https://www.behance.net/gallery/241167057/aditis-portfolio" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-purple-600 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all">Download CV</a>
          </div>
          <p className="mt-20 text-[10px] text-gray-600 tracking-[0.5em]">© 2026 ADITI VERMA • ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </main>
  );
}