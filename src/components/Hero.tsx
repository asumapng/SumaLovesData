"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Hero() {
  const tags = [
    "Fraud detection obsessive", 
    "SQL query hoarder (2000+)", 
    "Feature store architect", 
    "NLP on messy survey data", 
    "A/B testing evangelist", 
    "Reward strategy redesigner", 
    "Revenue leakage hunter", 
    "Pixel game developer, apparently"
  ];

  const glideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 max-w-5xl mx-auto flex items-center justify-center relative z-10 w-full mt-10">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={glideUp}
        className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative w-full flex flex-col items-center hover:border-teal-400/30 transition-colors duration-500"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-tr from-teal-400 to-teal-600 mb-8 p-1 shadow-2xl hover:scale-105 transition-transform duration-500 relative">
            <img 
              src="/profile.jpg" 
              alt="Suma Nadakkannu" 
              className="w-full h-full object-cover rounded-full border-[8px] border-zinc-900 bg-zinc-800"
            />
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Suma Nadakkannu</h2>
          <div className="flex flex-col md:flex-row items-center gap-2 mt-2 text-zinc-400 font-medium">
             <span>Data Analyst → Data Scientist</span> 
             <span className="hidden md:inline">•</span> 
             <span className="flex items-center gap-1">
               <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" /> Available for Roles
             </span>
          </div>
          
          <div className="flex gap-3 mt-6">
            <a href="https://linkedin.com/in/suma-analyst" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-teal-400 hover:text-black transition-colors text-white cursor-none pointer-events-auto shadow-md hover:scale-110">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/asumapng" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-teal-400 hover:text-black transition-colors text-white cursor-none pointer-events-auto shadow-md hover:scale-110">
              <Github size={18} />
            </a>
            <a href="mailto:suma.nadakkannu@gmail.com" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-teal-400 hover:text-black transition-colors text-white cursor-none pointer-events-auto shadow-md hover:scale-110">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-tight text-white max-w-4xl">
          Turning messy data into decisions that actually move numbers.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed max-w-3xl font-medium">
          I build end-to-end data systems — from fraud detection pipelines to forecasting models — across fintech, e-commerce, and loyalty domains. I work at the intersection of analytics, ML, and business strategy.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl">
          {tags.map((tag, idx) => (
             <span key={idx} className="bg-zinc-800/80 text-zinc-300 border border-zinc-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-400 hover:text-black hover:border-teal-400 transition-colors cursor-none pointer-events-auto shadow-sm">
               {tag}
             </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a href="#work" className="px-8 py-4 bg-teal-400 hover:bg-teal-300 text-black rounded-full font-bold transition-transform hover:scale-105 flex items-center justify-center gap-2 cursor-none pointer-events-auto shadow-xl shadow-teal-900/20">
            See my work <span className="text-xl leading-none font-black">↗</span>
          </a>
          <a href="#contact" className="px-10 py-4 bg-zinc-800 hover:bg-zinc-700 hover:text-teal-400 text-white rounded-full font-bold transition-transform hover:scale-105 flex items-center justify-center cursor-none pointer-events-auto shadow-lg">
            Hire me
          </a>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 text-zinc-500 text-sm font-medium w-full px-6 opacity-70">
          <MapPin size={16} /> Bengaluru, KA, IND
        </div>
      </motion.div>
    </section>
  );
}
