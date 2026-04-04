import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ss, sd } from "../theme";
import { useState, useEffect } from "react";

export const ease = [0.22, 1, 0.36, 1];

/* ─── COUNTER HOOK ───────────────────────────────────────────────────────────── */
export function useCounter(target, inView) {
  const [n, setN] = useState(0);
  const prefersReduced = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    // If user prefers reduced motion, jump straight to final value
    if (prefersReduced) { setN(target); return; }
    let raf, start = null;
    const run = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, prefersReduced]);
  return n;
}

/* ─── REVEAL — respects prefers-reduced-motion ───────────────────────────────── */
export function Reveal({ children, delay = 0, y = 22, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();

  // No animation if user prefers reduced motion
  if (prefersReduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <m.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease }}
      className={className}>
      {children}
    </m.div>
  );
}

/* ─── EYEBROW ────────────────────────────────────────────────────────────────── */
export function Eyebrow({ children, T }) {
  return (
    <p style={{ color: T.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 14, ...ss }}>
      {children}
    </p>
  );
}

/* ─── SECTION HEAD ───────────────────────────────────────────────────────────── */
export function SectionHead({ eyebrow, title, sub, T, center = false }) {
  return (
    <Reveal>
      <div style={{ textAlign: center ? "center" : "left", maxWidth: center ? 520 : 560, margin: center ? "0 auto 64px" : "0 0 56px" }}>
        <Eyebrow T={T}>{eyebrow}</Eyebrow>
        <h2 style={{ fontSize: "clamp(1.9rem,3vw,2.65rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.07, color: T.primary, marginBottom: 16, ...sd }}>
          {title}
        </h2>
        {sub && <p style={{ fontSize: 15, lineHeight: 1.78, color: T.secondary, ...ss }}>{sub}</p>}
      </div>
    </Reveal>
  );
}

/* ─── PRIMARY BUTTON ─────────────────────────────────────────────────────────── */
export function PrimaryBtn({ children, href, to, onClick, T, size = "md" }) {
  const navigate = useNavigate();
  const pad = size === "lg" ? "18px 28px" : "11px 22px";
  const fs  = size === "lg" ? 14 : 13.5;

  const handleClick = e => {
    if (onClick) onClick(e);
    if (to) { e.preventDefault(); navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    if (href?.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isExternal = href && (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel"));

  return (
    <m.a
      href={to ? "#" : (href || "#")}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      role={to || href?.startsWith("#") ? "button" : undefined}
      whileHover={{ scale: 1.015, boxShadow: `0 0 0 3px ${T.accentRing}, 0 8px 28px rgba(231,28,24,0.22)` }}
      whileTap={{ scale: 0.985 }}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: pad, fontSize: fs, fontWeight: 600, borderRadius: 10, background: T.accent, color: "#fff", textDecoration: "none", cursor: "pointer", border: "none", boxShadow: `0 1px 3px rgba(231,28,24,0.3), inset 0 1px 0 rgba(255,255,255,0.18)`, position: "relative", overflow: "hidden", ...ss }}>
      <m.span style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.07)", opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.18 }} aria-hidden="true" />
      <span style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: 8 }}>{children}</span>
    </m.a>
  );
}

/* ─── GHOST BUTTON ───────────────────────────────────────────────────────────── */
export function GhostBtn({ children, href, to, onClick, T, size = "md" }) {
  const navigate = useNavigate();
  const pad = size === "lg" ? "16px 24px" : "10px 18px";
  const fs  = size === "lg" ? 14 : 13.5;

  const handleClick = e => {
    if (onClick) onClick(e);
    if (to) { e.preventDefault(); navigate(to); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    if (href?.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isExternal = href && (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel"));

  return (
    <m.a
      href={to ? "#" : (href || "#")}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      role={to || href?.startsWith("#") ? "button" : undefined}
      whileHover={{ background: T.overlay }}
      whileTap={{ scale: 0.985 }}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: pad, fontSize: fs, fontWeight: 500, borderRadius: 10, background: "transparent", color: T.secondary, textDecoration: "none", cursor: "pointer", border: `1px solid ${T.border}`, transition: "background 0.15s", ...ss }}>
      {children}
    </m.a>
  );
}

/* ─── PAGE HERO BANNER ───────────────────────────────────────────────────────── */
export function PageHero({ eyebrow, title, sub, T }) {
  const prefersReduced = useReducedMotion();
  const animProps = prefersReduced ? {} : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease },
  };

  return (
    <section style={{ background: T.bg, paddingTop: 140, paddingBottom: 72, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse at 50% 0%, ${T.accentDim} 0%, transparent 65%)` }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${T.accentRing}, transparent)` }} />
      </div>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <m.div {...animProps}>
          <p style={{ color: T.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 16, ...ss }}>{eyebrow}</p>
          <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: T.primary, marginBottom: 20, maxWidth: 700, ...sd }}>{title}</h1>
          {sub && <p style={{ fontSize: 17, lineHeight: 1.72, color: T.secondary, maxWidth: 560, ...ss }}>{sub}</p>}
        </m.div>
      </div>
    </section>
  );
}
