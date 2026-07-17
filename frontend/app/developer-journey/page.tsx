"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Brain, Layers, Cpu, Workflow, Clipboard, Check, Lightbulb, BookOpen, Users, Briefcase, TrendingUp } from 'lucide-react';

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Code2': return <Code2 className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Workflow': return <Workflow className={className} />;
    default: return <Code2 className={className} />;
  }
};

export default function DeveloperPage({ onBack }: { onBack?: () => void }) {
  const [selectedDecision, setSelectedDecision] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const coreProjects = [
    {
      name: "CogniFlow",
      link: "https://cogniflow-b40o.onrender.com",
      problem: "Design teams often discover UI issues only after development, leading to costly rework.",
      solution: "Built an AI-powered layout evaluation platform that predicts UI usability issues before development begins.",
      highlights: [
        "AI-powered visual hierarchy analysis",
        "Interactive layout simulation",
        "Gemini Vision integration"
      ],
      tech: ["React", "Node.js", "Express", "Gemini API", "HTML Canvas"]
    },
    { 
      name: "Grid-Lock",
      link: "https://grid-lock-vert.vercel.app/",
      problem: "EV drivers struggle to find available charging stations in real time.",
      solution: "Built a peer-to-peer EV charging platform with live location tracking and charger sharing.",
      highlights: [
        "Real-time map updates",
        "Charger booking & sharing",
        "Live availability tracking"
      ],
      tech: ["React", "MongoDB", "Express", "Leaflet.js", "Socket.io"]
    },
    {
      name: "SmartSpend India",
      link: "https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app",
      problem: "Shrinkflation makes grocery prices difficult to compare across cities.",
      solution: "Developed an AI-powered grocery analytics platform that calculates real cost per unit across Indian markets.",
      highlights: [
        "Inflation tracking across 10 cities",
        "AI shopping insights",
        "Interactive dashboards"
      ],
      tech: ["Python", "Streamlit", "Pandas", "Plotly"]
    },
    {
      name: "Retail Dashboard",
      link: "https://retail-pulse-eta.vercel.app/",
      problem: "Small retailers lack clear visibility into inventory and daily sales.",
      solution: "Designed a real-time analytics dashboard to monitor inventory, sales trends, and product performance.",
      highlights: [
        "Interactive KPI dashboard",
        "Sales analytics",
        "Inventory monitoring"
      ],
      tech: ["Next.js", "Tailwind", "Chart.js"]
    },
    {
      name: "FinCompass",
      link: "https://fincompass-diwiyajon8dwans9r8hro8.streamlit.app/",
      problem: "Financial institutions need better visibility into complaint trends and compliance metrics.",
      solution: "Built an analytics platform that transforms raw complaint data into actionable insights and reports.",
      highlights: [
        "NLP-based complaint classification",
        "Interactive dashboards",
        "Regulatory analytics"
      ],
      tech: ["Python", "Streamlit", "SQLite", "LangChain", "Gemini"]
    },
    {
      name: "SentinelScale",
      link: "https://github.com/adjienjeknwc/sentinel-scale.git",
      problem: "Modern APIs require real-time protection against evolving security threats.",
      solution: "Built an AI-assisted API monitoring system that detects anomalies and visualizes security events.",
      highlights: [
        "Real-time anomaly detection",
        "Live monitoring dashboard",
        "AI-powered threat analysis"
      ],
      tech: ["Go", "Kafka", "PostgreSQL", "Next.js"]
    }
  ];

  const learningProjects = [
    { name: "Airbnb Clone", type: "Full-Stack", detail: "Next.js + Prisma Data Modeling" },
    { name: "Invoice Automation Bot", type: "Automation", detail: "Invoice configuration using UiPath Studio + PDF Processing" },
    { name: "Brain Tumor Detection", type: "Machine Learning", detail: "CNN Architecture + TensorFlow" },
    { name: "Fake News Detector", type: "AI Explorations", detail: "LLM Fine-Tuning + Gradio Interface" },
    { name: "Scientific Calculator", type: "Core Logic", detail: "Vanilla JavaScript DOM Execution" },
    { name: "Portfolio Workspace v1", type: "Frontend", detail: "Framer Motion Timeline Interactions" }
  ];

  const capabilitiesCategories = [
    {
      cat: "Core Dev Stack",
      desc: "Languages, frontend interfaces, and server logic architectures.",
      icon: "Code2",
      groups: [
        { name: "Programming Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C++ (DSA)", "SQL"] },
        { name: "Frontend", skills: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "Next.js", "Responsive Design", "REST API Integration"] },
        { name: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "JWT/OAuth Authentication", "Middleware", "File Uploads", "Error Handling"] }
      ]
    },
    {
      cat: "Databases & DevOps",
      desc: "Structured data storage solutions, cloud hosting, and automation loops.",
      icon: "Database",
      groups: [
        { name: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"] },
        { name: "Deployment & Cloud", skills: ["Vercel", "Render", "Railway", "AWS EC2", "AWS S3", "AWS Lambda", "Netlify"] },
        { name: "DevOps & Control", skills: ["Git", "GitHub", "Docker", "Docker Compose", "CI/CD (GitHub Actions)", "Env Variables"] }
      ]
    },
    {
      cat: "AI Full Stack",
      desc: "Advanced cognitive integrations, vector retrieval, and prompt environments.",
      icon: "Brain",
      groups: [
        { name: "AI APIs", skills: ["OpenAI API", "Google Gemini API", "Anthropic Claude API"] },
        { name: "AI Frameworks", skills: ["LangChain", "LangGraph", "LlamaIndex"] },
        { name: "Vector Databases", skills: ["Pinecone", "ChromaDB", "FAISS"] },
        { name: "RAG & Search", skills: ["RAG", "Embeddings", "Semantic Search", "Chunking", "Prompt Engineering"] },
        { name: "AI Features", skills: ["Chatbots", "Document Q&A", "AI Search", "AI Copilot", "Image Analysis", "OCR Integration"] }
      ]
    },
    {
      cat: "Software Engineering",
      desc: "System design patterns, security rules, and testing frameworks.",
      icon: "Layers",
      groups: [
        { name: "Architecture", skills: ["MVC", "Component Architecture", "Clean Code", "SOLID Principles", "Design Patterns"] },
        { name: "API Development", skills: ["REST APIs", "GraphQL", "Postman", "Swagger/OpenAPI"] },
        { name: "Auth & Storage", skills: ["JWT / OAuth", "Clerk / NextAuth", "Firebase Auth", "Cloudinary", "Firebase Storage", "AWS S3"] },
        { name: "Testing", skills: ["Jest", "React Testing Library", "Postman Testing"] }
      ]
    },
    {
      cat: "AI Agents & CS Theory",
      desc: "Autonomic system communication protocols and academic computer science logic.",
      icon: "Cpu",
      groups: [
        { name: "AI Extras", skills: ["MCP (Model Context Protocol)", "AI Agents", "Function Calling", "Structured Output", "Tool Calling", "Multi-Agent Systems"] },
        { name: "Computer Science", skills: ["OOP Basics", "DBMS Keys", "Operating Systems", "Computer Networks", "DSA", "Time Complexity"] }
      ]
    },
    {
      cat: "Workflow & Target Projects",
      desc: "Workspace IDE setups, visual design, and target recruiter project archetypes.",
      icon: "Workflow",
      groups: [
        { name: "Projects Recruiters Love", skills: ["Full Stack SaaS", "Authentication Modules", "Dashboard Analytics", "Payments & Stripe", "AI Research Assistant", "Real-Time Chat", "Live Location Maps", "WebSockets Systems"] },
        { name: "Workspace Tools", skills: ["VS Code", "Cursor", "Claude", "ChatGPT", "Gemini", "Figma", "Postman", "MongoDB Compass", "Docker Desktop"] }
      ]
    }
  ];

  const resumePlainSkills = `Programming Languages: JavaScript (ES6+), TypeScript, Python, Java, SQL
Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express.js, REST APIs, JWT Authentication
Databases: MongoDB, PostgreSQL, MySQL, Prisma
AI Stack: OpenAI API, Gemini API, LangChain, RAG, Vector Databases, Prompt Engineering
Tools & DevOps: Git, GitHub, Postman, Docker, Vercel, Figma
CS Fundamentals: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks`;

  const handleCopySkills = () => {
    navigator.clipboard.writeText(resumePlainSkills);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const engineeringPrinciples = [
    { title: "Readable code over clever code", desc: "Code is read far more often than it is written. I structure my applications so that another developer can pick up where I left off without wading through over-complicated scripts." },
    { title: "Understand the problem before typing", desc: "I map out workflows, request life cycles, and database relationships on paper before launching my local development server. Upfront definition saves hours of refactoring." },
    { title: "Every component serves the user", desc: "A feature is only valuable if it solves a real user frustration. I focus my technical choices around accessibility, fast page states, and clear interface feedback." },
    { title: "Documentation ensures system longevity", desc: "Clean markdown files, clear commit descriptions, and simple comments are just as critical to a project's lifecycle as successful compilation." }
  ];

  const frameworkDecisions = [
    { choice: "Why React & Next.js?", reason: "Component reusability cuts down on redundant lines of code. Next.js file-based routing and automated optimizations help me build predictable web applications without unnecessary configuration overhead." },
    { choice: "Why MongoDB?", reason: "Its non-relational document schema fits early-stage project building perfectly. It allows me to iterate on field models and adapt data relationships smoothly as app features evolve." },
    { choice: "Why Express & Node.js?", reason: "Using JavaScript across both layers of the application lets me maintain a unified development context, speeding up how fast I can bridge frontend events with backend API endpoints." },
    { choice: "Why JSON Web Tokens?", reason: "JWT gives me a secure, stateless protocol to verify user authentication. It allows the server to protect specific backend routes without maintaining continuous session store memory." }
  ];

  const coreFoundations = [
    { subject: "Data Structures & Algorithms", detail: "Strengthening memory allocation efficiency and computational logic for analytical optimization loops." },
    { subject: "Object-Oriented Programming (OOP)", detail: "Applying class structures, inheritance, and modular code containment parameters." },
    { subject: "Database Management Systems (DBMS)", detail: "Studying relational transaction guarantees, constraint indexing, and normalization rules." },
    { subject: "Operating Systems & Computer Networks", detail: "Learning process lifecycle management, memory schemas, socket structures, and TCP/IP protocol routing." }
  ];

  const timelineEvents = [
    {
      year: "2021",
      label: "FIRST MILESTONE",
      event: "Beginning",
      detail: "Wrote first scripts in HTML, CSS, and basic Java modules during schooling at Summer Valley School in Dehradun.",
      icon: Lightbulb,
      colorClass: "bg-purple-50 text-purple-600 border-purple-100",
      textClass: "text-purple-600",
      dotClass: "bg-purple-500"
    },
    {
      year: "2023",
      label: "SECOND MILESTONE",
      event: "Investigation",
      detail: "Commenced deep academic engineering targets at Manipal University Jaipur, focusing execution choices around structural parameters.",
      icon: BookOpen,
      colorClass: "bg-cyan-50 text-cyan-600 border-cyan-100",
      textClass: "text-cyan-600",
      dotClass: "bg-cyan-500"
    },
    {
      year: "2024",
      label: "THIRD MILESTONE",
      event: "Planning",
      detail: "Coordinated cross-functional asset maps and design-to-development loops as NEXUS Coordinator.",
      icon: Layers,
      colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
      textClass: "text-emerald-600",
      dotClass: "bg-emerald-500"
    },
    {
      year: "2025",
      label: "FOURTH MILESTONE",
      event: "Innovation",
      detail: "Oversaw corporate engineering affairs and directed multi-scale campus workshops as Senior Coordinator at IEEE MUJ.",
      icon: Users,
      colorClass: "bg-yellow-50 text-yellow-600 border-yellow-100",
      textClass: "text-yellow-600",
      dotClass: "bg-yellow-500"
    },
    {
      year: "2026",
      label: "FIFTH MILESTONE",
      event: "Creativity",
      detail: "Completed a Business Analyst Internship at EY, structuring user story specs and data rules for a Life Insurance Portal.",
      icon: Briefcase,
      colorClass: "bg-orange-50 text-orange-600 border-orange-100",
      textClass: "text-orange-600",
      dotClass: "bg-orange-500"
    },
    {
      year: "Present",
      label: "SIXTH MILESTONE",
      event: "Growth",
      detail: "Polishing algorithmic logic efficiency and constructing modular MERN tools to prepare for SDE internship profiles.",
      icon: TrendingUp,
      colorClass: "bg-pink-50 text-pink-600 border-pink-100",
      textClass: "text-pink-600",
      dotClass: "bg-pink-500"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-800 selection:bg-cyan-500/10 overflow-x-hidden font-sans antialiased">
      
      {/* 1. FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-[#fbfaf7]/80 backdrop-blur-md border-b border-slate-200/50">
        {onBack ? (
          <button 
            onClick={onBack}
            className="px-5 py-2 bg-slate-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-md z-[10001] relative cursor-pointer"
          >
            ← BACK TO WORKSPACE
          </button>
        ) : (
          <Link href="/explore" className="px-5 py-2 bg-slate-950 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-md z-[10001] relative">
            ← BACK TO WORKSPACE
          </Link>
        )}
        
        <div className="flex items-center gap-6 z-[10001] relative">
          <a href="https://github.com/adjienjeknwc" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-600 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aditi-verma-8b8220287" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-cyan-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-500 transition-all">Connect</a>
        </div>
      </nav>

      {/* 2. MANIFESTO HERO SECTION */}
      <section className="pt-36 pb-6 md:pt-40 md:pb-8 px-8 md:px-20 relative overflow-hidden flex items-center w-full">
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
             style={{ backgroundImage: 'linear-gradient(#ddd 1px, transparent 1px), linear-gradient(90deg, #ddd 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        <div className="z-10 flex flex-col md:flex-row md:items-center w-full gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <p className="text-cyan-600 font-mono tracking-[0.5em] text-[10px] mb-6 uppercase tracking-widest">// COMPUTER SCIENCE & ENGINEERING STUDENT</p>
            <h1 className="text-[14vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-8 text-slate-900">
              BUILDING APP <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500">LOGIC.</span>
            </h1>
            <p className="max-w-2xl text-slate-600 text-lg md:text-xl font-light italic leading-relaxed font-sans">
              I enjoy writing software that bridges user patterns with clean backend logic. As a computer science student at Manipal University Jaipur, I spend my time coding full-stack tools, exploring applied data algorithms, and learning the practical fundamentals of modern system design.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-56 h-56 md:w-80 md:h-80 relative opacity-90 mx-auto md:mx-0"
          >
            <Image 
              src="/spec_girl_intro_v2.png" 
              alt="😜" 
              fill 
              priority
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.12)]" 
            />
          </motion.div>
        </div>
      </section>

      {/* 3. APP DELIVERY INFRASTRUCTURE SEGMENT */}
      <section className="pt-0 pb-6 px-8 md:px-20 max-w-[1600px] mx-auto opacity-80 hover:opacity-100 transition-opacity duration-700">
        <div className="border border-slate-200/60 rounded-[3rem] p-10 bg-white shadow-sm">
          <h2 className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-12 italic">// How I Build Applications</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-1 max-w-xs">
              <p className="text-slate-900 font-black italic text-xl uppercase">01 // Front View</p>
              <p className="text-slate-500 font-sans text-xs font-light">React and Next.js platforms using Tailwind CSS utilities to structure responsive layout states.</p>
            </div>
            <div className="h-[1px] w-12 bg-slate-200 hidden md:block align-middle mt-4" />
            <div className="space-y-1 max-w-xs">
              <p className="text-slate-900 font-black italic text-xl uppercase">02 // Core Logic</p>
              <p className="text-slate-500 font-sans text-xs font-light">Node.js environments deploying Express endpoints, authenticated via stateless JWT tokens.</p>
            </div>
            <div className="h-[1px] w-12 bg-slate-200 hidden md:block align-middle mt-4" />
            <div className="space-y-1 max-w-xs">
              <p className="text-slate-900 font-black italic text-xl uppercase">03 // Data Storage</p>
              <p className="text-slate-500 font-sans text-xs font-light">Document modeling inside MongoDB database collections via Mongoose or querying operational SQL records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE DEPLOYED PROJECTS GRID */}
      <section className="pt-6 pb-6 md:pt-8 md:pb-8 px-8 md:px-20 max-w-[1600px] mx-auto z-20 relative">
        <h2 className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-16 underline decoration-slate-200 underline-offset-8">DEPLOYMENT_LOG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {coreProjects.map((proj) => (
            <div key={proj.name} className="group border border-slate-100 hover:border-cyan-500/30 p-10 rounded-[3rem] bg-white shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-start relative z-30">
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 italic group-hover:text-cyan-600 transition-colors uppercase tracking-tighter mb-6 leading-none">{proj.name}</h3>
              
              <div className="space-y-4 font-sans text-sm text-slate-600 mb-8 font-light leading-relaxed">
                <p><strong>Problem:</strong> {proj.problem}</p>
                <p><strong>Solution:</strong> {proj.solution}</p>
                {proj.highlights && (
                  <div>
                    <strong>Highlights:</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-500">
                      {proj.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {proj.tech.map(t => (
                  <span key={t} className="text-[9px] font-mono border border-slate-200/60 px-4 py-1.5 rounded-full text-slate-500 tracking-wide uppercase">{t}</span>
                ))}
              </div>
              
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-950 hover:scale-105 transition-all mt-auto"
              >
                Launch Application <span className="text-lg">↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. METRIC PROOFS STACK */}
      <section className="py-6 border-y border-slate-200/60 bg-white relative z-10 px-8 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-left font-mono">
          <div className="border-l border-cyan-500/30 pl-4">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">UI Architecture</p>
            <p className="text-2xl font-black text-slate-800">24+ Components</p>
          </div>
          <div className="border-l border-cyan-500/30 pl-4">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Backend Connectivity</p>
            <p className="text-2xl font-black text-slate-800">18+ REST Endpoints</p>
          </div>
          <div className="border-l border-cyan-500/30 pl-4">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Data Collections</p>
            <p className="text-2xl font-black text-slate-800">6+ DB Structures</p>
          </div>
          <div className="border-l border-cyan-500/30 pl-4">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Access Protocol</p>
            <p className="text-2xl font-black text-slate-800">100% Stateless JWT</p>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING CHOICES REASONING */}
      <section className="py-8 px-8 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <h2 className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-16">// Engineering Decisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm">
          {frameworkDecisions.map((item, idx) => (
            <div key={idx} className="p-6 border border-slate-100 bg-white rounded-2xl shadow-sm space-y-2">
              <h4 className="text-sm font-mono text-cyan-600 font-bold uppercase tracking-wider">{item.choice}</h4>
              <p className="text-slate-600 font-light leading-relaxed italic">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REFLECTION VAULT (CHALLENGES ENCOUNTERED) */}
      <section className="py-8 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-slate-200/60 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sm">
          <div className="space-y-4">
            <p className="text-cyan-600 font-mono text-[10px] tracking-[0.4em] uppercase">// SYSTEM REFLECTION</p>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-900 italic tracking-tight">Challenges Faced & Fixed</h3>
            <p className="text-slate-600 font-light leading-relaxed italic">
              When I built my early scripts, I over-engineered features and wrote bulky components. If an item broke, tracking down the bug took hours. I fixed this by forcing myself to map out workflows before coding and splitting monolithic tasks into pure, isolated logic functions.
            </p>
          </div>
          <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-2xl flex flex-col justify-center space-y-2 font-mono text-[11px] text-slate-500">
            <p className="text-cyan-600 font-bold uppercase tracking-wider">// CODE RESOLUTION TODAY</p>
            <p>&bull; Break complex data matrices down into clear custom sub-components.</p>
            <p>&bull; Use Postman route tracing explicitly before coupling frontend fields to server states.</p>
          </div>
        </div>
      </section>

      {/* 8. EXPERIMENTAL LEARNING PROJECTS LABS */}
      <section className="py-8 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-slate-200/60 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">// Labs Exploration</h2>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-slate-900">
              Learning <br /> <span className="text-slate-400">Projects.</span>
            </h3>
          </div>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest max-w-xs text-right italic font-light">
            // sandbox application builds to study standalone APIs and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningProjects.map((mini, i) => (
            <motion.div
              key={mini.name}
              whileHover={{ x: 8 }}
              className="p-8 border border-slate-100 bg-white rounded-2xl group hover:bg-slate-50/40 transition-all flex flex-col justify-between h-48 border-l-2 border-l-slate-200 hover:border-l-cyan-500 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-600 transition-colors uppercase tracking-wider">
                  [{mini.type}]
                </span>
                <span className="text-[9px] font-mono text-slate-400">0{i + 1}</span>
              </div>
              
              <div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-slate-800 group-hover:text-slate-950 transition-colors leading-none">
                  {mini.name}
                </h4>
                <p className="text-slate-500 font-mono text-[10px] mt-2 uppercase tracking-widest">
                  {mini.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. TECHNICAL TOOLKIT CAPABILITIES STACK */}
      <section className="py-8 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-slate-200/60 relative z-10">
        <div className="mb-16">
          <p className="text-cyan-600 font-mono tracking-[0.4em] text-[10px] uppercase">// CAPABILITIES_STACK</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter italic">Technical Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesCategories.map((column, idx) => (
            <div key={idx} className="p-8 border border-slate-100 bg-white rounded-[2rem] shadow-sm hover:shadow-md hover:border-cyan-500/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-slate-900 mb-2">
                  <div className="p-2.5 bg-cyan-50/50 rounded-xl text-cyan-600">
                    <IconComponent name={column.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black uppercase italic tracking-tight">{column.cat}</h3>
                </div>
                <p className="text-slate-500 text-[11px] font-sans font-light mb-6 italic leading-relaxed">{column.desc}</p>
                
                <div className="space-y-6">
                  {column.groups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-2">
                      <h4 className="text-cyan-600 font-mono text-[9px] uppercase tracking-[0.2em] font-bold border-b border-slate-100/60 pb-1">{group.name}</h4>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {group.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="inline-flex items-center px-2.5 py-1 bg-slate-50 text-slate-700 rounded-lg text-[10.5px] font-sans font-medium hover:bg-cyan-50/30 hover:text-cyan-600 transition-colors duration-150 cursor-default">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CURRENT GROWTH PROFILE TARGETS */}
      <section className="py-6 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-slate-200/60 relative z-10">
        <h2 className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-12">// Currently Learning</h2>
        <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-600">
          {["System Design Basics", "Data Structures & Algorithms (DSA)", "Docker Containerization", "Secure API Rate Limiting", "Test-Driven Development (TDD)", "Continuous Integration Frameworks"].map((item, index) => (
            <span key={index} className="px-4 py-2 border border-slate-100 bg-white shadow-sm rounded-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 11. STRATEGIC ENGINEERING CORE VALUES */}
      <section className="py-6 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-slate-200/60 relative z-10">
        <h2 className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-16">// Engineering Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sm">
          {engineeringPrinciples.map((rule, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="text-slate-900 font-bold uppercase tracking-tight text-base italic font-mono text-cyan-600/90">&bull; {rule.title}</h4>
              <p className="text-slate-600 font-light italic leading-relaxed pl-4">{rule.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* 12. CONTINUOUS GROWTH JOURNEY TIMELINE */}
      <section className="py-8 md:py-10 px-8 md:px-20 max-w-[1600px] mx-auto relative border-t border-slate-200/60 overflow-hidden">
        <h2 className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] mb-16">// Continuous Growth Journey</h2>
        
        <div className="overflow-x-auto w-full pb-8 pt-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          <div className="min-w-[1100px] lg:min-w-0 w-full relative px-2">
            
            {/* Horizontal Timeline Cards Row */}
            <div className="grid grid-cols-6 gap-6 relative z-10 mb-12">
              {timelineEvents.map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="bg-white border border-slate-100 rounded-3xl p-5 text-center flex flex-col items-center relative shadow-sm hover:shadow-md transition-all duration-300 w-full min-h-[220px] justify-start"
                  >
                    
                    {/* Circle Icon Badge */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.colorClass} border`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    
                    <span className={`text-[8px] font-mono font-black uppercase tracking-wider mb-1 ${item.textClass}`}>
                      {item.label}
                    </span>
                    <h4 className="text-sm font-black uppercase italic tracking-tight text-slate-800 leading-tight mb-2">
                      {item.event}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-sans font-light leading-relaxed">
                      {item.detail}
                    </p>
                    
                    {/* Pointed arrow decoration pointing to the timeline dot */}
                    <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45 z-0" />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Horizontal Line & Dots Container */}
            <div className="relative w-full py-4 flex items-center">
              {/* Gradient horizontal line */}
              <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-purple-400 via-cyan-400 via-emerald-400 via-yellow-400 via-orange-400 to-pink-500 rounded-full" />
              
              {/* Dots & Years */}
              <div className="w-full grid grid-cols-6 relative z-20">
                {timelineEvents.map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-center">
                    {/* Timeline dot */}
                    <div className={`w-4.5 h-4.5 rounded-full border-2 border-white shadow-sm transition-transform duration-300 hover:scale-125 cursor-pointer ${item.dotClass}`} />
                    
                    {/* Year below dot */}
                    <span className={`font-mono text-xs font-black italic mt-3 ${item.textClass}`}>
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 13. CINEMATIC CLOSING FOOTER BLOCK */}
      <footer className="py-40 bg-slate-50 text-slate-800 px-8 text-center border-t border-slate-200/60 relative z-10">
        <motion.div whileInView={{ opacity: [0, 1], y: [20, 0] }} viewport={{ once: true }}>
          <p className="text-cyan-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-8 italic">READY FOR DEPLOYMENT</p>
          <a href="mailto:aditivermauk@gmail.com" className="text-5xl md:text-8xl font-black italic hover:text-cyan-600 transition-all uppercase tracking-tighter leading-none font-sans text-slate-900">
            Ping the Server.
          </a>
          <div className="mt-20 flex flex-col md:flex-row justify-center gap-6 opacity-40 font-mono text-[8px] tracking-[0.4em] uppercase text-slate-500">
             <span>LOCATION: JAIPUR // RAJASTHAN // INDIA</span>
             <span className="hidden md:block">|</span>
             <span>© 2026 ADITI VERMA // ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div className="py-20 flex justify-center">
            <a 
              href="mailto:aditivermauk@gmail.com?subject=Technical Collaboration"
              className="group border border-cyan-500/20 px-10 py-4 rounded-xl bg-white hover:bg-cyan-50/30 shadow-sm transition-all flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-cyan-600 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
                Establish_Connection
              </span>
              <span className="text-slate-500 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                [email]
              </span>
            </a>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}