"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const glideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto relative z-10 w-full mb-32 text-center">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={glideUp}
        className="inline-flex flex-col md:flex-row items-center justify-center gap-6 p-10 bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[2.5rem] shadow-xl hover:border-teal-500/30 transition-colors group mx-auto w-full md:w-auto hover:bg-zinc-800/30"
      >
        <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-full text-teal-500 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 shadow-md">
           <GraduationCap size={44} strokeWidth={1.5} />
        </div>
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">B.Sc. Data Science & Analytics</h3>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-zinc-400 font-medium">
             <span className="text-teal-300 font-bold">Mount Carmel College, Bengaluru</span>
             <span className="hidden sm:inline text-zinc-600">•</span>
             <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm text-zinc-300 border border-zinc-700">2023</span>
             <span className="hidden sm:inline text-zinc-600">•</span>
             <span className="text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full font-bold border border-emerald-500/30 shadow-sm">8.7 CGPA</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
