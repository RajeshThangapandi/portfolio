"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { EXPERIENCE_TIMELINE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Left Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 w-[460px] h-[460px] rounded-full bg-sky-500/5 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              <span>03 // PROFESSIONAL EXPERIENCE</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              Proven Track Record in{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                Production Engineering.
              </span>
            </h2>
          </div>

          <div className="font-mono text-xs text-slate-400">
            2+ Years Shipping Full-Stack &amp; AI Systems
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Spine */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[220px] lg:left-[260px] top-4 bottom-4 w-px bg-gradient-to-b from-sky-400/50 via-indigo-500/30 to-transparent"
          />

          <div className="space-y-10 sm:space-y-12">
            {EXPERIENCE_TIMELINE.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
              >
                {/* Left Column: Period, Company & Location Metadata */}
                <div className="md:col-span-4 lg:col-span-3 md:pr-8 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-sky-300">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="pt-1">
                    <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-sky-400 md:hidden" />
                      <span>{exp.company}</span>
                    </h3>
                    <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </p>
                  </div>

                  {exp.current && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Most Recent Role</span>
                    </div>
                  )}
                </div>

                {/* Timeline Node Marker (Desktop) */}
                <div
                  aria-hidden="true"
                  className="hidden md:flex absolute left-[220px] lg:left-[260px] -translate-x-1/2 top-3 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] items-center justify-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                </div>

                {/* Right Column: Editorial Experience Card */}
                <div className="md:col-span-8 lg:col-span-9">
                  <div className="glass-panel-interactive rounded-2xl p-6 sm:p-8 space-y-6">
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/[0.07]">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-sky-400 block">
                          {exp.type}
                        </span>
                        <h4 className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-sky-400 hidden sm:inline" />
                          <span>{exp.role}</span>
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] w-fit">
                        {exp.company} · {exp.location.split(",")[0]}
                      </span>
                    </div>

                    {/* Executive Summary */}
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                      {exp.summary}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {exp.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06]"
                        >
                          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                            {m.label}
                          </span>
                          <span className="font-display font-semibold text-xs sm:text-sm text-sky-300 mt-0.5 block">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Detailed Responsibilities */}
                    <ul className="space-y-3">
                      {exp.highlights.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-sm text-slate-300/95 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Tags */}
                    <div className="pt-4 border-t border-white/[0.07] flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
