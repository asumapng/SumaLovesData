"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const glideUp: any = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-[1000px] mx-auto relative z-10 w-full mb-32">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={glideUp}
        className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden group hover:border-teal-400/40 transition-colors duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        <p className="text-zinc-500 text-xl font-medium mb-6 uppercase tracking-widest text-teal-400/80">Connect • Collab • Hire?</p>
        <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tight text-white group-hover:scale-105 transition-transform duration-700">Let’s connect</h2>
        
        <div className="space-y-4 mb-20 font-medium z-10 relative">
          <a href="mailto:suma.nadakkannu@gmail.com" className="block text-xl md:text-3xl text-zinc-300 hover:text-teal-400 transition-colors cursor-none pointer-events-auto">
            suma.nadakkannu@gmail.com
          </a>
        </div>
        
        <p className="text-zinc-600 font-medium text-sm md:text-base z-10 relative">
          © Copyright {new Date().getFullYear()}. All rights Reserved.
        </p>
        
        <div className="mt-12 bg-zinc-950 border border-zinc-800 py-3 px-6 rounded-full inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors z-10 relative shadow-lg cursor-default">
          Data built with <span className="text-teal-400 text-lg mx-1 animate-pulse">⚡</span> explicitly for impact
        </div>
      </motion.div>
    </section>
  );
}
