"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-obsidian-950 pt-14 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/[0.06] items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-400/35 font-display font-bold text-xs text-sky-300">
                {PERSONAL_INFO.monogram}
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Full Stack Software Engineer specializing in React.js, Next.js,
              Node.js, Python, OpenAI RAG applications, and scalable e-commerce
              workflows.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-sky-400 block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-400">
              <a href="#about" className="hover:text-white transition-colors">
                01. About
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                02. Technical Skills
              </a>
              <a
                href="#experience"
                className="hover:text-white transition-colors"
              >
                03. Experience
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                04. Featured Work
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                05. Contact
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-300 transition-colors inline-flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.phoneHref}
                aria-label="Phone"
                className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] font-mono text-xs text-slate-300 hover:text-white transition-all"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Finishing Detail */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Engineered with
            Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>All Systems Operational · Bengaluru, IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
