"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { Compass, Eye, Terminal, ArrowLeft } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Import subpage components for immersive zoom overlays
import BusinessAnalystPage from '../app/business-analyst/page';
import UXDesignPage from '../app/ux-design/page';
import DeveloperPage from '../app/developer-journey/page';

interface RoadJourneyProps {
  onBack?: () => void;
}

export default function RoadJourney({ onBack }: RoadJourneyProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const landscapeRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  // States to track active destination for HTML UI glows
  const [activeStop, setActiveStop] = useState<number | null>(null);
  const [isMoving, setIsMoving] = useState(false);
  const isTravelingRef = useRef(false);
  const currentProgressRef = useRef(0);

  // Immersive Station Zoom States
  const [zoomedStop, setZoomedStop] = useState<number | null>(null);
  const zoomedStopRef = useRef<number | null>(null);
  const [activeStationOverlay, setActiveStationOverlay] = useState<number | null>(null);

  // React state to lock the fit-scale transform
  const [fitScale, setFitScale] = useState(1);

  // Auto-scale the fixed canvas container to fit the browser viewport perfectly without overlaps
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !landscapeRef.current) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      const scaleX = w / 1600;
      const scaleY = h / 1000;
      // 0.92 scaling factor to leave a clean visual safety border margin
      const scale = Math.min(scaleX, scaleY) * 0.92;
      setFitScale(scale);
      
      if (zoomedStopRef.current === null) {
        gsap.set(landscapeRef.current, {
          scale: scale,
          x: 0,
          y: 0
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth click-to-travel handler to drive the car along path from bottom to top
  const handleStopClick = (stopIndex: number) => {
    if (isTravelingRef.current || zoomedStop !== null) return;

    isTravelingRef.current = true;
    setIsMoving(true);

    let targetProgress = 0;
    if (stopIndex === 1) targetProgress = 0.23; // Understand center (Stop 1)
    else if (stopIndex === 2) targetProgress = 0.53; // Design center (Stop 2)
    else if (stopIndex === 3) targetProgress = 0.78; // Build center (Stop 3)

    // Snap the car back to the START point before animating
    currentProgressRef.current = 0;
    const path = pathRef.current;
    if (path) {
      const pt = path.getPointAtLength(0);
      gsap.set(carRef.current!, {
        x: pt.x,
        y: pt.y,
        rotation: 90, // Facing UP at start
      });
    }

    const startProgress = 0;
    const progressObj = { value: startProgress };

    // Dim brakes while driving
    gsap.to(".brake-light", { fill: "#991B1B", filter: "none", opacity: 0.4, duration: 0.2 });
    gsap.to(".brake-glow", { opacity: 0, duration: 0.2 });

    // Animate progress value
    gsap.to(progressObj, {
      value: targetProgress,
      duration: 2.2, // Cinematic driving time
      ease: "power2.inOut",
      onUpdate: () => {
        const p = progressObj.value;
        currentProgressRef.current = p;
        
        const path = pathRef.current;
        if (path) {
          const pathLength = path.getTotalLength();
          const pt = path.getPointAtLength(p * pathLength);
          
          // Calculate tangent angle for rotation
          const ptPrev = path.getPointAtLength(Math.max(0, p - 0.005) * pathLength);
          const ptNext = path.getPointAtLength(Math.min(1, p + 0.005) * pathLength);
          const angle = Math.atan2(ptNext.y - ptPrev.y, ptNext.x - ptPrev.x) * (180 / Math.PI);
          
          gsap.set(carRef.current!, {
            x: pt.x,
            y: pt.y,
            rotation: angle + 180, // Facing LEFT base + angle rotation
          });
        }
      },
      onComplete: () => {
        setIsMoving(false);
        isTravelingRef.current = false;
        setActiveStop(stopIndex);

        // Turn on brakes
        gsap.to(".brake-light", { fill: "#EF4444", filter: "drop-shadow(0 0 6px #EF4444)", opacity: 1, duration: 0.3 });
        gsap.to(".brake-glow", { opacity: 0.8, duration: 0.3 });

        // Auto trigger zoom in after parking
        setTimeout(() => {
          triggerZoomIn(stopIndex);
        }, 800);
      }
    });
  };

  const triggerZoomIn = (stopIndex: number) => {
    setZoomedStop(stopIndex);
    zoomedStopRef.current = stopIndex;
    
    // Zoom coordinates pointing directly to the tip of the pins
    let targetX = 1100;
    let targetY = 750;
    if (stopIndex === 1) {
      targetX = 1100;
      targetY = 750;
    } else if (stopIndex === 2) {
      targetX = 500;
      targetY = 500;
    } else if (stopIndex === 3) {
      targetX = 1100;
      targetY = 300;
    }
    
    const S = 3.6; // Scale zoom factor
    const dx = window.innerWidth / 2 - targetX * S;
    const dy = window.innerHeight / 2 - targetY * S;
    
    // Animate camera and landscape opacity
    gsap.to(landscapeRef.current!, {
      x: dx,
      y: dy,
      scale: S,
      opacity: 0.05,
      duration: 1.4,
      ease: "power3.inOut",
      onComplete: () => {
        setActiveStationOverlay(stopIndex);
      }
    });
  };

  const handleBackFromStation = () => {
    setActiveStationOverlay(null);
    
    // Zoom back out to the responsive fitScale
    gsap.to(landscapeRef.current!, {
      x: 0,
      y: 0,
      scale: fitScale,
      opacity: 1,
      duration: 1.4,
      ease: "power3.inOut",
      onComplete: () => {
        setZoomedStop(null);
        zoomedStopRef.current = null;
      }
    });
  };

  useLayoutEffect(() => {
    if (!landscapeRef.current || !carRef.current || !pathRef.current) return;
    
    // Place car at starting line (bottom of winding road)
    const path = pathRef.current;
    const pt = path.getPointAtLength(0);
    gsap.set(carRef.current!, {
      x: pt.x,
      y: pt.y,
      rotation: 90, // Align yellow car facing UP at the start
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50% 50%"
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative bg-[#FAF9F6] overflow-hidden select-none flex items-center justify-center">
      
      {/* Local keyframes for idling & drive vibrations */}
      <style>{`
        @keyframes marker-pulse-anim {
          0% { r: 32px; opacity: 0.8; }
          100% { r: 64px; opacity: 0; }
        }
        .marker-pulse {
          animation: marker-pulse-anim 2s infinite ease-out;
        }
        @keyframes car-idle-vibe {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.6px); }
        }
        .car-idle-anim {
          animation: car-idle-vibe 0.18s infinite ease-in-out;
        }
        @keyframes car-drive-vibe {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-1.2px) rotate(0.15deg); }
          75% { transform: translateY(0.8px) rotate(-0.15deg); }
        }
        .car-drive-anim {
          animation: car-drive-vibe 0.28s infinite ease-in-out;
        }
      `}</style>

      {/* Single-Page Landscape Container matching the exact template design (Fixed 1600px x 1000px space) */}
      <div 
        ref={landscapeRef} 
        className="relative bg-[#81c14b] flex-shrink-0 shadow-2xl rounded-[2rem] overflow-hidden"
        style={{ 
          width: "1600px", 
          height: "1000px", 
          transformOrigin: "center center",
          transform: zoomedStop !== null ? undefined : `scale(${fitScale})`
        }}
      >
        
        {/* Layered S-Timeline Background Graphics */}
        <svg width="1600" height="1000" viewBox="0 0 1600 1000" className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="soft-shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#7C7460" floodOpacity="0.08" />
            </filter>
            
            <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#75c8f3" />
              <stop offset="100%" stopColor="#8ed4f8" />
            </linearGradient>

            <radialGradient id="brake-radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF3B30" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF3B30" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="headlight-cone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFDF0" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FFFDF0" stopOpacity="0.0" />
            </linearGradient>

            <g id="pine-tree">
              <rect x="-2" y="0" width="4" height="15" fill="#5c4033" opacity="0.8" />
              <path d="M 0 -22 L -12 -6 L 12 -6 Z" fill="#699f37" />
              <path d="M 0 -30 L -9 -14 L 9 -14 Z" fill="#7ba849" />
            </g>
            
            <g id="round-tree">
              <rect x="-1.5" y="0" width="3" height="12" fill="#5c4033" opacity="0.8" />
              <circle cx="0" cy="-10" r="11" fill="#7ba849" />
              <circle cx="-5" cy="-12" r="8" fill="#699f37" />
            </g>
          </defs>

          {/* 1. Sky Background */}
          <rect x="0" y="0" width="1600" height="280" fill="url(#sky-grad)" />

          {/* 2. Overlapping Blue/Teal Mountains */}
          <path d="M -100 280 L 100 150 L 350 250 L 600 130 L 900 240 L 1150 140 L 1400 250 L 1700 120 L 1700 280 Z" fill="#4b8fa6" />
          <path d="M -50 280 L 200 180 L 450 260 L 750 160 L 1050 250 L 1300 170 L 1650 280 Z" fill="#579fb6" opacity="0.8" />

          {/* Clouds */}
          <path d="M 150 80 Q 170 60 200 70 Q 230 60 250 90 Q 270 90 280 110 Q 260 130 150 130 Z" fill="#FFF" opacity="0.85" />
          <path d="M 1350 70 Q 1370 50 1400 60 Q 1430 50 1450 80 Q 1470 80 1480 100 Q 1460 120 1350 120 Z" fill="#FFF" opacity="0.85" />

          {/* 3. Rolling Hills (Green) */}
          <path d="M 0 1000 L 0 280 Q 400 240 800 300 T 1600 260 L 1600 1000 Z" fill="#92cc5c" />
          
          {/* Trees scattered along landscape */}
          <use href="#pine-tree" x="120" y="380" />
          <use href="#round-tree" x="220" y="360" />
          <use href="#pine-tree" x="1400" y="450" />
          <use href="#round-tree" x="1480" y="420" />
          <use href="#pine-tree" x="180" y="650" />
          <use href="#round-tree" x="250" y="620" />
          <use href="#pine-tree" x="1350" y="800" />
          <use href="#round-tree" x="1420" y="780" />

          {/* 4. Giant Road Shadow */}
          <path d="M 800 950 C 800 850, 1100 850, 1100 750 C 1100 600, 500 650, 500 500 C 500 350, 1100 400, 1100 300 C 1100 200, 800 220, 800 120" 
            stroke="#111" strokeWidth="194" fill="none" strokeLinecap="round" opacity="0.04" transform="translate(0, 18)" />
            
          {/* Giant Road Shoulder */}
          <path d="M 800 950 C 800 850, 1100 850, 1100 750 C 1100 600, 500 650, 500 500 C 500 350, 1100 400, 1100 300 C 1100 200, 800 220, 800 120" 
            stroke="#E5E7EB" strokeWidth="196" fill="none" strokeLinecap="round" opacity="0.3" />

          {/* Giant Road Path (Wide Asphalt) */}
          <path ref={pathRef} id="road-path" d="M 800 950 C 800 850, 1100 850, 1100 750 C 1100 600, 500 650, 500 500 C 500 350, 1100 400, 1100 300 C 1100 200, 800 220, 800 120" 
            stroke="#2a2c2e" strokeWidth="180" fill="none" strokeLinecap="round" />

          {/* Road lane markings (Dashed White lane line) */}
          <path d="M 800 950 C 800 850, 1100 850, 1100 750 C 1100 600, 500 650, 500 500 C 500 350, 1100 400, 1100 300 C 1100 200, 800 220, 800 120" 
            stroke="#FFF" strokeWidth="5" strokeDasharray="30, 40" fill="none" opacity="0.8" />

          {/* Solid White Connectors from Description Cards to Pins */}
          <line x1="1200" y1="710" x2="1100" y2="750" stroke="#FFF" strokeWidth="3.5" opacity="0.9" />
          <line x1="420" y1="460" x2="500" y2="500" stroke="#FFF" strokeWidth="3.5" opacity="0.9" />
          <line x1="1200" y1="260" x2="1100" y2="300" stroke="#FFF" strokeWidth="3.5" opacity="0.9" />

          {/* Road START Paint and Stencil Grid Line */}
          <line x1="720" y1="915" x2="880" y2="915" stroke="#FFF" strokeWidth="4.5" opacity="0.8" strokeDasharray="14, 8" />
          <text x="800" y="902" textAnchor="middle" fill="#ef4444" fontSize="13" fontWeight="900" fontFamily="monospace" letterSpacing="4" opacity="0.95">
            START
          </text>

          {/* Hero Yellow Cartoon Beetle Car SVG Group */}
          <g ref={carRef} id="electric-car" className="z-10">
            <g className={isMoving ? "car-drive-anim" : "car-idle-anim"}>
              <g transform="scale(1.4)">
                {/* Soft Drop Shadow */}
                <ellipse cx="0" cy="16" rx="28" ry="5.5" fill="#000" opacity="0.16" />
                
                {/* Main Yellow Beetle Body */}
                <path 
                  d="M 28 8 C 28 14, 25 14, 20 14 C 18 8, 10 8, 8 14 C 4 14, -4 14, -8 14 C -10 8, -18 8, -20 14 C -25 14, -28 14, -28 6 C -28 -2, -24 -6, -20 -8 C -14 -24, 14 -24, 20 -8 C 24 -6, 28 -2, 28 8 Z" 
                  fill="#fcb913" 
                  stroke="#b4783a" 
                  strokeWidth="2.2" 
                />
                
                {/* Windows */}
                <path 
                  d="M -16 -8 C -12 -21, -2 -21, -2 -8 Z" 
                  fill="#93c5fd" 
                  stroke="#2563eb" 
                  strokeWidth="1.5" 
                />
                <circle cx="-10" cy="-14" r="4" fill="#FFF" opacity="0.65" />
                
                <path 
                  d="M 2 -8 C 2 -21, 12 -21, 16 -8 Z" 
                  fill="#93c5fd" 
                  stroke="#2563eb" 
                  strokeWidth="1.5" 
                />
                <circle cx="8" cy="-14" r="4" fill="#FFF" opacity="0.65" />
                
                {/* Headlight (Left) */}
                <ellipse cx="-28" cy="4" rx="2.5" ry="3.5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
                
                {/* Tail Light (Right) */}
                <path 
                  d="M 28 0 C 28 -4, 25 -6, 25 2 Z" 
                  fill="#ef4444" 
                  stroke="#b91c1c" 
                  strokeWidth="1.2" 
                />
                
                {/* Tires & Hubcaps */}
                <circle cx="-14" cy="14" r="9.5" fill="#27272a" stroke="#09090b" strokeWidth="2.5" />
                <circle cx="-14" cy="14" r="4" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
                <circle cx="-15.5" cy="12.5" r="1.2" fill="#FFF" opacity="0.8" />
                
                <circle cx="14" cy="14" r="9.5" fill="#27272a" stroke="#09090b" strokeWidth="2.5" />
                <circle cx="14" cy="14" r="4" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
                <circle cx="12.5" cy="12.5" r="1.2" fill="#FFF" opacity="0.8" />
                
                {/* Bumpers */}
                <rect x="-30" y="8" width="3.5" height="5.5" rx="1.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
                <rect x="26.5" y="8" width="3.5" height="5.5" rx="1.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              </g>
            </g>
          </g>

          {/* Pulse Rings for active targets */}
          <circle id="pulse-ring-1" cx="1100" cy="750" r="32" fill="none" stroke="#fcb913" strokeWidth="3" opacity="0.4" className="marker-pulse origin-center" />
          <circle id="pulse-ring-2" cx="500" cy="500" r="32" fill="none" stroke="#e94e4e" strokeWidth="3" opacity="0.4" className="marker-pulse origin-center" />
          <circle id="pulse-ring-3" cx="1100" cy="300" r="32" fill="none" stroke="#9c27b0" strokeWidth="3" opacity="0.4" className="marker-pulse origin-center" />

          {/* High Fidelity Spherical Pushpins (pointed tips at cy) */}
          {/* Stop 1 Pin (Yellow) */}
          <g id="marker-1" className="origin-center transition-all duration-300 cursor-pointer pointer-events-auto" onClick={() => handleStopClick(1)} transform="translate(1100, 750)">
            <rect x="-1.5" y="-56" width="3" height="56" fill="#94a3b8" />
            <rect x="0" y="-56" width="1.5" height="56" fill="#475569" />
            <polygon points="-2.5,-3 2.5,-3 0,1.5" fill="#94a3b8" />
            <polygon points="0,-3 2.5,-3 0,1.5" fill="#475569" />
            <circle cx="0" cy="-56" r="22" fill="#fcb913" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.22))" />
            <path d="M -15.5 -40.5 A 22 22 0 0 0 15.5 -71.5 A 22 22 0 0 1 -15.5 -40.5 Z" fill="#000" opacity="0.12" />
            <circle cx="-7" cy="-63" r="6.5" fill="#FFF" opacity="0.65" />
          </g>
          
          {/* Stop 2 Pin (Red) */}
          <g id="marker-2" className="origin-center transition-all duration-300 cursor-pointer pointer-events-auto" onClick={() => handleStopClick(2)} transform="translate(500, 500)">
            <rect x="-1.5" y="-56" width="3" height="56" fill="#94a3b8" />
            <rect x="0" y="-56" width="1.5" height="56" fill="#475569" />
            <polygon points="-2.5,-3 2.5,-3 0,1.5" fill="#94a3b8" />
            <polygon points="0,-3 2.5,-3 0,1.5" fill="#475569" />
            <circle cx="0" cy="-56" r="22" fill="#e94e4e" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.22))" />
            <path d="M -15.5 -40.5 A 22 22 0 0 0 15.5 -71.5 A 22 22 0 0 1 -15.5 -40.5 Z" fill="#000" opacity="0.12" />
            <circle cx="-7" cy="-63" r="6.5" fill="#FFF" opacity="0.65" />
          </g>
          
          {/* Stop 3 Pin (Purple) */}
          <g id="marker-3" className="origin-center transition-all duration-300 cursor-pointer pointer-events-auto" onClick={() => handleStopClick(3)} transform="translate(1100, 300)">
            <rect x="-1.5" y="-56" width="3" height="56" fill="#94a3b8" />
            <rect x="0" y="-56" width="1.5" height="56" fill="#475569" />
            <polygon points="-2.5,-3 2.5,-3 0,1.5" fill="#94a3b8" />
            <polygon points="0,-3 2.5,-3 0,1.5" fill="#475569" />
            <circle cx="0" cy="-56" r="22" fill="#9c27b0" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.22))" />
            <path d="M -15.5 -40.5 A 22 22 0 0 0 15.5 -71.5 A 22 22 0 0 1 -15.5 -40.5 Z" fill="#000" opacity="0.12" />
            <circle cx="-7" cy="-63" r="6.5" fill="#FFF" opacity="0.65" />
          </g>

          {/* End Pin (Pink) */}
          <g transform="translate(800, 120)">
            <rect x="-1.5" y="-56" width="3" height="56" fill="#94a3b8" />
            <rect x="0" y="-56" width="1.5" height="56" fill="#475569" />
            <polygon points="-2.5,-3 2.5,-3 0,1.5" fill="#94a3b8" />
            <polygon points="0,-3 2.5,-3 0,1.5" fill="#475569" />
            <circle cx="0" cy="-56" r="22" fill="#e91e63" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.22))" />
            <path d="M -15.5 -40.5 A 22 22 0 0 0 15.5 -71.5 A 22 22 0 0 1 -15.5 -40.5 Z" fill="#000" opacity="0.12" />
            <circle cx="-7" cy="-63" r="6.5" fill="#FFF" opacity="0.65" />
          </g>
        </svg>

        {/* Lucide Icons Centered Inside Pushpins' Spherical Heads (cx, cy - 56) */}
        {/* Icon 1: Understand (Eye) */}
        <div 
          onClick={() => handleStopClick(1)}
          style={{ left: "1100px", top: "694px" }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer pointer-events-auto transition-all duration-500 hover:scale-125 ${activeStop === 1 ? 'scale-110 text-[#fcb913]' : 'text-zinc-600 hover:text-[#fcb913]'}`}
        >
          <Eye size={20} strokeWidth={2.5} />
        </div>
        {/* Icon 2: Design (Compass) */}
        <div 
          onClick={() => handleStopClick(2)}
          style={{ left: "500px", top: "444px" }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer pointer-events-auto transition-all duration-500 hover:scale-125 ${activeStop === 2 ? 'scale-110 text-[#e94e4e]' : 'text-zinc-600 hover:text-[#e94e4e]'}`}
        >
          <Compass size={20} strokeWidth={2.5} />
        </div>
        {/* Icon 3: Build (Terminal) */}
        <div 
          onClick={() => handleStopClick(3)}
          style={{ left: "1100px", top: "244px" }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer pointer-events-auto transition-all duration-500 hover:scale-125 ${activeStop === 3 ? 'scale-110 text-[#9c27b0]' : 'text-zinc-600 hover:text-[#9c27b0]'}`}
        >
          <Terminal size={20} strokeWidth={2.5} />
        </div>

        {/* ----------------- TITLE & NAV HEADER (Inside scaled container to prevent overlaps) ----------------- */}
        <div className="absolute top-[50px] left-[80px] z-30 pointer-events-none max-w-xl font-sans">
          <span className="text-white/80 font-mono tracking-[0.3em] text-[10px] uppercase font-bold block mb-1">
            // THE PRODUCT PIPELINE
          </span>
          <h1 className="text-white text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-none">
            A Scenic Journey from Idea to Ingress
          </h1>
          <p className="text-white/70 text-xs font-light mt-1.5 tracking-wide leading-relaxed">
            Click any board to drive the car and enter the interactive case study overlay.
          </p>
        </div>

        {/* ----------------- HIGH FIDELITY WOODEN BOARD SIGNPOST CARDS WITH PINNED PARCHMENT ----------------- */}
        


        {/* 01 // UNDERSTAND Wooden Signboard Card */}
        <div 
          onClick={() => handleStopClick(1)}
          style={{ left: "1200px", top: "480px" }}
          className={`absolute z-20 w-[310px] h-[230px] rounded-xl shadow-2xl flex-shrink-0 cursor-pointer hover:scale-102 transition-transform ${activeStop === 1 ? 'ring-4 ring-[#fcb913]/30' : ''}`}
        >
          {/* Wood Planks Backing */}
          <div 
            className="absolute inset-0 rounded-xl border-[4px] border-[#5c3d24] overflow-hidden"
            style={{ background: "repeating-linear-gradient(to bottom, #d29d62 0px, #c68a4c 44px, #b4783a 45px, #d29d62 46px)" }}
          />
          {/* Screws */}
          <svg width="12" height="12" viewBox="0 0 14 14" className="absolute top-2 left-1/2 -translate-x-1/2 z-20 opacity-70">
            <circle cx="7" cy="7" r="6" fill="#a1a1aa" stroke="#52525b" strokeWidth="1" />
            <line x1="3" y1="5" x2="11" y2="9" stroke="#52525b" strokeWidth="1.5" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 14 14" className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 opacity-70">
            <circle cx="7" cy="7" r="6" fill="#a1a1aa" stroke="#52525b" strokeWidth="1" />
            <line x1="3" y1="9" x2="11" y2="5" stroke="#52525b" strokeWidth="1.5" />
          </svg>
          {/* Vertical pole */}
          <div className="absolute left-[40px] top-[100%] w-3 h-32 bg-[#7a5230] border-x-[2px] border-b-[2px] border-[#5c3d24] rounded-b"></div>

          {/* Pinned Parchment Paper */}
          <div className="absolute left-[14px] top-[18px] right-[14px] bottom-[18px] bg-[#f5eedc] rounded-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[0.4deg] p-4 text-left font-sans text-[#3e2723] overflow-hidden">
            {/* Corner Bent Nails */}
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute top-1.5 left-1.5 pointer-events-none z-20">
              <ellipse cx="12" cy="6" rx="4.5" ry="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              <path d="M 12 7 Q 10 11, 15 14" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute top-1.5 right-1.5 pointer-events-none z-20">
              <ellipse cx="12" cy="6" rx="4.5" ry="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              <path d="M 12 7 Q 14 11, 9 14" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            <span className="text-[#fcb913] font-mono tracking-widest text-[9px] uppercase font-extrabold block mb-0.5">
              01 // UNDERSTAND
            </span>
            <h2 className="text-[#271207] text-base font-black uppercase tracking-tight leading-none mb-1">
              BUSINESS ANALYST
            </h2>
            <h3 className="text-[#5c3d24] text-[9px] font-bold uppercase tracking-wider mb-2 border-b border-[#5c3d24]/20 pb-0.5 flex justify-between items-center">
              <span>EY Discovery Sprints</span>
              <span className="text-[7px] px-1.5 py-0.5 bg-[#fcb913]/20 text-[#3e2723] rounded font-mono font-bold">ANALYSIS</span>
            </h3>
            
            <div className="space-y-0.5 font-sans text-[10.5px] text-[#3e2723]/95 font-light leading-relaxed mb-3">
              <p>• <strong>Insurance lifecycles</strong> operational flow.</p>
              <p>• <strong>Discovery maps</strong> with underwriters.</p>
            </div>

            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-black tracking-widest text-[#fcb913]">
              Click to Enter →
            </span>
          </div>
        </div>

        {/* 02 // DESIGN Wooden Signboard Card */}
        <div 
          onClick={() => handleStopClick(2)}
          style={{ left: "120px", top: "250px" }}
          className={`absolute z-20 w-[310px] h-[230px] rounded-xl shadow-2xl flex-shrink-0 cursor-pointer hover:scale-102 transition-transform ${activeStop === 2 ? 'ring-4 ring-[#e94e4e]/30' : ''}`}
        >
          {/* Wood Planks Backing */}
          <div 
            className="absolute inset-0 rounded-xl border-[4px] border-[#5c3d24] overflow-hidden"
            style={{ background: "repeating-linear-gradient(to bottom, #d29d62 0px, #c68a4c 44px, #b4783a 45px, #d29d62 46px)" }}
          />
          {/* Screws */}
          <svg width="12" height="12" viewBox="0 0 14 14" className="absolute top-2 left-1/2 -translate-x-1/2 z-20 opacity-70">
            <circle cx="7" cy="7" r="6" fill="#a1a1aa" stroke="#52525b" strokeWidth="1" />
            <line x1="3" y1="5" x2="11" y2="9" stroke="#52525b" strokeWidth="1.5" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 14 14" className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 opacity-70">
            <circle cx="7" cy="7" r="6" fill="#a1a1aa" stroke="#52525b" strokeWidth="1" />
            <line x1="3" y1="9" x2="11" y2="5" stroke="#52525b" strokeWidth="1.5" />
          </svg>
          {/* Vertical pole */}
          <div className="absolute left-[40px] top-[100%] w-3 h-32 bg-[#7a5230] border-x-[2px] border-b-[2px] border-[#5c3d24] rounded-b"></div>

          {/* Pinned Parchment Paper */}
          <div className="absolute left-[14px] top-[18px] right-[14px] bottom-[18px] bg-[#f5eedc] rounded-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[-0.4deg] p-4 text-left font-sans text-[#3e2723] overflow-hidden">
            {/* Corner Bent Nails */}
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute top-1.5 left-1.5 pointer-events-none z-20">
              <ellipse cx="12" cy="6" rx="4.5" ry="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              <path d="M 12 7 Q 10 11, 15 14" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute top-1.5 right-1.5 pointer-events-none z-20">
              <ellipse cx="12" cy="6" rx="4.5" ry="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              <path d="M 12 7 Q 14 11, 9 14" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            <span className="text-[#e94e4e] font-mono tracking-widest text-[9px] uppercase font-extrabold block mb-0.5">
              02 // DESIGN
            </span>
            <h2 className="text-[#271207] text-base font-black uppercase tracking-tight leading-none mb-1">
              UX ARCHITECT
            </h2>
            <h3 className="text-[#5c3d24] text-[9px] font-bold uppercase tracking-wider mb-2 border-b border-[#5c3d24]/20 pb-0.5 flex justify-between items-center">
              <span>Figma Prototypes</span>
              <span className="text-[7px] px-1.5 py-0.5 bg-[#e94e4e]/20 text-[#3e2723] rounded font-mono font-bold">INTERFACE</span>
            </h3>
            
            <div className="space-y-0.5 font-sans text-[10.5px] text-[#3e2723]/95 font-light leading-relaxed mb-3">
              <p>• <strong>User Research</strong>: wireframe mapping.</p>
              <p>• <strong>High-Fidelity</strong>: Figma interactive validation.</p>
            </div>

            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-black tracking-widest text-[#e94e4e]">
              Click to Enter →
            </span>
          </div>
        </div>

        {/* 03 // BUILD Wooden Signboard Card */}
        <div 
          onClick={() => handleStopClick(3)}
          style={{ left: "1200px", top: "50px" }}
          className={`absolute z-20 w-[310px] h-[230px] rounded-xl shadow-2xl flex-shrink-0 cursor-pointer hover:scale-102 transition-transform ${activeStop === 3 ? 'ring-4 ring-[#9c27b0]/30' : ''}`}
        >
          {/* Wood Planks Backing */}
          <div 
            className="absolute inset-0 rounded-xl border-[4px] border-[#5c3d24] overflow-hidden"
            style={{ background: "repeating-linear-gradient(to bottom, #d29d62 0px, #c68a4c 44px, #b4783a 45px, #d29d62 46px)" }}
          />
          {/* Screws */}
          <svg width="12" height="12" viewBox="0 0 14 14" className="absolute top-2 left-1/2 -translate-x-1/2 z-20 opacity-70">
            <circle cx="7" cy="7" r="6" fill="#a1a1aa" stroke="#52525b" strokeWidth="1" />
            <line x1="3" y1="5" x2="11" y2="9" stroke="#52525b" strokeWidth="1.5" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 14 14" className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 opacity-70">
            <circle cx="7" cy="7" r="6" fill="#a1a1aa" stroke="#52525b" strokeWidth="1" />
            <line x1="3" y1="9" x2="11" y2="5" stroke="#52525b" strokeWidth="1.5" />
          </svg>
          {/* Vertical pole */}
          <div className="absolute left-[40px] top-[100%] w-3 h-32 bg-[#7a5230] border-x-[2px] border-b-[2px] border-[#5c3d24] rounded-b"></div>

          {/* Pinned Parchment Paper */}
          <div className="absolute left-[14px] top-[18px] right-[14px] bottom-[18px] bg-[#f5eedc] rounded-[3px] shadow-[0_4px_8px_rgba(0,0,0,0.15)] rotate-[0.4deg] p-4 text-left font-sans text-[#3e2723] overflow-hidden">
            {/* Corner Bent Nails */}
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute top-1.5 left-1.5 pointer-events-none z-20">
              <ellipse cx="12" cy="6" rx="4.5" ry="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              <path d="M 12 7 Q 10 11, 15 14" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" className="absolute top-1.5 right-1.5 pointer-events-none z-20">
              <ellipse cx="12" cy="6" rx="4.5" ry="2.5" fill="#94a3b8" stroke="#475569" strokeWidth="1" />
              <path d="M 12 7 Q 14 11, 9 14" fill="none" stroke="#475569" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            <span className="text-[#9c27b0] font-mono tracking-widest text-[9px] uppercase font-extrabold block mb-0.5">
              03 // BUILD
            </span>
            <h2 className="text-[#271207] text-base font-black uppercase tracking-tight leading-none mb-1">
              SOFTWARE ENGINEER
            </h2>
            <h3 className="text-[#5c3d24] text-[9px] font-bold uppercase tracking-wider mb-2 border-b border-[#5c3d24]/20 pb-0.5 flex justify-between items-center">
              <span>Go & Next.js Core</span>
              <span className="text-[7px] px-1.5 py-0.5 bg-[#9c27b0]/20 text-[#3e2723] rounded font-mono font-bold">ENGINEERING</span>
            </h3>
            
            <div className="space-y-0.5 font-sans text-[10.5px] text-[#3e2723]/95 font-light leading-relaxed mb-3">
              <p>• <strong>Full-Stack</strong>: Next.js responsive app architectures.</p>
              <p>• <strong>Ingress Cores</strong>: Scalable Go microservices.</p>
            </div>

            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase font-black tracking-widest text-[#9c27b0]">
              Click to Enter →
            </span>
          </div>
        </div>

        {/* 04 // PRODUCT Signboard ONLY (No card details, just signpost milestone) */}
        <div style={{ left: "840px", top: "90px" }} className="absolute pointer-events-none font-sans z-15">
          <svg width="120" height="100" viewBox="0 0 120 100">
            <rect x="57" y="30" width="6" height="70" fill="#7a5230" rx="1.5" />
            <rect x="58.5" y="30" width="1.5" height="70" fill="#9b704c" />
            <rect x="5" y="5" width="110" height="32" rx="4" fill="#b89065" stroke="#5c3d24" strokeWidth="2.5" />
            <line x1="15" y1="12" x2="105" y2="12" stroke="#9a7249" strokeWidth="1.5" opacity="0.6" />
            <line x1="25" y1="20" x2="110" y2="20" stroke="#9a7249" strokeWidth="1.5" opacity="0.6" />
            <text x="60" y="24" textAnchor="middle" fill="#3e2723" fontSize="8.5" fontWeight="extrabold" fontFamily="monospace" letterSpacing="0.5">
              PRODUCT
            </text>
          </svg>
        </div>

        {/* Wooden Arrow Back Board Signpost */}
        <div 
          onClick={() => {
            if (onBack) {
              onBack();
            } else {
              router.push('/');
            }
          }}
          style={{ left: "1350px", top: "820px" }}
          className="absolute z-20 w-[180px] h-[100px] cursor-pointer pointer-events-auto hover:scale-105 transition-transform flex flex-col items-center justify-start font-sans"
        >
          {/* Wooden Pole */}
          <div className="absolute left-[87px] top-[40px] w-2.5 h-16 bg-[#7a5230] border-x-[2px] border-b-[2px] border-[#5c3d24] rounded-b"></div>
          
          {/* Arrow Board SVG pointing left */}
          <svg width="180" height="46" viewBox="0 0 180 46" className="filter drop-shadow-xl z-20">
            <path 
              d="M 25 3 L 172 3 C 175 3, 177 5, 177 8 L 177 38 C 177 41, 175 43, 172 43 L 25 43 L 25 45 L 6 23 L 25 1 Z" 
              fill="#b89065" 
              stroke="#5c3d24" 
              strokeWidth="2.5" 
              strokeLinejoin="round"
            />
            <line x1="28" y1="12" x2="168" y2="12" stroke="#9a7249" strokeWidth="1.5" opacity="0.6" />
            <line x1="38" y1="23" x2="158" y2="23" stroke="#9a7249" strokeWidth="1.5" opacity="0.6" />
            <line x1="28" y1="34" x2="168" y2="34" stroke="#9a7249" strokeWidth="1.5" opacity="0.6" />
            
            <text x="100" y="27" textAnchor="middle" fill="#3e2723" fontSize="9" fontWeight="black" fontFamily="monospace" letterSpacing="0.5">
              BACK TO HERO
            </text>
          </svg>
          
          {/* Grass base */}
          <div className="absolute left-[78px] top-[80px] w-8 h-4 pointer-events-none z-25 flex gap-0.5 opacity-90">
            <div className="w-[3px] h-3 bg-[#4b8026] rounded-full rotate-[-20deg] origin-bottom"></div>
            <div className="w-[3px] h-4 bg-[#568f2d] rounded-full rotate-[-5deg] origin-bottom"></div>
            <div className="w-[3px] h-3 bg-[#4b8026] rounded-full rotate-[15deg] origin-bottom"></div>
          </div>
        </div>

      </div>

      {/* Immersive Full-Screen Station Overlays */}
      <AnimatePresence>
        {activeStationOverlay !== null && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#030303]"
          >
            {activeStationOverlay === 1 && (
              <BusinessAnalystPage onBack={handleBackFromStation} />
            )}
            {activeStationOverlay === 2 && (
              <UXDesignPage onBack={handleBackFromStation} />
            )}
            {activeStationOverlay === 3 && (
              <DeveloperPage onBack={handleBackFromStation} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
