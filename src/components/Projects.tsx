"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Github,
  Layers,
  Play,
  Sparkles,
  CheckCircle2,
  X,
  Copy,
  Check,
  Terminal,
  ShieldCheck,
  Workflow,
  Search,
  ShoppingCart,
} from "lucide-react";
import { FEATURED_PROJECTS, ProjectItem } from "@/data/portfolio";

const RAG_DEMO_QUERIES = [
  {
    q: "How are uploaded PDFs indexed for semantic retrieval?",
    chunks: [
      {
        source: "architecture_spec.pdf · p.14",
        score: "0.94",
        excerpt:
          "Documents are parsed via Python workers, segmented into 512-token overlapping chunks, and embedded with text-embedding-3-small.",
      },
      {
        source: "rag_pipeline.md · §2.1",
        score: "0.89",
        excerpt:
          "Top-4 cosine similarity matches are injected into the system prompt with strict citation guardrails.",
      },
    ],
    answer:
      "Uploaded documents are processed asynchronously in Python, segmented into 512-token overlapping semantic chunks, embedded via OpenAI's text-embedding-3-small model, and retrieved via top-k cosine similarity before generating a citation-backed response.",
    latency: "380ms",
  },
  {
    q: "How does the assistant prevent LLM hallucinations?",
    chunks: [
      {
        source: "guardrails_config.py · L42",
        score: "0.96",
        excerpt:
          "Temperature is locked at 0.1 with deterministic system instructions requiring inline chunk citations for every claim.",
      },
      {
        source: "eval_metrics.json · #08",
        score: "0.88",
        excerpt:
          "Queries falling below 0.78 similarity threshold trigger a verified fallback rather than ungrounded speculation.",
      },
    ],
    answer:
      "Hallucinations are prevented through a 0.78 minimum similarity threshold, low-temperature (0.1) decoding, and strict system prompts that enforce inline source chunk citations.",
    latency: "340ms",
  },
];

const ECOMMERCE_STATES = [
  {
    step: "01",
    state: "CART_LOCKED",
    label: "Inventory Reserved",
    detail: "Atomic stock lock in MongoDB session (TTL: 10m)",
    ms: "28ms",
  },
  {
    step: "02",
    state: "HMAC_VERIFIED",
    label: "Payment Gateway Verified",
    detail: "Webhook signature validated & order marked PAID",
    ms: "64ms",
  },
  {
    step: "03",
    state: "FULFILLMENT_QUEUED",
    label: "AWS & Shiprocket Sync",
    detail: "AWB manifest generated + WhatsApp receipt sent",
    ms: "195ms",
  },
];

function ProjectVisualPreview({
  project,
  onOpenModal,
}: {
  project: ProjectItem;
  onOpenModal: (p: ProjectItem) => void;
}) {
  const [ragQueryIdx, setRagQueryIdx] = useState(0);
  const [activeOrderStep, setActiveOrderStep] = useState(1);

  if (project.previewType === "rag-engine") {
    const activeDemo = RAG_DEMO_QUERIES[ragQueryIdx];
    return (
      <div className="rounded-xl bg-obsidian-950/90 border border-white/[0.09] overflow-hidden shadow-2xl">
        {/* Window Topbar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 font-mono text-[11px] text-slate-400">
              rag-assistant // interactive-preview
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-mono text-[10px] text-emerald-300">
            OpenAI + Python RAG
          </span>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {/* Interactive Query Selector */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Search className="w-3.5 h-3.5" />
                <span>Select a sample query to test retrieval:</span>
              </span>
              <span>Latency: {activeDemo.latency}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {RAG_DEMO_QUERIES.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setRagQueryIdx(idx)}
                  className={`text-left px-3 py-2 rounded-lg font-mono text-xs border transition-all ${
                    ragQueryIdx === idx
                      ? "bg-sky-500/15 border-sky-400/45 text-white"
                      : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  &ldquo;{item.q}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Retrieved Vector Chunks */}
          <div className="space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              Retrieved Context Chunks (Top-K Cosine Match)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeDemo.chunks.map((chunk, cIdx) => (
                <div
                  key={cIdx}
                  className="p-2.5 rounded-lg bg-white/[0.025] border border-white/[0.07] space-y-1"
                >
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-sky-300 truncate">{chunk.source}</span>
                    <span className="px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-300">
                      sim: {chunk.score}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {chunk.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Synthesized Grounded Output */}
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border border-sky-400/25 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Grounded OpenAI Response</span>
              </span>
              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="font-mono text-[10px] text-sky-400 hover:text-sky-300 underline"
              >
                View Python Code →
              </button>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {activeDemo.answer}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewType === "ecommerce-cloud") {
    return (
      <div className="rounded-xl bg-obsidian-950/90 border border-white/[0.09] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 font-mono text-[11px] text-slate-400">
              commerce-engine // order-state-machine
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-400/30 font-mono text-[10px] text-sky-300">
            Next.js · MongoDB · AWS
          </span>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-sky-400" />
              <span>Interactive Checkout &amp; Fulfillment Pipeline</span>
            </span>
            <span className="font-mono text-[10px] text-emerald-400">
              ACID Transaction Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {ECOMMERCE_STATES.map((st, idx) => {
              const isSelected = activeOrderStep === idx;
              return (
                <button
                  key={st.state}
                  type="button"
                  onClick={() => setActiveOrderStep(idx)}
                  className={`text-left p-3 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-sky-500/15 border-sky-400/45"
                      : "bg-white/[0.02] border-white/[0.07] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-sky-400">STEP {st.step}</span>
                    <span className="text-emerald-300">{st.ms}</span>
                  </div>
                  <div className="font-display font-semibold text-xs text-white mt-1">
                    {st.label}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {st.detail}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.07] font-mono text-xs space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>
                STATE:{" "}
                <strong className="text-emerald-300">
                  {ECOMMERCE_STATES[activeOrderStep].state}
                </strong>
              </span>
              <button
                type="button"
                onClick={() => onOpenModal(project)}
                className="text-sky-400 hover:text-sky-300 underline"
              >
                Inspect Controller →
              </button>
            </div>
            <div className="text-[11px] text-slate-300 truncate">
              {`{ "orderId": "ORD-9482", "auth": "JWT_VERIFIED", "cloud": "AWS_AP_SOUTH_1" }`}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default architectural telemetry preview for OmniFlow & Skyline Core
  return (
    <div className="rounded-xl bg-obsidian-950/90 border border-white/[0.09] overflow-hidden shadow-2xl p-4 sm:p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
        <div className="flex items-center gap-2">
          <Workflow className="w-4 h-4 text-sky-400" />
          <span className="font-mono text-xs text-white">
            {project.title} // System Topology
          </span>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-400/25">
          {project.category}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {project.architectureSteps.map((step) => (
          <div
            key={step.step}
            className="p-3 rounded-xl bg-white/[0.025] border border-white/[0.06] space-y-1"
          >
            <span className="font-mono text-[10px] text-sky-400">
              STAGE // {step.step}
            </span>
            <h4 className="font-display font-semibold text-xs text-white">
              {step.title}
            </h4>
            <p className="text-[11px] text-slate-400 leading-snug">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // ignore clipboard error
    }
  };

  const flagshipProjects = FEATURED_PROJECTS.filter((p) => p.featured);
  const additionalProjects = FEATURED_PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Center Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-sky-500/5 blur-[150px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              <span>04 // SELECTED PROJECTS & ARCHITECTURES</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
              Featured Engineering{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                Case Studies.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Interactive showcases of production AI assistants, full-stack
              e-commerce engines, and multi-channel automation architectures.
              Test the interactive previews below or inspect the underlying
              code.
            </p>
          </div>

          <a
            href="https://github.com/RajeshThangapandi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] font-mono text-xs text-slate-200 hover:text-white transition-all w-fit"
          >
            <Github className="w-4 h-4 text-sky-400" />
            <span>Explore GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Flagship Alternating Project Showcases */}
        <div className="space-y-12 lg:space-y-16">
          {flagshipProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65 }}
                className="glass-panel-interactive rounded-3xl p-6 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Project Narrative & Specs */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-400/30 text-sky-300">
                          PROJECT // {project.index}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-sky-300">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <ul className="space-y-2.5">
                      {project.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/90"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 rounded-xl bg-obsidian-950/60 border border-white/[0.06]"
                        >
                          <span className="font-mono text-[10px] uppercase text-slate-400 block">
                            {m.label}
                          </span>
                          <span className="font-display font-semibold text-xs sm:text-sm text-white mt-0.5 block">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-sky-400 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 transition-all shadow-[0_0_24px_-6px_rgba(56,189,248,0.5)]"
                      >
                        <FileCode2 className="w-4 h-4" />
                        <span>Inspect Architecture &amp; Code</span>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.09] transition-all"
                        >
                          <Github className="w-4 h-4 text-sky-400" />
                          <span>GitHub Code</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Interactive Technical Composition Preview */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <ProjectVisualPreview
                      project={project}
                      onOpenModal={(p) => setSelectedProject(p)}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Additional Engineering Systems Grid */}
        {additionalProjects.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-8">
            {additionalProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-sky-400">
                      PROJECT // {project.index}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className="font-mono text-xs text-slate-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {project.title} —{" "}
                    <span className="text-slate-300 font-normal text-lg">
                      {project.subtitle}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/35 font-mono text-xs text-sky-300 transition-all"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 font-mono text-xs text-emerald-300 transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.09] font-mono text-xs text-slate-300 hover:text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-sky-400" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Deep-Dive Architecture & Code Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian-950/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                    ARCHITECTURAL DEEP DIVE // {selectedProject.index}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="font-display font-bold text-2xl sm:text-3xl text-white mt-1"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close case study modal"
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Engineering Challenge & System Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07] space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-300 block">
                    Engineering Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.07] space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 block">
                    System Architecture Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.architectureSummary}
                  </p>
                </div>
              </div>

              {/* 3-Stage Dataflow */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-sky-400">
                  Dataflow &amp; Execution Pipeline
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.architectureSteps.map((st) => (
                    <div
                      key={st.step}
                      className="p-4 rounded-xl bg-obsidian-950/75 border border-white/[0.07] space-y-1.5"
                    >
                      <span className="font-mono text-xs text-sky-400">
                        STAGE {st.step}
                      </span>
                      <div className="font-display font-semibold text-sm text-white">
                        {st.title}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {st.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation Code Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span>{selectedProject.codeSnippet.filename}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyCode(selectedProject.codeSnippet.code)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] font-mono text-xs text-slate-300"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Snippet</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 rounded-2xl bg-obsidian-950 border border-white/[0.09] overflow-x-auto font-mono text-xs text-slate-200 leading-relaxed">
                  <code>{selectedProject.codeSnippet.code}</code>
                </pre>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] font-mono text-xs text-white"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
