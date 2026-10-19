"use client";

import React, { useEffect, useRef } from "react";

export default function AmbientSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce), (pointer: coarse)"
    );
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      el.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(56, 189, 248, 0.055), transparent 65%)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block transition-opacity duration-300"
    />
  );
}
