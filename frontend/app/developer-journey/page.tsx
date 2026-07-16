"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function DeveloperPage({ onBack }: { onBack?: () => void }) {
  const [selectedDecision, setSelectedDecision] = useState<string | null>(null);

  const coreProjects = [

    {
      name: "CogniFlow",
      link: "https://cogniflow-b40o.onrender.com", // Replace with live link if available
      problem: "Software teams spend significant time and traffic running live A/B split testing just to fix basic layout mistakes. Misplacing a call-to-action component or creating poor visual balance leads to immediate user drop-offs before any code is ever written.",
      solution: "Built a predictive full-stack layout evaluator that reviews user interfaces prior to implementation. It features an interactive layout simulation engine that maps fixation sequences, scores overall visual hierarchy, and generates layout structure suggestions.",
      engineering: "Designed a multi-part form stream using Node.js and Multer to pass image buffers directly to the Gemini API's vision capabilities. Handled layout mapping values to sketch predictive canvas coordinate masks across a responsive React user interface.",
      learning: "As a BA + UX Researcher, this project taught me how to bridge visual conversion rules with backend APIs, and how to handle streaming binary file payloads securely without overloading server memory.",
      tech: ["React", "Node.js", "Express", "Gemini API", "HTML5 Canvas", "Multer"]
    },
    { 
      name: "Grid-Lock",
      link: "https://grid-lock-vert.vercel.app/",
      problem: "Finding a reliable, vacant electric vehicle charging station is unpredictable, and peer-to-peer charger sharing lacks instant updates.",
      solution: "Built a full-stack peer-to-peer EV charging locator application that enables users to find, block, and list charging ports on a shared map layer.",
      engineering: "Implemented the MERN stack and integrated Leaflet.js to manage real-time geographic coordinate pin drops and state tracking.",
      learning: "Taught me how to optimize client-side map rendering and prevent unnecessary React component re-renders when updating large arrays of location parameters.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Leaflet.js"]
    },
    {
      name: "SmartSpend India",
      link: "https://smartspend-india-fycu3h9ljwqxmxgn2wunwa.streamlit.app", // Replace with your repository link
      problem: "Grocery inflation fluctuates rapidly, and retail tactics like shrinkflation (reducing item sizes while keeping prices stable) hide the true cost-per-unit metrics from everyday shoppers.",
      solution: "Engineered an interactive data product that tracks inflation curves across 10 major Indian metro areas, computes true normalized cost indexes (₹/KG), and handles dynamic simulation fallbacks.",
      engineering: "Designed a clean, decoupled architecture using NumPy array vectorization for fast indexing calculations and Pandas to process transaction loops. Rendered the UI via Streamlit, plotting metrics with interactive Plotly Express structures over an SQLite3 data layer.",
      learning: "As a BA + UX Researcher, this project taught me how to take dense metropolitan market matrices and turn them into intuitive, rule-based AI Copilot advisories that reduce layout complexity.",
      tech: ["Streamlit", "Python", "NumPy", "Pandas", "Plotly Express", "SQLite3"]
    },
    {
      name: "Retail Dashboard",
      link: "https://retail-pulse-eta.vercel.app/",
      problem: "Small store owners struggle to visualize their shifting inventory levels and daily sales patterns inside a clean, simple workspace.",
      solution: "Developed an intuitive retail metrics analytics panel that displays transaction curves, inventory status levels, and product distribution records.",
      engineering: "Utilized Next.js server-side structures alongside Tailwind CSS for fluid responsive grids and Chart.js for data mapping.",
      learning: "Gave me a deeper understanding of formatting raw database object payloads into structured arrays that chart modules can digest without loading lag.",
      tech: ["Next.js", "Tailwind CSS", "Chart.js", "JavaScript"]
    },
    {
      name: "FinCompass",
      link: "https://fincompass-diwiyajon8dwans9r8hro8.streamlit.app/", // Replace with your repo link
      problem: "Evaluating systemic banking backlogs, digital fraud trajectories, and regulatory compliance under the RBI Integrated Ombudsman Scheme requires processing heavy unstructured grievance streams without losing statistical integrity.",
      solution: "Engineered an end-to-end supervisory analytics and data pipeline that ingests, cleanses, and runs statistical predictive analytics over 15,000 synthetic grievance matrices to mimic central bank oversight operations.",
      engineering: "Built a robust Python ETL pipeline utilizing Z-score validation and SQLAlchemy to map relational entities to an SQLite3 instance. Developed a statistical modeling layer running Welch's t-tests, OLS regression, and SARIMAX time-series forecasting via SciPy and StatsModels. Integrated a scikit-learn NLP text classification channel alongside a LangChain + ChromaDB + Gemini Flash RAG architecture for semantic policy querying, rendering a multi-page interactive Streamlit viewport.",
      learning: "Designed specifically to meet strict data requirements for regulatory analytics. This project taught me how to translate advanced statistical thresholds (p-values, trend coefficients) into automated, formal policy briefs.",
      tech: ["Python", "Streamlit", "NumPy & Pandas", "StatsModels", "scikit-learn", "LangChain", "SQLite3"]
    },
    {
      name: "SentinelScale",
      link: "https://github.com/adjienjeknwc/sentinel-scale.git", // Replace with your repository link
      problem: "Protecting high-throughput production API endpoints against evolving application-layer exploits and zero-day injection attacks typically introduces significant processing bottlenecks and edge validation overhead.",
      solution: "Engineered a distributed, high-performance API Gatekeeper and Telemetry Observability Engine combining sub-millisecond Go reverse-proxying, asynchronous Apache Kafka event ingestion, and multi-tier AI anomaly protection.",
      engineering: "Developed a native Go ingress edge proxy layer utilizing detached execution paths and automated SHA-256 caching routines to maintain a sub-1ms routing signature. Offloaded raw tracking telemetry logs asynchronously via an active Apache Kafka/Redpanda cluster into a Python AI Audit Service running a multi-tier defense architecture: Local Regex (Tier 1), a Transformer model deployed on an onnxruntime inference engine (Tier 2), and a Google GenAI SDK deep LLM scanner (Tier 3). Consolidated data indexing using PostgreSQL 16 with a pgvector HNSW cosine-similarity store, streaming real-time alerts via WebSockets to a Next.js console dashboard equipped with interactive D3.js coordinates.",
      learning: "Taught me the fundamentals of building low-latency middleware. I learned how to decouple real-time execution pipelines from heavy analytical evaluations using event streams to ensure deep security scans never block user traffic.",
      tech: ["Go (Golang)", "Apache Kafka", "Python", "PostgreSQL (pgvector)", "Next.js", "ONNX Runtime", "WebSockets"]
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

  const technicalToolkit = [
    { cat: "Frontend", desc: "Building responsive, intuitive user workspaces.", skills: ["React", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"] },
    { cat: "Backend", desc: "Designing application program interfaces and server logic.", skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware Design"] },
    { cat: "Databases", desc: "Structuring reliable schemas and query patterns.", skills: ["MongoDB", "Mongoose ORM", "SQL Basics", "Database Modeling"] },
    { cat: "Tools & Core CS", desc: "Testing, deployment, and fundamental theory.", skills: ["Git & GitHub", "Postman API Testing", "Vercel & Render", "DSA", "DBMS", "Operating Systems", "Computer Networks"] }
  ];

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

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans antialiased">
      
      {/* 1. FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        {onBack ? (
          <button 
            onClick={onBack}
            className="px-5 py-2 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl z-[10001] relative cursor-pointer"
          >
            ← BACK TO WORKSPACE
          </button>
        ) : (
          <Link href="/explore" className="px-5 py-2 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl z-[10001] relative">
            ← BACK TO WORKSPACE
          </Link>
        )}
        
        <div className="flex items-center gap-6 z-[10001] relative">
          <a href="https://github.com/adjienjeknwc" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aditi-verma-8b8220287" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-indigo-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-500 transition-all">Connect</a>
        </div>
      </nav>

      {/* 2. MANIFESTO HERO SECTION */}
      <section className="min-h-screen flex items-center px-8 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        
        <div className="z-10 flex flex-col md:flex-row md:items-center w-full gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <p className="text-indigo-400 font-mono tracking-[0.5em] text-[10px] mb-6 uppercase tracking-widest">// COMPUTER SCIENCE & ENGINEERING STUDENT</p>
            <h1 className="text-[14vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic mb-8">
              BUILDING APP <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">LOGIC.</span>
            </h1>
            <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light italic leading-relaxed font-sans">
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
              className="object-contain drop-shadow-[0_0_40px_rgba(129,140,248,0.25)]" 
            />
          </motion.div>
        </div>
      </section>

      {/* 3. APP DELIVERY INFRASTRUCTURE SEGMENT */}
      <section className="py-20 px-8 md:px-20 max-w-[1600px] mx-auto opacity-40 hover:opacity-100 transition-opacity duration-700">
        <div className="border border-indigo-500/20 rounded-[3rem] p-10 bg-gradient-to-br from-[#0a0a0a] to-black">
          <h2 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-12 italic">How_I_Build_Applications</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-1 max-w-xs">
              <p className="text-white font-black italic text-xl uppercase">01 // Front View</p>
              <p className="text-gray-500 font-sans text-xs font-light">React and Next.js platforms using Tailwind CSS utilities to structure responsive layout states.</p>
            </div>
            <div className="h-[1px] w-12 bg-indigo-950/40 hidden md:block align-middle mt-4" />
            <div className="space-y-1 max-w-xs">
              <p className="text-white font-black italic text-xl uppercase">02 // Core Logic</p>
              <p className="text-gray-500 font-sans text-xs font-light">Node.js environments deploying Express endpoints, authenticated via stateless JWT tokens.</p>
            </div>
            <div className="h-[1px] w-12 bg-indigo-950/40 hidden md:block align-middle mt-4" />
            <div className="space-y-1 max-w-xs">
              <p className="text-white font-black italic text-xl uppercase">03 // Data Storage</p>
              <p className="text-gray-500 font-sans text-xs font-light">Document modeling inside MongoDB database collections via Mongoose or querying operational SQL records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE DEPLOYED PROJECTS GRID */}
      <section className="py-32 px-8 md:px-20 max-w-[1600px] mx-auto z-20 relative">
        <h2 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-16 underline decoration-white/10 underline-offset-8">DEPLOYMENT_LOG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {coreProjects.map((proj) => (
            <div key={proj.name} className="group border border-white/10 p-10 rounded-[3rem] bg-[#0a0a0a] hover:border-indigo-500/50 transition-all duration-500 flex flex-col items-start relative z-30">
              <h3 className="text-4xl md:text-5xl font-black text-white italic group-hover:text-indigo-400 transition-colors uppercase tracking-tighter mb-6 leading-none">{proj.name}</h3>
              
              <div className="space-y-4 font-sans text-sm text-gray-400 mb-8 font-light leading-relaxed">
                <p><strong>Problem:</strong> {proj.problem}</p>
                <p><strong>Solution:</strong> {proj.solution}</p>
                <p><strong>Engineering:</strong> {proj.engineering}</p>
                <p className="text-gray-300 italic"><strong>What this taught me:</strong> {proj.learning}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {proj.tech.map(t => (
                  <span key={t} className="text-[9px] font-mono border border-white/10 px-4 py-1.5 rounded-full text-gray-500 tracking-wide uppercase">{t}</span>
                ))}
              </div>
              
              <a 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform mt-auto"
              >
                Launch Application <span className="text-lg">↗</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. METRIC PROOFS STACK */}
      <section className="py-16 border-t border-b border-white/5 bg-[#080808]/50 relative z-10 px-8 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-left font-mono">
          <div className="border-l border-indigo-500/30 pl-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">UI Architecture</p>
            <p className="text-2xl font-black text-white">24+ Components</p>
          </div>
          <div className="border-l border-indigo-500/30 pl-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Backend Connectivity</p>
            <p className="text-2xl font-black text-white">18+ REST Endpoints</p>
          </div>
          <div className="border-l border-indigo-500/30 pl-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Data Collections</p>
            <p className="text-2xl font-black text-white">6+ DB Structures</p>
          </div>
          <div className="border-l border-indigo-500/30 pl-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Access Protocol</p>
            <p className="text-2xl font-black text-white">100% Stateless JWT</p>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING CHOICES REASONING */}
      <section className="py-24 px-8 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <h2 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-16">Engineering_Decisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm">
          {frameworkDecisions.map((item, idx) => (
            <div key={idx} className="p-6 border border-white/5 bg-[#0a0a0a] rounded-2xl space-y-2">
              <h4 className="text-sm font-mono text-indigo-400 font-bold uppercase tracking-wider">{item.choice}</h4>
              <p className="text-gray-400 font-light leading-relaxed italic">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REFLECTION VAULT (CHALLENGES ENCOUNTERED) */}
      <section className="py-20 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-white/5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sm">
          <div className="space-y-4">
            <p className="text-indigo-400 font-mono text-[10px] tracking-[0.4em] uppercase">// SYSTEM REFLECTION</p>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white italic tracking-tight">Challenges Faced & Fixed</h3>
            <p className="text-gray-400 font-light leading-relaxed italic">
              When I built my early scripts, I over-engineered features and wrote bulky components. If an item broke, tracking down the bug took hours. I fixed this by forcing myself to map out workflows before coding and splitting monolithic tasks into pure, isolated logic functions.
            </p>
          </div>
          <div className="border border-white/5 bg-neutral-950/40 p-6 rounded-2xl flex flex-col justify-center space-y-2 font-mono text-[11px] text-gray-500">
            <p className="text-indigo-400 font-bold uppercase tracking-wider">// CODE RESOLUTION TODAY</p>
            <p>&bull; Break complex data matrices down into clear custom sub-components.</p>
            <p>&bull; Use Postman route tracing explicitly before coupling frontend fields to server states.</p>
          </div>
        </div>
      </section>

      {/* 8. EXPERIMENTAL LEARNING PROJECTS LABS */}
      <section className="py-24 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-white/5 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Labs_Exploration</h2>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
              Learning <br /> <span className="text-gray-700">Projects.</span>
            </h3>
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-xs text-right italic font-light">
            // sandbox application builds to study standalone APIs and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningProjects.map((mini, i) => (
            <motion.div
              key={mini.name}
              whileHover={{ x: 8 }}
              className="p-8 border border-white/5 bg-[#080808] rounded-2xl group hover:bg-white/[0.01] transition-all flex flex-col justify-between h-48 border-l-2 border-l-gray-900 hover:border-l-indigo-400"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-gray-600 group-hover:text-indigo-400 transition-colors uppercase tracking-wider">
                  [{mini.type}]
                </span>
                <span className="text-[9px] font-mono text-gray-700">0{i + 1}</span>
              </div>
              
              <div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-gray-300 group-hover:text-white transition-colors leading-none">
                  {mini.name}
                </h4>
                <p className="text-gray-500 font-mono text-[10px] mt-2 uppercase tracking-widest">
                  {mini.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. TECHNICAL TOOLKIT CAPABILITIES STACK */}
      <section className="py-24 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-white/5 relative z-10">
        <div className="mb-16">
          <p className="text-indigo-400 font-mono tracking-[0.4em] text-[10px] uppercase">{"// CAPABILITIES_STACK"}</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter italic">Technical Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 font-mono text-xs">
          {technicalToolkit.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-indigo-400 font-bold uppercase tracking-widest border-b border-white/5 pb-2 text-[10px]">// {column.cat}</h3>
              <p className="font-sans font-light italic text-gray-500 text-[12px] pb-2 leading-relaxed">{column.desc}</p>
              <div className="flex flex-col gap-3 font-sans font-black italic text-xl uppercase text-white tracking-tight">
                {column.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="hover:text-indigo-400 transition-colors cursor-default leading-none">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CURRENT GROWTH PROFILE TARGETS */}
      <section className="py-20 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-white/5 relative z-10">
        <h2 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-12">Currently_Learning</h2>
        <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-400">
          {["System Design Basics", "Data Structures & Algorithms (DSA)", "Docker Containerization", "Secure API Rate Limiting", "Test-Driven Development (TDD)", "Continuous Integration Frameworks"].map((item, index) => (
            <span key={index} className="px-4 py-2 border border-white/5 bg-neutral-950/60 rounded-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 11. STRATEGIC ENGINEERING CORE VALUES */}
      <section className="py-20 px-8 md:px-20 max-w-[1600px] mx-auto border-t border-white/5 relative z-10">
        <h2 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-16">Engineering_Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sm">
          {engineeringPrinciples.map((rule, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="text-white font-bold uppercase tracking-tight text-base italic font-mono text-indigo-400/90">&bull; {rule.title}</h4>
              <p className="text-gray-400 font-light italic leading-relaxed pl-4">{rule.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* 12. CONTINUOUS GROWTH JOURNEY TIMELINE */}
      <section className="py-32 px-8 md:px-20 max-w-[1600px] mx-auto relative border-t border-white/5">
        <h2 className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-20">Continuous Growth Journey</h2>
        <div className="space-y-24 relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
          {[
            { year: "2021", event: "Foundational Code Basics", detail: "Wrote first scripts in HTML, CSS, and basic Java modules during schooling at Summer Valley School in Dehradun." },
            { year: "2023", event: "B.Tech Computer Science Matriculation", detail: "Commenced deep academic engineering targets at Manipal University Jaipur, focusing execution choices around structural parameters." },
            { year: "2024", event: "Pipeline Workflow Management", detail: "Coordinated cross-functional asset maps and design-to-development loops as NEXUS Coordinator." },
            { year: "2025", event: "Student Community Technical Direction", detail: "Oversaw corporate engineering affairs and directed multi-scale campus workshops as Senior Coordinator at IEEE MUJ." },
            { year: "2026", event: "Enterprise Consulting Execution", detail: "Completed a Business Analyst Internship at EY, structuring user story specs and data rules for a Life Insurance Portal." },
            { year: "Present", event: "Full Stack Implementation Sprints", detail: "Polishing algorithmic logic efficiency and constructing modular MERN tools to prepare for SDE internship profiles." }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              key={i} 
              className="pl-10 relative"
            >
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
              <span className="text-indigo-500 font-mono text-sm font-black italic">{item.year}</span>
              <h4 className="text-white text-3xl font-black uppercase italic tracking-tighter mt-1 leading-none">{item.event}</h4>
              <p className="text-gray-500 font-sans text-sm font-light max-w-2xl mt-3 leading-relaxed italic">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 13. CINEMATIC CLOSING FOOTER BLOCK */}
      <footer className="py-40 bg-black text-white px-8 text-center border-t border-white/5 relative z-10">
        <motion.div whileInView={{ opacity: [0, 1], y: [20, 0] }} viewport={{ once: true }}>
          <p className="text-indigo-400 font-mono text-[10px] tracking-[0.5em] uppercase mb-8 italic">READY FOR DEPLOYMENT</p>
          <a href="mailto:aditivermauk@gmail.com" className="text-5xl md:text-8xl font-black italic hover:text-indigo-400 transition-all uppercase tracking-tighter leading-none font-sans">
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
              className="group border border-indigo-500/30 px-10 py-4 rounded-xl bg-[#0a0a0a] hover:bg-indigo-500/10 transition-all flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-indigo-400 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">
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