"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...NAV_ITEMS.map((i) => i.id)];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0.05 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 rounded-2xl px-4 sm:px-6 ${
              scrolled
                ? "py-2.5 bg-obsidian-900/85 backdrop-blur-xl border border-white/[0.09] shadow-[0_16px_40px_-15px_rgba(0,0,0,0.85)]"
                : "py-2 bg-transparent border border-transparent"
            }`}
          >
            {/* Minimal Personal Wordmark */}
            <a
              href="#hero"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
              aria-label="Rajesh T Home"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500/20 via-indigo-500/15 to-obsidian-900 border border-sky-400/35 group-hover:border-sky-400/70 transition-colors">
                <span className="font-display font-bold text-sm tracking-tight text-white">
                  {PERSONAL_INFO.monogram}
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-obsidian-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-slate-400 hidden sm:inline">
                  Full-Stack · AI Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.07]"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-400/30"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Resume</span>
              </a>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 transition-all shadow-[0_0_25px_-5px_rgba(56,189,248,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.09] text-slate-200 hover:text-white hover:border-sky-400/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-label={
                mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-sky-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-obsidian-950/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <nav
                aria-label="Mobile Navigation"
                className="flex flex-col space-y-1"
              >
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-display font-medium border transition-all ${
                        isActive
                          ? "bg-sky-500/10 border-sky-400/35 text-white"
                          : "border-transparent text-slate-300 hover:bg-white/[0.03] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-sky-400/80">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/[0.08]">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.05] border border-white/[0.1] hover:border-sky-400/40"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Resume PDF</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-indigo-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Let&apos;s Connect</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <span className="font-mono">{PERSONAL_INFO.location}</span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.email}
                    aria-label="Email"
                    className="p-2 rounded-lg bg-white/[0.04] text-slate-300 hover:text-white"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
