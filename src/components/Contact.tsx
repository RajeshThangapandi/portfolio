"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Github,
  Linkedin,
  MessageSquare,
  FileText,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

type FormStatus =
  | "idle"
  | "submitting"
  | "delivered"
  | "unconfigured"
  | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Full-Stack / AI Engineering Inquiry");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fallbackMailto, setFallbackMailto] = useState("");
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

  const buildWhatsAppUrl = () => {
    const text = `Hi Rajesh, I'm ${name || "reaching out"} (${
      email || "via portfolio"
    }).\n\nSubject: ${subject}\n\n${message}`;
    return `https://wa.me/919626899770?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoUrl = () => {
    if (fallbackMailto) return fallbackMailto;
    const body = `Hi Rajesh,\n\n${message}\n\n---\nFrom: ${name}\nReply Email: ${email}`;
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} — ${name}`
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          honeypot,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        code?: string;
        message?: string;
        error?: string;
        mailtoUrl?: string;
      };

      if (res.ok && data.ok) {
        setStatus("delivered");
        setStatusMessage(
          data.message || "Your message has been delivered to Rajesh T."
        );
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      if (data.code === "PROVIDER_NOT_CONFIGURED") {
        setStatus("unconfigured");
        setStatusMessage(
          data.error ||
            "Direct server email transport requires RESEND_API_KEY or WEB3FORMS_ACCESS_KEY. Use the verified direct dispatch buttons below to send your formatted message immediately."
        );
        if (data.mailtoUrl) {
          setFallbackMailto(data.mailtoUrl);
        }
        return;
      }

      setStatus("error");
      setStatusMessage(
        data.error || "Unable to send message. Please check your inputs."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network error occurred while validating submission. You can also reach out directly via email below."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient Bottom Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[420px] rounded-full bg-gradient-to-t from-sky-500/10 via-indigo-500/5 to-transparent blur-[140px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Invitation, Direct Contact & Social Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
                <span>05 // INITIATE CONNECTION</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  Exceptional.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether you&apos;re hiring for a{" "}
                <span className="text-white font-medium">
                  Full Stack / AI Product Engineering
                </span>{" "}
                role, scaling an e-commerce platform, or integrating OpenAI
                workflows into your product—I&apos;d love to connect.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="glass-panel rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={PERSONAL_INFO.socials.email}
                      className="font-mono text-xs sm:text-sm text-white hover:text-sky-300 truncate block transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] font-mono text-xs text-slate-300 hover:text-white transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="glass-panel rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={PERSONAL_INFO.phoneHref}
                      className="font-mono text-xs sm:text-sm text-white hover:text-emerald-300 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/919626899770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 font-mono text-xs text-emerald-300 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Location & Timezone */}
              <div className="glass-panel rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/25 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                      Base Location
                    </span>
                    <span className="font-display font-medium text-sm text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  {PERSONAL_INFO.timezone}
                </span>
              </div>
            </div>

            {/* Social Profiles & Resume Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] font-mono text-xs text-slate-200 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] font-mono text-xs text-slate-200 hover:text-white transition-all"
              >
                <Github className="w-4 h-4 text-sky-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] font-mono text-xs text-slate-200 hover:text-white transition-all"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill out the form below or use instant email/WhatsApp
                    dispatch.
                  </p>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Fast Response</span>
                </span>
              </div>

              {/* Honeypot field (hidden from screen readers & users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="contact-honeypot">Do not fill this out</label>
                <input
                  id="contact-honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300"
                  >
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/[0.1] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300"
                  >
                    Email Address <span className="text-sky-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/[0.1] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs uppercase tracking-wider text-slate-300"
                >
                  Subject / Role Context
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/[0.1] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-wider text-slate-300"
                >
                  Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  minLength={15}
                  placeholder="Tell me about the engineering role, project scope, or timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-950/80 border border-white/[0.1] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all resize-y"
                />
              </div>

              {/* Honest Submission Feedback States */}
              {status === "delivered" && (
                <div
                  role="status"
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Message Delivered
                    </p>
                    <p className="text-emerald-200/90 mt-0.5">
                      {statusMessage}
                    </p>
                  </div>
                </div>
              )}

              {status === "unconfigured" && (
                <div
                  role="alert"
                  className="p-4 rounded-2xl bg-sky-500/10 border border-sky-400/35 space-y-3 text-xs sm:text-sm"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">
                        Ready for Direct Dispatch
                      </p>
                      <p className="text-slate-300 mt-0.5 leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pl-8">
                    <a
                      href={buildMailtoUrl()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-400 text-slate-950 font-semibold text-xs hover:bg-sky-300 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Email Client (Pre-filled)</span>
                    </a>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-mono text-xs hover:bg-emerald-500/30 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-3 text-rose-200 text-xs sm:text-sm"
                >
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Validation Notice</p>
                    <p className="mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit & Direct Fallback Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300 hover:from-sky-300 hover:to-indigo-200 disabled:opacity-60 transition-all shadow-[0_0_28px_-6px_rgba(56,189,248,0.55)]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={buildMailtoUrl()}
                  className="inline-flex items-center justify-center gap-1.5 font-mono text-xs text-slate-400 hover:text-sky-300 transition-colors"
                >
                  <span>Or launch default email client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
