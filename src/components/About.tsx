"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Workflow,
  GraduationCap,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import {
  PERSONAL_INFO,
  ABOUT_PILLARS,
  EDUCATION_DATA,
} from "@/data/portfolio";

const PILLAR_ICONS = [Code2, Cpu, Workflow];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              <span>01 // ABOUT & ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              Bridging Full-Stack Product Engineering with{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                Applied AI Systems.
              </span>
            </h2>
          </div>

          <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            Bengaluru · Chennai · India
          </p>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Editorial Narrative + Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-4 pb-5 border-b border-white/[0.07]">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-sky-400/35 shrink-0">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-mono text-xs text-sky-400">
                    Full Stack Software Engineer
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  I am a{" "}
                  <span className="text-white font-medium">
                    Full Stack Software Engineer
                  </span>{" "}
                  with 2+ years of hands-on experience designing, building, and
                  maintaining production web applications, backend APIs,
                  third-party ecosystem integrations, and AI-driven workflows.
                </p>
                <p>
                  Across my work at{" "}
                  <span className="text-white font-medium">KokoFresh</span> and{" "}
                  <span className="text-white font-medium">Reach Skyline</span>,
                  I have owned complete product lifecycles—from crafting fast,
                  SEO-optimized{" "}
                  <span className="text-sky-300 font-mono text-xs">
                    React.js & Next.js
                  </span>{" "}
                  frontends to architecting transactional{" "}
                  <span className="text-sky-300 font-mono text-xs">
                    Node.js, Python & MongoDB
                  </span>{" "}
                  services and integrating{" "}
                  <span className="text-sky-300 font-mono text-xs">
                    OpenAI RAG pipelines
                  </span>
                  .
                </p>
                <p>
                  Whether orchestrating multi-gateway checkout flows, automating
                  WhatsApp &amp; Shiprocket logistics webhooks, or grounding LLM
                  responses in enterprise documents, I focus on writing clean,
                  observable, production-grade code.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 hover:text-sky-300"
                >
                  <span>View Experience Timeline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-white/15">•</span>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white"
                >
                  <span>Download Full CV</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Academic Foundation Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400 block">
                      Academic Credentials · {EDUCATION_DATA.period}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {EDUCATION_DATA.degree}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="pl-13 space-y-2">
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
                  <span className="font-medium text-sky-300">
                    {EDUCATION_DATA.specialization}
                  </span>
                  <span className="font-mono text-slate-400">
                    {EDUCATION_DATA.institution}, {EDUCATION_DATA.location}
                  </span>
                </div>
                <ul className="space-y-1.5 pt-2">
                  {EDUCATION_DATA.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Architectural Pillars */}
          <div className="lg:col-span-7 space-y-5">
            {ABOUT_PILLARS.map((pillar, index) => {
              const IconComponent = PILLAR_ICONS[index % PILLAR_ICONS.length];
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="glass-panel-interactive rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/15 to-indigo-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-sky-400">
                            PILLAR // {pillar.id}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white">
                          {pillar.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
                          {pillar.description}
                        </p>
                        <div className="pt-2 flex flex-wrap gap-2">
                          {pillar.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Production Engineering Standards Strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-transparent border border-sky-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="font-mono text-xs uppercase tracking-wider text-sky-400">
                  Production Standards
                </div>
                <p className="text-sm text-slate-300">
                  Every system is built for{" "}
                  <span className="text-white font-medium">
                    clean API contracts, observability, SEO performance, and
                    resilient error recovery
                  </span>
                  .
                </p>
              </div>
              <a
                href="#projects"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono uppercase tracking-wider text-white transition-colors"
              >
                <span>See Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
