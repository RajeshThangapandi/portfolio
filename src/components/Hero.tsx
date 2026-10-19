"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Check,
  Copy,
  Cpu,
  Database,
  Globe,
  Sparkles,
  Layers,
  Terminal,
  ShieldCheck,
  ChevronDown,
  FileText,
} from "lucide-react";
import { PERSONAL_INFO, HERO_METRICS } from "@/data/portfolio";

const ARCHITECTURE_NODES = [
  {
    id: "client",
    label: "Next.js 15 App Router",
    sub: "React.js · TypeScript · Tailwind",
    status: "SSR / Edge Ready",
    color: "from-sky-400 to-cyan-300",
    badge: "FRONTEND LAYER",
    details:
      "Server-rendered React interfaces with streaming suspense, fluid motion, and 95+ Core Web Vitals.",
  },
  {
    id: "api",
    label: "Node.js & Python Core",
    sub: "Express · REST APIs · JWT Auth",
    status: "99.9% Uptime",
    color: "from-indigo-400 to-violet-400",
    badge: "ORCHESTRATION",
    details:
      "Transactional order workflows, payment gateway HMAC verification, WhatsApp Cloud APIs & Shiprocket webhooks.",
  },
  {
    id: "ai",
    label: "OpenAI & RAG Intelligence",
    sub: "Embeddings · Vector Retrieval · Agents",
    status: "< 420ms Retrieval",
    color: "from-cyan-400 to-emerald-400",
    badge: "APPLIED AI",
    details:
      "Document ingestion, semantic chunking, top-k retrieval grounding, and automated business workflow triage.",
  },
  {
    id: "data",
    label: "MongoDB · PostgreSQL · AWS",
    sub: "Redis Cache · Docker · CI/CD",
    status: "Cloud Deployed",
    color: "from-violet-400 to-sky-400",
    badge: "DATA & INFRA",
    details:
      "Indexed NoSQL & relational schemas, atomic inventory locks, Redis queues, and containerized AWS deployments.",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"profile" | "architecture">(
    "profile"
  );
  const [selectedNode, setSelectedNode] = useState(ARCHITECTURE_NODES[0]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = PERSONAL_INFO.socials.email;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-32 sm:pb-16 overflow-hidden"
    >
      {/* Ambient Background Lighting & Architectural Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute inset-0 architectural-grid opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_25%,#000_55%,transparent_100%)]" />
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-violet-500/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[380px] h-[300px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.09] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-slate-300">
                {PERSONAL_INFO.status}
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="hidden sm:inline font-mono text-[11px] text-sky-400">
                {PERSONAL_INFO.location}
              </span>
            </motion.div>

            {/* Expressive Headline */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-sky-400"
              >
                {PERSONAL_INFO.name} — {PERSONAL_INFO.title}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.14 }}
                className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl xl:text-[4.15rem] leading-[1.06] text-white"
              >
                <span className="block">{PERSONAL_INFO.headlinePrimary}</span>
                <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  {PERSONAL_INFO.headlineAccent}
                </span>
                <span className="block text-slate-200">
                  {PERSONAL_INFO.headlineSecondary}
                </span>
              </motion.h1>
            </div>

            {/* Supporting Bio */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-base sm:text-lg text-slate-300/95 leading-relaxed max-w-2xl font-normal"
            >
              I build production web platforms,{" "}
              <span className="text-white font-medium">
                AI-powered RAG assistants
              </span>
              , and{" "}
              <span className="text-white font-medium">
                end-to-end e-commerce ecosystems
              </span>{" "}
              using{" "}
              <span className="font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-white/[0.05] text-sky-300 border border-white/[0.08]">
                React.js
              </span>{" "}
              <span className="font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-white/[0.05] text-sky-300 border border-white/[0.08]">
                Next.js
              </span>{" "}
              <span className="font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-white/[0.05] text-sky-300 border border-white/[0.08]">
                Node.js
              </span>{" "}
              <span className="font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-white/[0.05] text-sky-300 border border-white/[0.08]">
                Python
              </span>{" "}
              and{" "}
              <span className="font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-white/[0.05] text-sky-300 border border-white/[0.08]">
                OpenAI APIs
              </span>
              —engineered for speed, reliability, and measurable business impact.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-semibold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 transition-all shadow-[0_0_32px_-6px_rgba(56,189,248,0.55)] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-display font-medium text-sm sm:text-base text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-sky-400/40 transition-all active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-transparent hover:bg-white/[0.04] border border-white/[0.08] transition-colors"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Resume PDF</span>
              </a>
            </motion.div>

            {/* Social Links & Direct Copy Email Bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="pt-2 flex flex-wrap items-center gap-3 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-sky-400/35 text-slate-300 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4 text-sky-400" />
                  <span className="font-mono text-xs">GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-sky-400/35 text-slate-300 hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span className="font-mono text-xs">LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.phoneHref}
                  aria-label="Call Rajesh T"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-sky-400/35 text-slate-300 hover:text-white transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono text-xs hidden sm:inline">
                    {PERSONAL_INFO.phone}
                  </span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-sky-400/35 text-slate-300 hover:text-white transition-all font-mono text-xs"
                title="Copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="truncate max-w-[200px] sm:max-w-none">
                  {PERSONAL_INFO.email}
                </span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Identity & System Architecture Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl glass-panel p-1.5 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)]">
              {/* Top Console Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.07] bg-obsidian-950/60 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    rajesh.sys // v2.6
                  </span>
                </div>

                {/* Mode Switcher */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded-lg border border-white/[0.07]">
                  <button
                    type="button"
                    onClick={() => setActiveTab("profile")}
                    className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                      activeTab === "profile"
                        ? "bg-sky-400/20 text-sky-300 border border-sky-400/35"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Identity
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                      activeTab === "architecture"
                        ? "bg-sky-400/20 text-sky-300 border border-sky-400/35"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Live Stack
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-6 bg-obsidian-950/40 rounded-b-xl">
                {activeTab === "profile" ? (
                  <div className="space-y-5">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                      {/* Portrait Container with Architectural Frame */}
                      <div className="relative group shrink-0">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-400/40 via-indigo-500/30 to-violet-500/40 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/15 bg-obsidian-900">
                          <Image
                            src={PERSONAL_INFO.profileImage}
                            alt={`${PERSONAL_INFO.name} — Full Stack Software Engineer`}
                            fill
                            priority
                            sizes="(max-width: 640px) 112px, 128px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/60 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-obsidian-900 border border-sky-400/40 font-mono text-[10px] text-sky-300 shadow-lg">
                          VERIFIED
                        </div>
                      </div>

                      {/* Identity Metadata */}
                      <div className="text-center sm:text-left space-y-2 flex-1">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-300 font-mono text-[10px] uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" />
                          <span>Product & AI Engineer</span>
                        </div>
                        <h2 className="font-display font-bold text-xl text-white">
                          {PERSONAL_INFO.name}
                        </h2>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Building resilient full-stack commerce systems, REST
                          APIs, and OpenAI RAG workflows at{" "}
                          <span className="text-slate-200 font-medium">
                            KokoFresh
                          </span>{" "}
                          &{" "}
                          <span className="text-slate-200 font-medium">
                            Reach Skyline
                          </span>
                          .
                        </p>
                        <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-1.5">
                          {[
                            "Next.js",
                            "TypeScript",
                            "Node.js",
                            "Python",
                            "OpenAI",
                            "MongoDB",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Architecture Quick-Preview Strip */}
                    <div className="pt-4 border-t border-white/[0.07] space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5 text-sky-400" />
                          <span>Production Domain Matrix</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveTab("architecture")}
                          className="font-mono text-[11px] text-sky-400 hover:text-sky-300 underline underline-offset-4"
                        >
                          Inspect Nodes →
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-sky-400 uppercase">
                              Frontend & SSR
                            </span>
                            <Globe className="w-3.5 h-3.5 text-sky-400" />
                          </div>
                          <p className="font-display font-semibold text-xs text-white">
                            React.js · Next.js · Tailwind
                          </p>
                          <p className="text-[11px] text-slate-400">
                            App Router, SEO & Fast UI
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-indigo-400 uppercase">
                              AI & RAG Engine
                            </span>
                            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                          </div>
                          <p className="font-display font-semibold text-xs text-white">
                            Python · OpenAI · Agents
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Document Retrieval & Prompts
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-emerald-400 uppercase">
                              Backend & APIs
                            </span>
                            <Layers className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <p className="font-display font-semibold text-xs text-white">
                            Node.js · Express · JWT
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Payments, CRM & WhatsApp API
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-violet-400 uppercase">
                              Data & Cloud
                            </span>
                            <Database className="w-3.5 h-3.5 text-violet-400" />
                          </div>
                          <p className="font-display font-semibold text-xs text-white">
                            MongoDB · Postgres · AWS
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Redis Cache & Docker CI/CD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Interactive Live Stack Node Explorer */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                        Click a layer to inspect architecture
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Production Verified
                      </span>
                    </div>

                    <div className="space-y-2">
                      {ARCHITECTURE_NODES.map((node) => {
                        const isSelected = selectedNode.id === node.id;
                        return (
                          <button
                            key={node.id}
                            type="button"
                            onClick={() => setSelectedNode(node)}
                            className={`w-full text-left p-3 rounded-xl border transition-all ${
                              isSelected
                                ? "bg-sky-500/10 border-sky-400/45 shadow-[0_0_25px_-8px_rgba(56,189,248,0.4)]"
                                : "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400 block">
                                  {node.badge}
                                </span>
                                <span className="font-display font-semibold text-sm text-white">
                                  {node.label}
                                </span>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-white/[0.05] font-mono text-[10px] text-emerald-300 border border-white/[0.07]">
                                {node.status}
                              </span>
                            </div>
                            <p className="font-mono text-[11px] text-slate-400 mt-0.5">
                              {node.sub}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-3.5 rounded-xl bg-obsidian-900/90 border border-white/[0.08] font-mono text-xs text-slate-300 leading-relaxed">
                      <span className="text-sky-400 font-semibold">
                        &gt; {selectedNode.label}:{" "}
                      </span>
                      {selectedNode.details}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Architectural Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="mt-12 lg:mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.14] transition-colors"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {metric.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-sky-400 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">{metric.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 hidden sm:flex justify-center mt-8">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="group inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
