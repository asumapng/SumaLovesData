"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Languages & Querying", items: ["Python", "SQL", "PySpark"] },
  { category: "Platforms & Data Infra", items: ["Databricks", "ELT Pipelines", "Materialized Views", "Query Optimization"] },
  { category: "Visualization & BI", items: ["Tableau", "Power BI", "Metabase", "Excel", "Google Sheets"] },
  { category: "Analytics Methods", items: ["A/B Testing", "Funnel & Cohort Analysis", "NLP", "Anomaly Detection", "Fraud Modeling", "RCA", "EDA", "Feature Engineering"] },
];

export default function Skills() {
  const glideUp: any = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto relative z-10 w-full mb-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={glideUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Toolkit & Methods</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={glideUp} transition={{ delay: idx * 0.1 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 hover:border-teal-400/40 transition-colors shadow-xl group hover:bg-zinc-800/30"
          >
            <h3 className="text-2xl font-bold mb-6 text-teal-500 group-hover:text-teal-400 transition-colors">{skill.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full bg-zinc-950 text-sm font-medium text-zinc-300 border border-zinc-700/50 shadow-sm group-hover:border-teal-500/50 transition-colors cursor-none pointer-events-auto">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
