/* ─── THEME TOKENS ─────────────────────────────────────────────────────────── */
export const LIGHT = {
  bg:          "#F7F8FC",
  surface:     "#FFFFFF",
  overlay:     "#EEF0F8",
  border:      "rgba(0,0,0,0.08)",
  borderHover: "rgba(0,0,0,0.16)",
  primary:     "#0A0C14",
  secondary:   "rgba(10,12,20,0.60)",
  muted:       "rgba(10,12,20,0.38)",
  ghost:       "rgba(10,12,20,0.20)",
  accent:      "#E71C18",
  accentDim:   "rgba(231,28,24,0.07)",
  accentRing:  "rgba(231,28,24,0.20)",
  green:       "#059669",
  amber:       "#D97706",
  blue:        "#2563EB",
  navBg:       "rgba(247,248,252,0.92)",
  shadow:      "0 16px 60px rgba(0,0,0,0.09)",
  cardShadow:  "0 1px 3px rgba(0,0,0,0.06)",
};

export const DARK = {
  bg:          "#06080F",
  surface:     "#0B0D17",
  overlay:     "#101323",
  border:      "rgba(255,255,255,0.07)",
  borderHover: "rgba(255,255,255,0.14)",
  primary:     "#F0F2FF",
  secondary:   "rgba(240,242,255,0.55)",
  muted:       "rgba(240,242,255,0.30)",
  ghost:       "rgba(240,242,255,0.13)",
  accent:      "#E71C18",
  accentDim:   "rgba(231,28,24,0.10)",
  accentRing:  "rgba(231,28,24,0.25)",
  green:       "#10B981",
  amber:       "#F59E0B",
  blue:        "#3B82F6",
  navBg:       "rgba(6,8,15,0.88)",
  shadow:      "0 32px 96px rgba(0,0,0,0.6)",
  cardShadow:  "0 1px 3px rgba(0,0,0,0.4)",
};

/* ─── SHARED FONT STYLE OBJECTS ─────────────────────────────────────────────── */
export const ss = { fontFamily: "var(--fs)" };
export const sd = { fontFamily: "var(--fd)" };

/* ─── ICONS ─────────────────────────────────────────────────────────────────── */
export const Ic = {
  Zap:         p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  ArrowRight:  p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  ArrowUpRight:p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>,
  Check:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  ChevronRight:p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  Menu:        p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  X:           p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Star:        p => <svg {...p} viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Brain:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>,
  Layers:      p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  Globe:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  BarChart:    p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Palette:     p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  Moon:        p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun:         p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  Mail:        p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  Phone:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Ig:          p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  Fb:          p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Users:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Heart:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  Target:      p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  Briefcase:   p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  MapPin:      p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Award:       p => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={p.sw||1.75} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>,
};

/* ─── LOGO ───────────────────────────────────────────────────────────────────── */
export function Logo({ height = 18 }) {
  return (
    <svg height={height} viewBox="886 270 2257 510" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
      <path d="M886.2 727.1V277L971.6 329.5V773.3L886.2 727.1ZM1217.58 771.2L1131.48 725L1045.38 771.2V274.9L1131.48 327.4L1217.58 274.9L1389.78 373.6V671.8L1217.58 771.2ZM1217.58 373.6L1131.48 426.8V625.6L1217.58 671.8L1303.68 625.6V426.8L1217.58 373.6ZM1460.34 372.2L1632.54 273.5L1804.74 372.2L1718.64 419.1L1632.54 372.2L1546.44 425.4L1718.64 524.8L1632.54 571L1546.44 524.8V624.2L1632.54 670.4L1804.74 571V670.4L1632.54 769.8L1460.34 670.4V372.2ZM1856.06 333.7L1942.16 281.2V631.9L2027.56 678.1V777.5L1856.06 678.1V333.7ZM1976.32 475.1V323.2L2062.42 276.3V421.9L2149.22 475.1L2235.32 421.9V276.3L2320.72 323.2V673.9L2149.22 773.3L2062.42 720.1L2235.32 620.7V521.3L2149.22 574.5C2089.72 541.6 2036.52 508.7 1976.32 475.1ZM2554.67 377.1V476.5L2467.87 522.7V622.1L2554.67 675.3V694.9L2653.37 635.4L2726.17 675.3L2554.67 774.7L2381.77 675.3V476.5C2434.97 442.9 2494.47 410 2554.67 377.1ZM2554.67 675.3L2726.17 575.9V377.1L2554.67 277.7L2381.77 377.1L2447.57 417L2554.67 357.5V377.1L2640.07 423.3V522.7C2613.47 536 2593.87 549.3 2554.67 575.9V675.3ZM2796.76 372.2L2968.96 273.5L3141.16 372.2L3055.06 419.1L2968.96 372.2L2882.86 425.4L3055.06 524.8L2968.96 571L2882.86 524.8V624.2L2968.96 670.4L3141.16 571V670.4L2968.96 769.8L2796.76 670.4V372.2Z" fill="#E71C18"/>
    </svg>
  );
}
