"use client";
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-[70vh] flex flex-col items-center justify-center text-center">
      {/* Cinematic Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-4">
          ADITI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">VERMA</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light tracking-[0.2em] uppercase">
          Software Engineer <span className="mx-4 text-blue-500/30">|</span> UX/UI Designer
        </p>
      </motion.div>
    </section>
  );
};