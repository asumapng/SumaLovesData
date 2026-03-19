"use client";
import { motion } from "framer-motion";
import { MessageSquare, Database, Gamepad2, Mail, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Talk To Any Doc",
      description: "Conversational AI interface for PDFs using LLMs",
      icon: <MessageSquare size={32} className="text-teal-400" />
    },
    {
      title: "SQL Wizard Chatbot",
      description: "Natural language to optimal SQL assistant",
      icon: <Database size={32} className="text-teal-400" />
    },
    {
      title: "Day in the Life of an Analyst",
      description: "Interactive pixel-art browser game",
      icon: <Gamepad2 size={32} className="text-teal-400" />
    },
    {
      title: "E-Postcard Website",
      description: "Pixel postcard custom emailer app",
      icon: <Mail size={32} className="text-teal-400" />
    }
  ];

  const glideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto relative z-10 w-full mb-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={glideUp} className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Case Studies & Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href="https://github.com/asumapng"
            target="_blank"
            rel="noreferrer"
            className="group outline-none"
          >
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={glideUp} transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-800/80 hover:border-teal-400/50 transition-all duration-300 shadow-xl cursor-none pointer-events-auto hover:-translate-y-2 flex flex-col items-start relative h-full"
            >
              <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-teal-400 transition-colors">
                <ExternalLink size={20} />
              </div>
              
              <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {proj.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-100 transition-colors">{proj.title}</h3>
              <p className="text-zinc-400 font-medium text-lg leading-relaxed">{proj.description}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
