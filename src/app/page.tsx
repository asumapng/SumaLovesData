import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Domains from "@/components/Domains";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Process />
      <Domains />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Navigation />
    </main>
  );
}
