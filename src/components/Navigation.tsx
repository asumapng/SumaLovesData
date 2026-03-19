"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const sections = ["about", "work", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-10 left-1/2 z-50 pointer-events-auto"
      >
        <div className="bg-zinc-800/90 backdrop-blur-xl border border-zinc-700/50 rounded-full p-2 flex items-center gap-2 shadow-2xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                active === link.name.toLowerCase() 
                  ? "bg-white text-black shadow-sm" 
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
