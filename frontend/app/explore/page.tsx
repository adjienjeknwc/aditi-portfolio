"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Import subpages directly to enable premium shared-element transitions
import BusinessAnalystPage from '../business-analyst/page';
import UXDesignPage from '../ux-design/page';
import DeveloperPage from '../developer-journey/page';

interface CardProps {
  id: "understand" | "design" | "engineering";
  stageNum: string;
  filename: string;
  title: string;
  subtitle: string;
  chips: string[];
  metadata: string;
  color: "emerald" | "purple" | "indigo";
  onClick: () => void;
}

// macOS Workspace File Card Component (Custom Colorful Light Theme)
function WorkspaceFileCard({
  id,
  stageNum,
  filename,
  title,
  subtitle,
  chips,
  metadata,
  color,
  onClick
}: CardProps) {
  const themeColors = {
    emerald: {
      tabBg: "bg-[#e6f7ef] border-t border-x border-emerald-500/20",
      cardBg: "bg-[#ecfaf3]/95 border-x border-b border-emerald-500/20 hover:bg-[#e2f7ec]/95",
      dot: "bg-emerald-500",
      filenameText: "text-emerald-800/70 group-hover:text-emerald-800",
      stageLabel: "text-emerald-700/60",
      metadataTag: "bg-emerald-500/10 border border-emerald-500/15 text-emerald-800",
      titleText: "text-emerald-950",
      subtitleText: "text-emerald-800/80",
      chipClass: "border-emerald-500/15 bg-emerald-500/5 text-emerald-800",
      footerLink: "text-emerald-700",
      glow: "from-emerald-500/10 to-transparent"
    },
    purple: {
      tabBg: "bg-[#f4ebff] border-t border-x border-purple-500/20",
      cardBg: "bg-[#f8f0ff]/95 border-x border-b border-purple-500/20 hover:bg-[#f2e2ff]/95",
      dot: "bg-purple-500",
      filenameText: "text-purple-800/70 group-hover:text-purple-800",
      stageLabel: "text-purple-700/60",
      metadataTag: "bg-purple-500/10 border border-purple-500/15 text-purple-800",
      titleText: "text-purple-950",
      subtitleText: "text-purple-800/80",
      chipClass: "border-purple-500/15 bg-purple-500/5 text-purple-800",
      footerLink: "text-purple-700",
      glow: "from-purple-500/10 to-transparent"
    },
    indigo: {
      tabBg: "bg-[#ebf0ff] border-t border-x border-indigo-500/20",
      cardBg: "bg-[#f0f4ff]/95 border-x border-b border-indigo-500/20 hover:bg-[#e4ecff]/95",
      dot: "bg-indigo-500",
      filenameText: "text-indigo-800/70 group-hover:text-indigo-800",
      stageLabel: "text-indigo-700/60",
      metadataTag: "bg-indigo-500/10 border border-indigo-500/15 text-indigo-800",
      titleText: "text-indigo-950",
      subtitleText: "text-indigo-800/80",
      chipClass: "border-indigo-500/15 bg-indigo-500/5 text-indigo-800",
      footerLink: "text-indigo-700",
      glow: "from-indigo-500/10 to-transparent"
    }
  };

  const theme = themeColors[color];

  return (
    <motion.div
      layoutId={`card-${id}`}
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex-1 w-full flex flex-col group cursor-pointer relative"
    >
      {/* File Tab Header */}
      <div className="flex items-end">
        <div className={`border-t border-x rounded-t-2xl px-5 py-2 flex items-center gap-2.5 -mb-[1px] relative z-10 shadow-sm ${theme.tabBg}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`} />
          <span className={`font-mono text-[10px] tracking-wider font-semibold ${theme.filenameText}`}>
            {filename}
          </span>
        </div>
        <div className="flex-1 border-b border-white/10 h-8" />
      </div>

      {/* File Card Body */}
      <div className={`rounded-b-3xl rounded-tr-3xl p-6 md:p-7 flex flex-col justify-between min-h-[300px] md:min-h-[340px] relative overflow-hidden transition-all duration-300 shadow-lg ${theme.cardBg}`}>
        {/* Soft Accent Glow */}
        <div className={`absolute top-0 right-0 w-36 h-36 rounded-full bg-gradient-to-br ${theme.glow} filter blur-3xl opacity-60 pointer-events-none -z-10`} />

        <div>
          {/* Metadata Row */}
          <div className="flex justify-between items-center mb-4">
            <span className={`font-mono text-[9px] tracking-[0.3em] font-bold uppercase ${theme.stageLabel}`}>{stageNum}</span>
            <span className={`font-mono text-[9px] tracking-wider px-2.5 py-0.5 rounded-md font-semibold select-none ${theme.metadataTag}`}>
              {metadata}
            </span>
          </div>

          {/* Large Card Title */}
          <h2 className={`text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2 transition-colors duration-300 ${theme.titleText}`}>
            {title}
          </h2>
          <p className={`font-sans text-xs font-light leading-relaxed mb-4 italic ${theme.subtitleText}`}>
            {subtitle}
          </p>

          {/* Skill Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {chips.map((chip, idx) => (
              <span key={idx} className={`text-[9px] font-mono border px-3 py-1 rounded-full uppercase tracking-wider font-semibold ${theme.chipClass}`}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link: Open Identity */}
        <div className="pt-4 border-t border-white/5 mt-auto">
          <span className={`text-[10px] font-mono font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${theme.footerLink}`}>
            Open Identity <span className="transition-transform duration-300 transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>

      {/* Background Soft Glow Layer on Hover */}
      <div className={`absolute -inset-px rounded-b-3xl rounded-tr-3xl bg-gradient-to-br ${theme.glow} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none -z-20`} />
    </motion.div>
  );
}

export default function ExplorePage() {
  const [activeIdentity, setActiveIdentity] = useState<"understand" | "design" | "engineering" | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Listen to browser Back/Forward navigation to restore explorer page states
  useEffect(() => {
    const handlePopState = () => {
      setActiveIdentity(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenIdentity = (id: "understand" | "design" | "engineering") => {
    setActiveIdentity(id);
    const pathMap = {
      understand: '/business-analyst',
      design: '/ux-design',
      engineering: '/developer-journey'
    };
    window.history.pushState({ identity: id }, '', pathMap[id]);
  };

  const handleBack = () => {
    setActiveIdentity(null);
    window.history.pushState(null, '', '/explore');
  };

  const pipeline = [
    { label: "Business Problem", icon: "🚨", color: "text-white/40" },
    { label: "Understand", icon: "🔍", color: "text-emerald-400" },
    { label: "Design", icon: "🎨", color: "text-purple-400" },
    { label: "Build", icon: "💻", color: "text-indigo-400" },
    { label: "Digital Product", icon: "🚀", color: "text-white/40" }
  ];

  return (
    <main className="min-h-screen lg:h-screen w-full bg-[#121214] selection:bg-indigo-500/20 antialiased text-white font-sans relative overflow-y-auto lg:overflow-hidden">
      {/* Background Fine Dotted Grid Layer */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Spotlight cursor glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 opacity-40"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.06), transparent 85%)`
        }}
      />

      <section className="min-h-screen lg:h-screen w-full flex flex-col justify-between pt-6 md:pt-8 px-4 sm:px-6 md:px-16 pb-12 lg:pb-8 relative z-10 overflow-y-auto lg:overflow-hidden">
        
        {/* Navigation Home Indicator */}
        {activeIdentity === null && (
          <div className="mb-4 max-w-6xl mx-auto w-full flex justify-between items-center z-20">
            <Link href="/" className="px-5 py-2 bg-white/5 border border-white/10 text-white rounded-full text-[10px] font-mono font-bold uppercase tracking-widest hover:scale-105 active:scale-95 hover:bg-white hover:text-black transition-all">
              ← Back Home
            </Link>
            <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase font-semibold">WORKSPACE ENVIRONMENT</span>
          </div>
        )}

        {/* Narrative Workflow Pipeline */}
        {activeIdentity === null && (
          <div className="w-full max-w-4xl mx-auto py-3.5 flex items-center justify-between text-[9px] md:text-[10px] font-mono tracking-widest uppercase border-y border-white/[0.05] mb-6 relative z-10 px-4 md:px-8 select-none bg-white/[0.02] backdrop-blur-md rounded-xl shadow-inner">
            {pipeline.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3">
                <span className={`flex items-center gap-1.5 md:gap-2 ${item.color}`}>
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline font-bold">{item.label}</span>
                </span>
                {idx < pipeline.length - 1 && (
                  <span className="text-white/20 mx-2 font-bold text-xs select-none">➔</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Workspace File Cards List */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <AnimatePresence>
            {activeIdentity === null ? (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full mt-2 mb-8 lg:mb-0"
              >
                {/* Understand (Business Analyst) */}
                <WorkspaceFileCard 
                  id="understand"
                  stageNum="Stage 01"
                  filename="understand.md"
                  title="Understand"
                  subtitle="Ingesting client scenarios, mapping system variables, and writing BRD/FSD specification guidelines."
                  chips={["Process Mapping", "Requirements Gathering", "User Stories", "BPMN Specs"]}
                  metadata="Business Analysis"
                  color="emerald"
                  onClick={() => handleOpenIdentity("understand")}
                />

                {/* Design (UX Case Studies) */}
                <WorkspaceFileCard 
                  id="design"
                  stageNum="Stage 02"
                  filename="design.fig"
                  title="Design"
                  subtitle="Translating complex data fields and scenarios into simple, interactive, high-fidelity prototypes."
                  chips={["UI Prototyping", "Design Systems", "User Research", "Wireframing"]}
                  metadata="4 Case Studies"
                  color="purple"
                  onClick={() => handleOpenIdentity("design")}
                />

                {/* Build (Engineering Projects) */}
                <WorkspaceFileCard 
                  id="engineering"
                  stageNum="Stage 03"
                  filename="build.tsx"
                  title="Build"
                  subtitle="Writing optimized backend systems, secure event streams, dynamic frontends, and robust deployment maps."
                  chips={["React / Next.js", "Node.js & APIs", "Database Design", "Kafka Telemetry"]}
                  metadata="6 Active Projects"
                  color="indigo"
                  onClick={() => handleOpenIdentity("engineering")}
                />
              </motion.div>
            ) : (
              /* Shared Layout Expansion Workspace Container */
              <motion.div 
                layoutId={`card-${activeIdentity}`}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className="fixed inset-0 z-50 bg-[#0a0a0c] overflow-y-auto overflow-x-hidden w-screen h-screen flex flex-col"
              >
                <AnimatePresence mode="wait">
                  {activeIdentity === "understand" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full min-h-screen">
                      <BusinessAnalystPage onBack={handleBack} />
                    </motion.div>
                  )}
                  {activeIdentity === "design" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full min-h-screen">
                      <UXDesignPage onBack={handleBack} />
                    </motion.div>
                  )}
                  {activeIdentity === "engineering" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full min-h-screen">
                      <DeveloperPage onBack={handleBack} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
