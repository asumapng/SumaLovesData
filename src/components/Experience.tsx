"use client";
import { motion } from "framer-motion";

const exp = [
  {
    role: "Data Analyst II",
    company: "Poptech Growth",
    date: "Feb 2024 – Present",
    highlights: [
      "Built a behavioral UPI fraud detection system using transaction velocity, payee diversity, error-code patterns, and amount clustering — reduced fraud-related losses by 95%",
      "Applied NLP on NPS survey data to surface customer pain points; findings directly drove Tier-3 brand delisting and Tier-1 onboarding, plus a weighted SLA model that improved brand processing SLA by 12%",
      "Engineered a customer feature store with 100+ behavioral and transactional features across UPI, e-commerce, credit card, and loyalty datasets — supporting ML pipelines and cutting query costs via optimized data modeling",
      "Built a Contribution Margin forecasting model integrating pricing, coin burn, logistics, and partner costs — reduced financial reporting lag by 1.5 months and enabled proactive unit-economics decisions",
      "Redesigned reward issuance strategy from blanket to revenue-linked allocation — reduced issuance by 84% MoM while maintaining the same redemption cost",
      "Partnered across business, product, backend, and data engineering to audit pipelines, surface data flaws, and flag unreported revenue leakage"
    ]
  },
  {
    role: "Data Analyst I",
    company: "Poptech Growth",
    date: "Jun 2023 – Feb 2024",
    highlights: [
      "Owned full-funnel attribution and cohort analysis for the Razorpay × POP checkout integration — reduced CAC from ₹40 to ₹10",
      "Led credit card funnel analytics: diagnosed drop-offs, resolved data source vs. reporting lags, ran CIBIL-reject maturity scrubs for retargeting",
      "Built a centralized SQL repository of 2000+ reusable queries and 40+ automated dashboards — migrated company to Metabase, cutting infra costs by 30% and enabling self-serve KPI tracking",
      "Ran A/B tests on D2C website floater designs — drove a 20% increase in signup conversion rate"
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Rapido",
    date: "Jun 2023 – Nov 2023",
    highlights: [
      "Optimized SQL pipelines and built dashboards for the Bike Lite experiment",
      "Conducted RCA on RPR, RPH, and retention metrics across Bangalore and Hyderabad — generated insights that improved city-level operational strategy"
    ]
  }
];

export default function Experience() {
  const glideUp: any = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto relative z-10 w-full mb-10 overflow-hidden text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={glideUp} className="mb-24">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">A quick career summary</h2>
        <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto mb-20">
          I've worked across industries — e-commerce, transportation, and fintech.
        </p>

        {/* Horizontal Timeline Graphic */}
        <div className="flex items-center justify-between max-w-3xl mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-zinc-800 -z-10" />
          {["2025", "2024", "2023", "2022"].map((year, i) => (
             <div key={year} className="flex flex-col items-center gap-6 bg-zinc-950 px-4 relative z-10">
                <div className={`w-4 h-4 rounded-full ${i === 0 ? "bg-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.8)]" : "bg-zinc-700"}`} />
                <span className={`font-bold transition-all duration-300 ${i === 0 ? "text-white text-5xl md:text-6xl" : "text-zinc-600 text-3xl md:text-4xl hover:text-zinc-400"}`}>{year}</span>
             </div>
          ))}
        </div>
      </motion.div>

      <div className="space-y-0 text-left">
        {exp.map((item, idx) => (
          <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={glideUp} transition={{ delay: idx * 0.1 }} className="flex flex-col py-12 border-t border-zinc-800/80 group hover:bg-zinc-900/30 transition-colors px-4 md:px-8 rounded-2xl">
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 cursor-default">
                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors w-full md:w-1/3">{item.role}</h3>
                <span className="text-zinc-300 font-medium text-xl w-full md:w-1/3 md:text-center mt-2 md:mt-0">{item.company}</span>
                <span className="text-zinc-500 font-medium text-lg w-full md:w-1/3 md:text-right mt-2 md:mt-0 group-hover:text-zinc-400">{item.date}</span>
             </div>
             
             <ul className="space-y-4 max-w-4xl">
                {item.highlights.map((pt, i) => {
                  const formattedPt = pt.replace(/(\d+%|₹\d+|2000\+|100\+|40\+|1\.5 months)/g, '<span class="text-black font-bold bg-teal-400 px-1.5 py-0.5 rounded shadow-sm">$1</span>');
                  return (
                    <li key={i} className="flex items-start gap-4 text-zinc-400 font-medium text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                      <span className="text-teal-600 mt-1.5 flex-shrink-0 font-black text-sm group-hover:scale-110 transition-transform">•</span> 
                      <span dangerouslySetInnerHTML={{ __html: formattedPt }} />
                    </li>
                  );
                })}
             </ul>
          </motion.div>
        ))}
         <div className="border-t border-zinc-800/80 w-full" />
      </div>
    </section>
  );
}
