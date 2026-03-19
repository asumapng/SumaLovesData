"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Diamond, Search, Layers, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

export default function Process() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const processes = [
    {
      title: "First principles thinking",
      icon: <Diamond className="text-teal-400" size={24} />,
      points: [
        "Breaking problems into their most basic form",
        "Starting with the 'why' – down to the root cause",
        "Building models using only fundamental truths"
      ]
    },
    {
      title: "Exploratory Data Analysis",
      icon: <Search className="text-teal-400" size={24} />,
      points: [
        "Uncovering hidden patterns in complex datasets",
        "Identifying critical anomalies and outliers",
        "Validating assumptions rigorously before building models"
      ]
    },
    {
      title: "Feature Engineering",
      icon: <Layers className="text-teal-400" size={24} />,
      points: [
        "Transforming raw data into actionable metrics",
        "Constructing behavioral risk indicators for fraud systems",
        "Optimizing inputs for predictive modeling"
      ]
    },
    {
      title: "Data Storytelling",
      icon: <BookOpen className="text-teal-400" size={24} />,
      points: [
        "Connecting abstract metrics to core business impact",
        "Visualizing complex insights seamlessly via automated dashboards",
        "Guiding stakeholders to confident, data-backed decisions"
      ]
    }
  ];

  const glideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto relative z-10 w-full mb-10">
      <div className="flex justify-center mb-8">
        <span className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-5 py-2 rounded-full text-sm font-medium shadow-md">
          Analytics principles
        </span>
      </div>
      
      <motion.h2 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={glideUp}
        className="text-5xl md:text-7xl font-bold text-center mb-24 tracking-tight"
      >
        My multi-disciplinary <br /> analytical process
      </motion.h2>

      <div className="border border-zinc-800/80 rounded-3xl p-3 bg-zinc-900/40 backdrop-blur-md shadow-xl">
        {processes.map((proc, idx) => (
          <motion.div 
            key={idx}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={glideUp} transition={{ delay: idx * 0.1 }}
            className={`border-zinc-800/80 p-6 md:p-8 cursor-pointer transition-colors ${idx !== processes.length - 1 ? 'border-b' : ''} hover:bg-zinc-800/50 hover:border-teal-400/20 rounded-2xl group`}
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:scale-110 group-hover:border-teal-400/50 transition-transform">
                  {proc.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-zinc-100 group-hover:text-teal-400 transition-colors">{proc.title}</h3>
              </div>
              <div className="p-2 border border-zinc-800 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                {openIdx === idx ? <ChevronUp className="text-zinc-400 group-hover:text-teal-400" size={20} /> : <ChevronDown className="text-zinc-400 group-hover:text-teal-400" size={20} />}
              </div>
            </div>
            
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <ul className="pl-16 md:pl-20 pt-8 pb-4 space-y-5">
                    {proc.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-4 text-zinc-400 font-medium text-lg leading-snug">
                        <span className="text-teal-500/50 mt-1 flex-shrink-0 font-bold group-hover:text-teal-400 transition-colors">↳</span> 
                        <span className="group-hover:text-zinc-300 transition-colors">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
