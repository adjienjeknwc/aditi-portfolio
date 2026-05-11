"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
}

const ProjectCard = ({ title, description, tags = [] }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="relative group p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-2xl transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 uppercase tracking-widest font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-8 items-center">
          <a href="#" target="_blank" className="hover:scale-125 transition-transform duration-300">
            <svg className="w-6 h-6 text-gray-500 hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <ExternalLink className="w-6 h-6 text-gray-500 hover:text-white transition-all cursor-pointer hover:scale-125" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;