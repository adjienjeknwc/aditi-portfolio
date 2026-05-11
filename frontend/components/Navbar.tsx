"use client";
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] px-8 py-6 flex justify-between items-center">
      {/* Left Side: Back Home */}
      <Link href="/" className="px-5 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
        ← Home
      </Link>

      {/* Right Side: Identity Links */}
      <div className="flex items-center gap-4">
        {/* Designer Portfolio Link */}
        <Link 
          href="/ux-design" 
          className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors hidden md:block"
        >
          UX Portfolio
        </Link>

        {/* Vertical Divider */}
        <div className="h-4 w-[1px] bg-gray-200 hidden md:block"></div>

        {/* Behance Profile Button (Thrilling Style) */}
        <a 
          href="https://www.behance.net/aditiverma" // Replace with your actual profile link
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-2 bg-purple-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
        >
          <span className="relative z-10">Behance Profile ↗</span>
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
}