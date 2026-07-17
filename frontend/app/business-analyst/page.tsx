"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function BusinessAnalystPage({ onBack }: { onBack?: () => void }) {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  const consultingHighlights = [
    { label: "Internship", value: "EY (Ernst & Young)" },
    { label: "Domain", value: "Insurance (Life Lifecycle)" },
    { label: "Documents Created", value: "BRD • FSD • User Stories" },
    { label: "Tools Used", value: "Jira • Confluence • Figma" },
    { label: "Business Analysis Skills", value: "Requirement Gathering • Process Mapping" }
  ];

  const skillsCategories = [
    {
      title: "Requirements & Analysis",
      rating: null,
      skills: [
        "Requirements Gathering", "Requirement Analysis", "Stakeholder Management (Basics)",
        "Business Process Mapping", "Gap Analysis", "Root Cause Analysis (5 Whys, Fishbone)",
        "User Stories", "Acceptance Criteria", "Functional Requirements", "Non-Functional Requirements",
        "BRD", "FRD/FSD", "Process Flow Diagrams", "As-Is vs To-Be Analysis",
        "Prioritization (MoSCoW)", "Change Request Management", "Traceability Matrix (RTM)"
      ]
    },
    {
      title: "Documentation Skills",
      rating: null,
      skills: [
        "BRD", "FRD/FSD", "SRS", "Meeting Minutes (MoM)", "User Stories", 
        "Epics", "Acceptance Criteria", "Use Cases", "Business Rules", 
        "Requirement Traceability Matrix", "Feature Documentation"
      ]
    },
    {
      title: "Agile & Scrum",
      rating: "⭐⭐⭐⭐⭐",
      skills: [
        "Agile Methodology", "Scrum Framework", "Sprint Planning", "Daily Stand-up", 
        "Sprint Review", "Sprint Retrospective", "Product Backlog", "Sprint Backlog", 
        "Definition of Done", "Story Points"
      ]
    },
    {
      title: "Business Process Modeling",
      rating: null,
      skills: [
        "BPMN Basics", "Process Mapping", "Swimlane Diagrams", "Workflow Diagrams", 
        "Flowcharts", "Decision Trees"
      ]
    },
    {
      title: "SQL",
      rating: "⭐⭐⭐⭐⭐",
      skills: [
        "SELECT", "WHERE", "ORDER BY", "GROUP BY", "HAVING", 
        "INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "UNION", "Subqueries", "Aggregate Functions"
      ]
    },
    {
      title: "Excel",
      rating: null,
      skills: [
        "Pivot Tables", "VLOOKUP", "XLOOKUP", "INDEX + MATCH", "IF", 
        "SUMIFS", "COUNTIFS", "Conditional Formatting", "Charts", "Data Cleaning", "Power Query (basic)"
      ]
    },
    {
      title: "Data Visualization",
      rating: "⭐⭐⭐⭐☆",
      skills: [
        "Power BI (Recommended)", "Tableau", "Google Looker Studio", 
        "KPIs", "Dashboards", "Charts", "Filters", "Slicers", "Basic DAX (Power BI)"
      ]
    },
    {
      title: "Wireframing",
      rating: null,
      skills: [
        "Figma", "Wireframes", "User Flows", "Screen Flows", "Navigation Flows"
      ]
    },
    {
      title: "Requirement Elicitation",
      rating: null,
      skills: [
        "Interviews", "Workshops", "Brainstorming", "Observation", 
        "Surveys", "Questionnaires", "Prototyping", "Document Analysis"
      ]
    },
    {
      title: "Product Thinking",
      rating: null,
      skills: [
        "Problem Statement", "Target Users", "User Personas", "Customer Journey", 
        "Pain Points", "Success Metrics", "KPIs", "Feature Prioritization"
      ]
    },
    {
      title: "API Basics",
      rating: null,
      skills: [
        "REST APIs", "GET", "POST", "PUT", "DELETE", "JSON", "Postman"
      ]
    },
    {
      title: "UML Basics",
      rating: "⭐⭐⭐⭐☆",
      skills: [
        "Use Case Diagram", "Activity Diagram", "Sequence Diagram", "Class Diagram (basic)"
      ]
    },
    {
      title: "Testing Knowledge",
      rating: null,
      skills: [
        "UAT", "Test Cases", "Test Scenarios"
      ]
    },
    {
      title: "Domain Knowledge (Insurance)",
      rating: "⭐⭐⭐⭐☆",
      skills: [
        "Life Insurance", "Motor Insurance", "Health Insurance", "Claims Process", 
        "Underwriting", "Renewals", "Policy Issuance", "Premium Calculation", "Regulatory Basics"
      ]
    },
    {
      title: "Soft Skills",
      rating: null,
      skills: [
        "Communication", "Active Listening", "Presentation Skills", "Analytical Thinking", 
        "Problem Solving", "Critical Thinking", "Negotiation", "Stakeholder Communication", 
        "Time Management", "Attention to Detail"
      ]
    }
  ];

  const baTools = [
    { tool: "Jira", purpose: "User Stories, Sprint Management" },
    { tool: "Confluence", purpose: "Documentation" },
    { tool: "Figma", purpose: "Wireframes & Prototypes" },
    { tool: "Miro", purpose: "Brainstorming & User Flows" },
    { tool: "Excel", purpose: "Data Analysis" },
    { tool: "Power BI", purpose: "Dashboards" },
    { tool: "SQL", purpose: "Database Queries" },
    { tool: "Postman", purpose: "API Testing" },
    { tool: "Visio / Draw.io", purpose: "Process Diagrams" },
    { tool: "Lucidchart", purpose: "Flowcharts" }
  ];

  const philosophyPoints = [
    { title: "Understand the problem first", text: "I map out the current business situation and gather input from domain experts before trying to outline software features." },
    { title: "Ask questions to remove ambiguity", text: "I clarify edge cases early in the discovery phase so requirements are clear and don't stall design or engineering sprints." },
    { title: "Think from the user's perspective", text: "I frame specifications around the daily patterns of the field agents who rely on the software to hit their sales targets." },
    { title: "Keep documentation practical", text: "I structure BRDs, FSDs, and user stories cleanly so that designers, developers, and QA engineers can understand them immediately." }
  ];

  const discoveryQuestions = [
    { q: "What problem are we solving?", desc: "Ensures the development team is building a functional enhancement rather than adding unnecessary system complexity." },
    { q: "Who will use this feature?", desc: "Identifies if the workflow belongs to independent agents, internal underwriters, or operations managers." },
    { q: "What are the edge cases?", desc: "Uncovers what happens if an API endpoint drops or verification keys fail during active sessions." },
    { q: "What happens if this rule changes?", desc: "Protects baseline technical logic configurations against unexpected structural shifts in compliance guidelines." }
  ];

  const artifactData = [
    {
      id: "brd",
      title: "Business Requirements Document",
      type: "BRD Extract",
      desc: "Documenting business objectives, user profiles, functional scope boundaries, and delivery dependencies.",
      content: `BUSINESS REQUIREMENTS DOCUMENT (BRD)
PROJECT: AGENTIC AI INSURANCE PORTAL

1. Business Objective
The objective is to integrate automated intelligence into the lead management workflow, reducing the manual profile audit and compliance review time from 15 minutes to under 5 seconds.

2. Functional Scope Boundaries
• FR-001 (AI Sales Advisor): System must coordinate a sequential multi-agent crew (Analyst, Designer, QA) to recommend optimal policies, matching riders, and objection scripts.
• FR-002 (Broker OTP Security): Portal must enforce a 3-step OTP password reset flow to prevent unauthorized account changes.

3. Key Dependencies
• High-speed Node.js Gemini API proxy is required to bypass Vercel serverless Hobby 10-second timeout constraints in production.`
    },
    {
      id: "fsd",
      title: "Functional Specification Document",
      type: "FSD Extract",
      desc: "Outlining user interface field behaviors, input parameters, system rules, and UI validation errors.",
      content: `FUNCTIONAL SPECIFICATION DOCUMENT (FSD)
MODULE: AI SALES ADVISOR ASSESSOR

1. System Trigger: Run AI Profile Assessment
• UI Action: User clicks "Run AI Profile Assessment & Audit" button.
• Backend Validation: If customer's annual income is missing or less than zero, return error code: "Cannot execute audit: Missing income parameter."

2. Low-Income Exception Handling Rule
• If applicant's annual income is less than 300,000 INR:
  - Set suitability rating automatically to 'Low Fit'.
  - Restrict standard policy recommendations.
  - Enforce recommending basic 'Micro-Insurance Term' plans in the output card.`
    },
    {
      id: "rules",
      title: "Business Rules Matrix",
      type: "Validation Logic Map",
      desc: "Conditional validation thresholds, policy status flags, and compliance underwriting rules.",
      content: `BUSINESS RULES MATRIX
AGENTIC LLM PITCH LOGIC

Rule ID: RULE-SA-01 [Sum Assured Multiplier check]
• IF: Target Coverage amount is < (10x Annual Income) OR > (20x Annual Income)
• THEN: Flag coverage as 'Inadequate' or 'High Risk' in the validation report.
• ELSE: Approve Sum Assured adequacy.

Rule ID: RULE-SEC-02 [OTP Verification Expiry]
• IF: Current Time > (resetOtpExpires timestamp) OR resetOtp does not match input
• THEN: Return status 400 with: "Invalid or expired verification OTP code."
• ELSE: Accept validation and proceed to Step 3.`
    },
    {
      id: "stories",
      title: "User Stories & Acceptance Criteria",
      type: "Agile Backlog Artifact",
      desc: "Agile feature definitions, user perspectives, functional scenarios, and test readiness parameters.",
      content: `AGILE TICKET SPECIFICATION
FEATURE: BCA-101 Run Automated AI Assessment

User Story:
AS AN Insurance Agent (Broker),
I WANT TO trigger an automated AI profile assessment on a customer lead,
SO THAT I get an instant recommendation of the optimal policy, riders, and sales pitch notes.

Acceptance Criteria (Given-When-Then Framework):
• GIVEN an authenticated agent is on the Lead Details screen,
• WHEN they click 'Run AI Profile Assessment & Audit',
• THEN spin up the multi-agent crew to evaluate the profile,
• AND render the suitability rating ('Optimal Fit'/'Moderate Fit'/'Low Fit') and pitch scripts in the Advisor card.
• AND guarantee the API returns the results in under 5 seconds.`
    }
  ];

  const workflowSteps = [
    { title: "Understand Business Problem", text: "Studying the end-to-end insurance policy lifecycle to identify operational bottlenecks." },
    { title: "Meet Stakeholders", text: "Discussing day-to-day pain points with mentors, managers, and system users." },
    { title: "Study Current Process", text: "Mapping the existing workflows to pinpoint exactly where processing delays occur." },
    { title: "Identify Pain Points", text: "Isolating manual handoffs, data re-entry loops, and blind spots in status visibility." },
    { title: "Document Requirements", text: "Translating gathered stakeholder needs into clear business and functional specifications." },
    { title: "Prepare User Stories", text: "Breaking down high-level scope into detailed agile cards with clear acceptance boundaries." },
    { title: "Create BRD & FSD", explanation: "Compiling business requirements and detailed functional specifications for design and engineering handoff." },
    { title: "Support Development", text: "Reviewing specifications with engineering teams early to align on technical constraints." },
    { title: "Review During Testing", text: "Collaborating with QA teams to verify that test scenarios map directly to documented business logic." }
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#1a1a1a] font-sans antialiased selection:bg-emerald-500/10 overflow-x-hidden pb-20">
      
      {/* BACKGROUND MATRIX GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-center bg-[#fbfaf7]/70 backdrop-blur-md border-b border-black/5">
        {onBack ? (
          <button onClick={onBack} className="px-4 py-2 border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 font-mono text-[10px] font-bold uppercase tracking-widest rounded hover:bg-emerald-500/10 transition-all cursor-pointer">
            ← RETURN TO LIFECYCLE
          </button>
        ) : (
          <Link href="/explore" className="px-4 py-2 border border-emerald-500/20 bg-emerald-500/5 text-emerald-700 font-mono text-[10px] font-bold uppercase tracking-widest rounded hover:bg-emerald-500/10 transition-all">
            ← RETURN TO LIFECYCLE
          </Link>
        )}
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest text-slate-500">
          <a href="https://github.com/adjienjeknwc" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">GITHUB</a>
          <a href="https://www.linkedin.com/in/aditi-verma-8b8220287" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors">LINKEDIN</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="min-h-[75vh] flex flex-col justify-center px-8 md:px-20 max-w-6xl mx-auto pt-32 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 max-w-5xl">
          <div className="space-y-4 max-w-3xl">
            <p className="text-emerald-600 font-mono tracking-[0.4em] text-[10px] uppercase">// PROFESSIONAL OVERVIEW</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 italic leading-[0.9]">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">ANALYST.</span>
              </h1>
              <div className="w-16 h-16 md:w-24 md:h-24 relative rounded-full overflow-hidden border-2 border-emerald-500/20 shadow-md bg-emerald-50/50 flex-shrink-0">
                <Image 
                  src="/spec_girl_intro_v2.png" 
                  alt="Aditi Verma" 
                  fill 
                  priority
                  className="object-cover scale-110" 
                  sizes="(max-width: 768px) 64px, 96px"
                />
              </div>
            </div>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed font-sans pt-4">
              I begin by understanding the business before defining the solution. My internship at EY taught me how to convert business problems into structured documentation, process flows, user stories, and implementation-ready requirements. I focus on keeping requirements clear, realistic, and completely aligned with project goals.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: CONSULTING HIGHLIGHT METRIC STRIP */}
      <section className="border-t border-b border-black/5 bg-[#eefdf7] py-8 px-8 md:px-20 z-10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          {consultingHighlights.map((item, idx) => (
            <div key={idx} className="border-l border-emerald-500/50 pl-4 font-mono">
              <p className="text-[9px] uppercase text-slate-500 tracking-wider mb-1">{item.label}</p>
              <p className="text-xs uppercase text-slate-800 font-bold tracking-tight">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: HOW I THINK AS A BA */}
      <section className="py-20 px-8 md:px-20 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase">// METHODOLOGY & PRACTICE</p>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-950 italic tracking-tight">How I Think as a Business Analyst</h3>
            <div className="space-y-4 font-sans text-sm text-slate-600 font-light leading-relaxed">
              {philosophyPoints.map((point, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-slate-800 font-medium not-italic text-sm">&bull; {point.title}</h4>
                  <p className="pl-4 italic text-slate-500 text-[13px]">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-emerald-500/20 p-6 rounded-xl font-mono text-[11px] text-slate-600 space-y-2 self-center shadow-sm">
            <p className="text-emerald-700 font-bold uppercase tracking-wider mb-2">// INSIGHT FROM EXPERIENCE</p>
            <p>Spending systematic upfront effort in defining exception handling, validation limits, and status logic keeps development moving and avoids expensive rework mid-sprint.</p>
          </div>
        </div>
      </section>

      {/* 3. EY EXPERIENCE SECTION */}
      <section className="py-20 px-8 md:px-20 max-w-6xl mx-auto border-t border-black/5 relative z-10">
        <div className="space-y-3 mb-12">
          <p className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase">{"// PROFESSIONAL_EXPERIENCE"}</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter italic">EY Experience</h2>
          <p className="text-xs font-mono text-emerald-700 uppercase italic">Business Analyst Intern | Enterprise Insurance Consulting</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm font-sans">
          <div className="p-6 border border-emerald-500/10 bg-white rounded-xl space-y-2 shadow-sm">
            <h4 className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">About the Project</h4>
            <p className="text-slate-600 text-xs font-light leading-relaxed italic">
              Worked on a Life Insurance Agent Portal designed to handle the core insurance lifecycle—from lead capture and quotation to underwriting routing, premium payment validation, and policy renewal tracks.
            </p>
          </div>
          <div className="p-6 border border-emerald-500/10 bg-white rounded-xl space-y-2 shadow-sm">
            <h4 className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">What I Worked On</h4>
            <ul className="text-slate-600 text-xs font-light space-y-1.5 list-disc pl-4 italic">
              <li>Gathered and organized project requirements from mentorship discussions.</li>
              <li>Drafted BRD and FSD document structures for underwriting and onboarding tracks.</li>
              <li>Prepared clear user stories, validation rules, and acceptance criteria.</li>
              <li>Reviewed layouts to ensure wireframes lined up with documented specifications.</li>
            </ul>
          </div>
          <div className="p-6 border border-emerald-500/10 bg-white rounded-xl space-y-2 shadow-sm">
            <h4 className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">What I Learned</h4>
            <p className="text-slate-600 text-xs font-light leading-relaxed italic">
              Gained practical experience converting loose business needs into clear requirements. Learned how to communicate across business and development groups, map processes accurately, and protect agile delivery sprint tracks from scope creep.
            </p>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS ANALYSIS PROCESS FLOW */}
      <section className="py-20 px-8 md:px-20 max-w-6xl mx-auto border-t border-black/5 relative z-10">
        <div className="mb-12">
          <p className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase">{"// OPERATION_STEPS"}</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter italic">My Business Analysis Approach</h2>
        </div>

        <div className="relative border-l border-emerald-200 pl-6 space-y-6 font-mono text-xs max-w-3xl">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[29px] top-1 w-2 h-2 rounded-full bg-[#fbfaf7] border border-emerald-500 transition-colors group-hover:bg-emerald-500" />
              <h4 className="text-slate-800 font-bold uppercase tracking-tight text-xs transition-colors group-hover:text-emerald-600">{step.title}</h4>
              {step.text && <p className="font-sans font-light italic text-slate-500 text-[13px] leading-relaxed pt-0.5">{step.text}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 8. AGENT PORTAL CASE STUDY */}
      <section className="py-24 px-8 md:px-20 max-[1600px] mx-auto z-20 relative border-t border-black/5">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Left Anchor: Context & Metadata */}
          <div className="lg:w-1/3 space-y-4">
            <p className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.4em] italic">// ENTERPRISE CONSULTING CASE STUDY</p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic uppercase tracking-tighter leading-none">
              Insurance <br />
              <span className="text-slate-400">Agent Portal.</span>
            </h2>
            <p className="text-slate-600 font-sans text-sm font-light leading-relaxed pt-2">
              A deep dive into system architecture design, multi-stakeholder requirements mapping, and functional system specifications drafted during my corporate advisory stint at EY.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-2">
              {["Agentic AI", "User Stories", "Process Mapping", "UML Modeling", "Agile Jira"].map((tag) => (
                <span key={tag} className="text-[9px] font-mono border border-emerald-500/10 bg-emerald-500/5 px-3 py-1 rounded-full text-emerald-800 tracking-wide uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Anchor: Core BA Artifacts Grid */}
          <div className="flex-1 w-full border border-emerald-500/20 p-8 md:p-12 rounded-[2.5rem] bg-white flex flex-col justify-between shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm text-slate-700 mb-10">
              
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">// 01. The Business Challenge</h4>
                <p className="font-light leading-relaxed italic">
                  Legacy manual operations created severe backlogs in lead profiling, sum assured validations, and compliant rider suggestions, causing high sales TAT.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">// 02. Agentic AI Orchestration</h4>
                <p className="font-light leading-relaxed italic">
                  Engineered the specifications for a multi-agent sales advisor crew (Analyst, Designer, QA) using CrewAI and Gemini to automate profiling, sum-assured audits, and objections scripting.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">// 03. Technical Constraints Solving</h4>
                <p className="font-light leading-relaxed italic">
                  Resolved serverless timeout limits on Vercel Hobby accounts by mapping a dual-mode engine (local Python CrewAI subprocess + direct high-speed Gemini API proxy).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">// 04. Security Sentinel Flow</h4>
                <p className="font-light leading-relaxed italic">
                  Redesigned the credential recovery workflow into a 3-step security OTP validation sequence with strict password length constraints and automated bcrypt pre-save encryption hooks.
                </p>
              </div>

            </div>

            {/* Deep Link Call to Action */}
            <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="font-mono text-xs text-slate-400">
                📍 Enterprise Architecture Matrix &bull; Sync Verified
              </div>
              
              {/* Dual Action Buttons Group */}
              <div className="flex flex-col min-w-full sm:min-w-0 sm:flex-row items-center gap-3 w-full sm:w-auto">
                
                {/* Action 1: Notion Deep Dive Document */}
                <a 
                  href="https://app.notion.com/p/Business-Analyst-Case-Study-Agentic-AI-Integration-391be7f0e9f38007884bdd2091e4b3e2?source=copy_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center border border-slate-200 text-slate-700 bg-slate-50 rounded-full px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all text-[10px]"
                >
                  Read Case Study 📖
                </a>

                {/* Action 2: Live Deployment Interface Link */}
                <a 
                  href="https://betacare-agentportal-ai.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-[0_0_30px_rgba(16,185,129,0.15)] group hover:scale-105 text-[10px]"
                >
                  Launch Live Portal <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 8b. ADDITIONAL PRODUCT CASE STUDIES */}
      <section className="py-20 px-8 md:px-20 max-w-[1600px] mx-auto z-20 relative border-t border-black/5">
        <div className="mb-12">
          <p className="text-emerald-600 font-mono text-[10px] uppercase tracking-[0.4em]">// PRODUCT & GROWTH CASE STUDIES</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter italic">Additional Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Card 1: SmartSpend India */}
          <div className="group border border-emerald-500/10 p-8 rounded-[2.5rem] bg-white hover:border-emerald-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start">
            <div>
              <span className="text-[9px] font-mono border border-emerald-500/10 bg-emerald-50/50 px-3 py-1 rounded-full text-emerald-700 tracking-wide uppercase mb-6 inline-block">
                Data Analytics // Inflation Indexing
              </span>
              <h3 className="text-2xl font-black text-slate-900 italic uppercase mb-4 leading-none">SmartSpend India</h3>
              
              <div className="space-y-4 text-xs font-sans font-light text-slate-600 leading-relaxed mb-8">
                <p><strong>The Opportunity:</strong> Shrinkflation and regional pricing variants make real grocery costs difficult for consumers and market analysts to compare accurately in real time.</p>
                <p><strong>Analysis & Execution:</strong> Designed data models mapping inflation benchmarks across 10 major Indian cities. Normalized weights to extract true unit rates, visualised in clean streamlit grids.</p>
                <div>
                  <strong>Key Artifacts Drafted:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Multi-City Data Normalization Matrices</li>
                    <li>Inflation Indexing Dashboards</li>
                    <li>Comparative Price-per-Weight Specifications</li>
                  </ul>
                </div>
              </div>
            </div>

            <a 
              href="https://app.notion.com/p/SmartSpend-India-AI-Driven-Grocery-Inflation-Radar-39ebe7f0e9f380bea945edbafe0a9b14?source=copy_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-950 hover:scale-105 transition-all mt-auto"
            >
              Read Notion Case Study 📖
            </a>
          </div>

          {/* Card 2: CogniFlow */}
          <div className="group border border-emerald-500/10 p-8 rounded-[2.5rem] bg-white hover:border-emerald-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-start">
            <div>
              <span className="text-[9px] font-mono border border-emerald-500/10 bg-emerald-50/50 px-3 py-1 rounded-full text-emerald-700 tracking-wide uppercase mb-6 inline-block">
                AI Conversion // User Journeys
              </span>
              <h3 className="text-2xl font-black text-slate-900 italic uppercase mb-4 leading-none">CogniFlow AI</h3>
              
              <div className="space-y-4 text-xs font-sans font-light text-slate-600 leading-relaxed mb-8">
                <p><strong>The Opportunity:</strong> Product managers discover funnel blockages and conversion drops only after engineering sprints, leading to costly code rework cycles.</p>
                <p><strong>Analysis & Execution:</strong> Formulated specification plans for an AI-powered visual layout evaluation system. Modeled conversion predictions based on element hierarchy, spacing, and font weight parameters.</p>
                <div>
                  <strong>Key Artifacts Drafted:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Conversion-Drop Predictive Model Rules</li>
                    <li>User Flow Journey Sequence Schemas</li>
                    <li>A/B Layout Simulation Specs</li>
                  </ul>
                </div>
              </div>
            </div>

            <a 
              href="https://app.notion.com/p/CogniFlow-AI-User-Journey-Conversion-Predictor-39abe7f0e9f38066a853d809007876e9?source=copy_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-950 hover:scale-105 transition-all mt-auto"
            >
              Read Notion Case Study 📖
            </a>
          </div>

        </div>
      </section>

      {/* 2. BUSINESS ANALYSIS DELIVERABLES PREVIEW GRID */}
      <section className="py-20 px-8 md:px-20 max-w-6xl mx-auto border-t border-black/5 relative z-10">
        <div className="mb-4">
          <p className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase">{"// INTERNSHIP_ARTIFACTS"}</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter italic">Business Analysis Deliverables</h2>
        </div>
        <p className="text-slate-600 font-sans font-light italic text-sm mb-12 max-w-xl">
          During my internship, I worked on documenting business requirements, functional specifications, business rules, and user stories to support the development team. Click any card to inspect a realistic snippet.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artifactData.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => setExpandedDoc(doc.id)}
              className="border border-emerald-500/10 p-6 rounded-xl bg-white hover:border-emerald-500/30 transition-all cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <p className="text-[9px] font-mono text-emerald-600 uppercase tracking-widest mb-3">{doc.type}</p>
                <h4 className="text-base font-black text-slate-800 italic tracking-tight group-hover:text-emerald-700 transition-colors uppercase leading-tight mb-2">
                  {doc.title}
                </h4>
                <p className="text-slate-500 font-sans font-light text-[11px] leading-relaxed italic">{doc.desc}</p>
              </div>
              <span className="text-[10px] font-mono text-emerald-600/70 mt-8 block group-hover:text-emerald-900 transition-colors">View Sample →</span>
            </div>
          ))}
        </div>

        {/* MODAL DETAILED DOCUMENTATION SUMMARY VAULT CONTAINER */}
        <AnimatePresence>
          {expandedDoc && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedDoc(null)}
              className="fixed inset-0 z-[100000] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
            >
              {artifactData.filter(item => item.id === expandedDoc).map(item => (
                <motion.div 
                  key={item.id}
                  initial={{ scale: 0.96, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.96, y: 15 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white border border-emerald-500/20 p-6 md:p-8 rounded-xl max-w-2xl w-full text-left font-mono relative shadow-2xl"
                >
                  <button 
                    onClick={() => setExpandedDoc(null)}
                    className="absolute top-6 right-6 text-[10px] font-bold text-slate-400 hover:text-slate-800 tracking-widest uppercase focus:outline-none"
                  >
                    [CLOSE]
                  </button>
                  <p className="text-[9px] text-emerald-600 uppercase tracking-widest mb-1">{item.type}</p>
                  <h3 className="text-base font-black text-slate-900 uppercase italic tracking-tight mb-6 border-b border-slate-100 pb-4">{item.title}</h3>
                  <pre className="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap bg-slate-50 p-4 rounded-lg border border-slate-200 max-h-[300px] overflow-y-auto font-mono">
                    {item.content}
                  </pre>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* NEW SECTION: QUESTIONS I LEARNED TO ASK */}
      <section className="py-20 px-8 md:px-20 max-w-6xl mx-auto border-t border-black/5 relative z-10">
        <div className="mb-12">
          <p className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase">// ANALYTICAL_DISCOVERY</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter italic">Questions I Learned to Ask</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {discoveryQuestions.map((item, idx) => (
            <div key={idx} className="p-6 border border-emerald-500/10 bg-white rounded-xl space-y-2 font-sans shadow-sm">
              <h4 className="text-base font-bold text-slate-800 uppercase tracking-tight font-mono text-emerald-700">{item.q}</h4>
              <p className="text-slate-600 text-xs font-light leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE BUSINESS ANALYST TOOLKIT */}
      <section className="py-20 px-8 md:px-20 max-w-6xl mx-auto border-t border-black/5 relative z-10">
        <div className="mb-12">
          <p className="text-emerald-600 font-mono text-[10px] tracking-[0.4em] uppercase">// PRAGMATIC_TOOLKIT</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-950 tracking-tighter italic">Business Analysis Toolkit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillsCategories.map((category, idx) => (
            <div key={idx} className="p-6 border border-emerald-500/10 bg-white rounded-2xl shadow-sm space-y-4 hover:border-emerald-500/20 transition-all flex flex-col justify-start">
              <div>
                <div className="flex justify-between items-center border-b border-emerald-500/5 pb-2">
                  <h3 className="text-emerald-800 font-bold uppercase tracking-wider text-[11px] font-mono">
                    // {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}. {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono border border-emerald-500/10 bg-emerald-500/5 px-2.5 py-0.5 rounded-full text-emerald-800 tracking-wide font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* BA Tools Custom Card */}
          <div className="p-6 border border-emerald-500/10 bg-white rounded-2xl shadow-sm space-y-4 hover:border-emerald-500/20 transition-all md:col-span-2 lg:col-span-3 mt-4">
            <div className="flex justify-between items-center border-b border-emerald-500/5 pb-2">
              <h3 className="text-emerald-800 font-bold uppercase tracking-wider text-[11px] font-mono">
                // 16. BA Tools & Core Platforms
              </h3>
            </div>
            
            <div className="overflow-x-auto w-full pt-2">
              <table className="min-w-full text-left font-sans text-xs">
                <thead>
                  <tr className="border-b border-emerald-500/10 text-emerald-700 font-mono uppercase text-[9px] tracking-widest">
                    <th className="py-2.5 font-bold pr-4">Platform Tool</th>
                    <th className="py-2.5 font-bold">Purpose / Applied Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-500/5">
                  {baTools.map((item, idx) => (
                    <tr key={idx} className="hover:bg-emerald-500/[0.01] transition-colors">
                      <td className="py-2.5 font-mono font-bold text-emerald-900 pr-4">{item.tool}</td>
                      <td className="py-2.5 font-light text-slate-600 italic">{item.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 13. LEARNING REFLECTION FOOTER */}
      <section className="py-28 px-8 md:px-20 border-t border-black/5 bg-[#eefdf7]/30 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="text-emerald-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 italic">// WHAT BUSINESS ANALYSIS MEANS TO ME</p>
            <p className="text-base md:text-lg font-sans font-light italic leading-relaxed text-slate-600 max-w-3xl mx-auto">
              During my internship, I realized that Business Analysis is much more than writing documents. It is about understanding how people work, identifying where processes fail, asking the right questions, and helping teams build software that actually solves business problems. That mindset is what I continue to develop in every project.
            </p>
          </div>
          
          <div className="border-t border-slate-200 pt-10 max-w-2xl mx-auto">
            <h4 className="text-xl md:text-2xl font-sans font-black uppercase text-slate-900 tracking-tight italic">
              Ready to build products that solve business problems.
            </h4>
          </div>
        </div>
      </section>

      {/* FOOTER AREA */}
      <footer className="py-12 bg-[#fbfaf7] border-t border-black/5 text-center relative z-10">
        <div className="flex flex-col md:flex-row justify-center gap-6 opacity-60 font-mono text-[8px] tracking-[0.4em] uppercase text-slate-500">
          <span>LOCATION: JAIPUR // INDIA</span>
          <span className="hidden md:block">|</span>
          <span>© 2026 ADITI VERMA // BUSINESS SPECIFICATIONS</span>
        </div>
      </footer>

    </main>
  );
}