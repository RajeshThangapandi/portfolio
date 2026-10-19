import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientSpotlight from "@/components/AmbientSpotlight";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-obsidian-950 text-slate-100 selection:bg-sky-500/25 selection:text-white">
      <AmbientSpotlight />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
