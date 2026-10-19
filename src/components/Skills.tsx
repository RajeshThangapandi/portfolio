"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Layout,
  Server,
  Sparkles,
  Database,
  CheckCircle2,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  languages: Terminal,
  frontend: Layout,
  backend: Server,
  ai: Sparkles,
  cloud: Database,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Subtle Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 architectural-dots opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              <span>02 // TECHNICAL CAPABILITIES & STACK</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              Modern Full-Stack &{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                AI Engineering Stack.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Organized by architectural layer—spanning type-safe frontend
              applications, distributed Node.js &amp; Python backend APIs,
              OpenAI RAG pipelines, and cloud infrastructure.
            </p>
          </div>

          {/* Domain Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter skills by engineering domain"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.025] border border-white/[0.08] w-fit"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all ${
                selectedCategory === "all"
                  ? "bg-sky-400 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all ${
                  selectedCategory === cat.id
                    ? "bg-sky-400 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Matrix */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => {
              const Icon = CATEGORY_ICONS[category.id] || Terminal;
              const isWide =
                selectedCategory === "all" &&
                idx === filteredCategories.length - 1 &&
                filteredCategories.length % 2 !== 0;

              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  className={`glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 ${
                    isWide ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] pb-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400 block">
                            {category.code}
                          </span>
                          <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/[0.06]">
                        {category.skills.length} Technologies
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400">
                      {category.subtitle}
                    </p>

                    {/* Clean Technology Cards — No Fake Progress Bars */}
                    <div
                      className={`grid gap-3 pt-1 ${
                        isWide
                          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                          : "grid-cols-1 sm:grid-cols-2"
                      }`}
                    >
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group relative p-3.5 rounded-xl bg-obsidian-950/60 hover:bg-sky-500/[0.07] border border-white/[0.07] hover:border-sky-400/35 transition-all flex items-start justify-between gap-2"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-semibold text-sm text-white group-hover:text-sky-200 transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="block font-mono text-[11px] text-slate-400">
                              {skill.tag}
                            </span>
                          </div>
                          {skill.featured && (
                            <CheckCircle2
                              className="w-4 h-4 text-sky-400/80 shrink-0 mt-0.5"
                              aria-label="Core production technology"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
