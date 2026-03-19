"use client";
import { motion } from "framer-motion";
import { FolderHeart, FolderSearch, FolderKanban, FolderLock } from "lucide-react";

export default function Domains() {
  const domains = [
    { title: "Fraud Detection", subtitle: "Rules & Anomalies", icon: <FolderLock size={80} strokeWidth={1} />, color: "bg-red-500" },
    { title: "Growth & UI", subtitle: "Retention Analytics", icon: <FolderHeart size={80} strokeWidth={1} />, color: "bg-pink-500" },
    { title: "Product Analytics", subtitle: "Checkout & A/B", icon: <FolderKanban size={80} strokeWidth={1} />, color: "bg-blue-500" },
    { title: "Business Intel", subtitle: "Reporting Automation", icon: <FolderSearch size={80} strokeWidth={1} />, color: "bg-emerald-500" }
  ];

  const glideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center relative z-10 w-full mb-10">
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={glideUp}
        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
      >
        I'm a 360° Data Analyst
      </motion.h2>
      <motion.p 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={glideUp}
        className="text-xl text-zinc-400 mb-20 font-medium max-w-2xl mx-auto"
      >
        Here's my analytical work spanning across different critical business domains. Hover to get a peek. Detailed previews coming soon.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {domains.map((domain, idx) => (
          <motion.div 
            key={idx}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={glideUp} transition={{ delay: idx * 0.1 }}
            className="group bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-[3rem] p-16 flex flex-col items-center justify-center shadow-xl hover:border-teal-400/50 transition-all cursor-none overflow-hidden relative min-h-[400px]"
          >
            {/* Folder Icon Graphic with hover lift */}
            <div className="relative mb-10 transform group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 ease-out z-10 text-white/50 group-hover:text-teal-400 pointer-events-none">
              {domain.icon}
            </div>
            
            <h3 className="text-3xl font-bold text-white z-10 transition-colors mb-2">{domain.title}</h3>
            <p className="text-zinc-500 font-medium z-10 group-hover:text-teal-300 transition-colors">{domain.subtitle}</p>

            {/* Subtle glow effect behind the folder on hover */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full ${domain.color} blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`} />
            
            {/* Outline highlight effect */}
            <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/0 group-hover:ring-white/10 transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
