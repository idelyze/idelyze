import { useRef } from "react";
import { m, useInView, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../App";
import { Ic, ss, sd } from "../theme";
import { Reveal, Eyebrow, SectionHead, PrimaryBtn, GhostBtn, useCounter, ease } from "../components/Primitives";

/* ─── DATA ───────────────────────────────────────────────────────────────────── */
const LOGOS = ["Shop24Hours", "Siyansh Exim", "HR Smert", "The Owl", "Ubika"];
const STATS = [
  { value: 20,  suffix: "+",  label: "Brands launched"         },
  { value: 3,   suffix: "yr", label: "Years in digital design" },
  { value: 100, suffix: "%",  label: "Delivered on brief"      },
];
const STEPS = [
  { num: "01", title: "Discovery",  desc: "We analyse your business, audience, and market — building a strategic foundation before a single pixel is placed." },
  { num: "02", title: "Strategy",   desc: "A clear roadmap tailored to your objectives, ensuring every design and development decision leads toward success." },
  { num: "03", title: "Design",     desc: "Visually stunning, user-centred interfaces refined through iteration until every detail is exactly right." },
  { num: "04", title: "Launch",     desc: "Precise deployment, day-one performance monitoring, and continued support to ensure everything runs smoothly." },
];
const TESTIMONIALS = [
  { name: "Shop24Hours",     role: "E-commerce Brand",  initials: "S2", quote: "Idelyze built us a website that perfectly captures our brand identity. The browsing experience feels exactly right for our customers." },
  { name: "Ubika Preschool", role: "Education Brand",   initials: "UP", quote: "They understood what we needed immediately — a welcoming, clear website for parents. The final result exceeded every expectation." },
  { name: "Siyansh Exim",    role: "Export Business",   initials: "SE", quote: "Professional, fast, and genuinely invested in our success. Idelyze brought real strategic thinking to our digital presence." },
];
const SERVICES_PREVIEW = [
  { icon: "Palette",  tag: "UI/UX Design",   title: "Interfaces that feel effortless" },
  { icon: "Globe",    tag: "Web Development", title: "Fast, scalable websites"         },
  { icon: "BarChart", tag: "SEO",             title: "Visibility that compounds"       },
  { icon: "Brain",    tag: "Branding",        title: "Identity that sticks"            },
  { icon: "Layers",   tag: "Social Media",    title: "Content that converts"           },
  { icon: "Zap",      tag: "Digital Systems", title: "Systems designed to scale"       },
];

// ─── MARQUEE ─────────────────────────────────────────────────────────────────
// Duplicates the logo list 4× so the seamless loop works regardless of
// container width. We animate exactly -50% of the track (= 2 copies),
// so the repeat always starts from the same visual position.
function LogoMarquee({ T }) {
  // 4 copies → animate -50% = shift by exactly 2 copies → seamless
  const items = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div style={{
      overflow: "hidden",
      position: "relative",
      padding: "4px 0",
    }}>
      {/* Left fade */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 100, zIndex: 1, pointerEvents: "none",
        background: `linear-gradient(to right, ${T.bg}, transparent)`,
      }} />
      {/* Right fade */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 100, zIndex: 1, pointerEvents: "none",
        background: `linear-gradient(to left, ${T.bg}, transparent)`,
      }} />

      {/* ✅ FIX: width max-content keeps percentage calc honest;
               -50% of 4 copies = exactly 2 copies = seamless loop */}
      <m.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
          gap: 0,
        }}
      >
        {items.map((label, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: T.ghost,
              padding: "0 40px",
              ...ss,
            }}>
              {label}
            </span>
            {/* Separator dot */}
            <span style={{
              width: 4, height: 4, borderRadius: "50%",
              background: T.border, flexShrink: 0,
              display: "inline-block",
            }} />
          </div>
        ))}
      </m.div>
    </div>
  );
}

/* ─── HOME ───────────────────────────────────────────────────────────────────── */
export default function Home() {
  const { T, dark } = useTheme();
  const navigate    = useNavigate();
  const lineRef     = useRef(null);
  const lineInView  = useInView(lineRef, { once: true });

  return (
    <div style={{ background: T.bg }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", paddingTop: 148, paddingBottom: 80, overflow: "hidden", background: T.bg }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 860, height: 520, borderRadius: "50%", background: dark ? "radial-gradient(ellipse at 50% 0%, rgba(231,28,24,0.07) 0%, transparent 65%)" : "radial-gradient(ellipse at 50% 0%, rgba(231,28,24,0.05) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${T.accentRing}, transparent)` }} />
        </div>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
          <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 60px" }}>
            <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05, ease }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, borderRadius: 50, padding: "7px 14px", marginBottom: 30, background: T.accentDim, border: `1px solid ${T.accentRing}` }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} />
              <span style={{ fontSize: 11.5, fontWeight: 500, color: T.accent, letterSpacing: "0.02em", ...ss }}>Digital Design Studio · Based in India, built for the world</span>
              <Ic.ChevronRight style={{ width: 11, height: 11, color: T.accent, opacity: 0.6 }} />
            </m.div>

            <m.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18, ease }}
              style={{ fontSize: "clamp(2.6rem,5.5vw,4.2rem)", lineHeight: 1.04, color: T.primary, fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 22, ...sd }}>
              Designing digital systems
              <br />
              <span style={{ background: `linear-gradient(135deg, ${T.accent} 0%, #FF6B35 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                that scale.
              </span>
            </m.h1>

            <m.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32, ease }}
              style={{ fontSize: 16.5, lineHeight: 1.74, color: T.secondary, maxWidth: 520, margin: "0 auto 36px", ...ss }}>
              We build brands, interfaces, and digital systems designed to grow with your business — combining strategy, design, and technology to create meaningful digital experiences.
            </m.p>

            <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.44, ease }}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 28 }}>
              <PrimaryBtn T={T} to="/contact" size="lg">Start a Project <Ic.ArrowRight style={{ width: 14, height: 14 }} /></PrimaryBtn>
              <GhostBtn T={T} to="/services" size="lg">Explore Services</GhostBtn>
            </m.div>

            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "8px 20px" }}>
              {["Strategy-first approach","Design that converts","Delivered on brief"].map(item => (
                <span key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: T.muted, ...ss }}>
                  <Ic.Check style={{ width: 10, height: 10, color: T.accent }} sw={2.5} />
                  {item}
                </span>
              ))}
            </m.div>
          </div>
        </div>
      </section>

      {/* ── LOGOS ── */}
      <div style={{
        background: T.bg,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        padding: "36px 0",
      }}>
        <p style={{ textAlign: "center", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.ghost, marginBottom: 24, ...ss }}>
          Trusted by growing brands
        </p>
        {/* ✅ FIX: extracted into <LogoMarquee> with correct animation */}
        <LogoMarquee T={T} />
      </div>

      {/* ── SERVICES TEASER ── */}
      <section style={{ background: T.surface, padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <SectionHead T={T} eyebrow="Services" title={<>What we do,<br />done well.</>} sub="From brand identity to full digital systems — a complete studio that handles every layer of your online presence." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12, marginBottom: 48 }}>
            {SERVICES_PREVIEW.map((s, i) => {
              const IcComp = Ic[s.icon];
              return (
                <Reveal key={s.title} delay={i * 0.07}>
                  <m.div
                    onClick={() => navigate("/services")}
                    whileHover={{ y: -3, boxShadow: T.shadow }}
                    style={{ borderRadius: 14, padding: "20px 22px", background: T.bg, border: `1px solid ${T.border}`, cursor: "pointer", transition: "all 0.2s ease", display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: T.accentDim, border: `1px solid ${T.accentRing}` }}>
                      {IcComp && <IcComp style={{ width: 14, height: 14, color: T.accent }} sw={1.75} />}
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.accent, marginBottom: 3, ...ss }}>{s.tag}</p>
                      <h3 style={{ fontSize: 14, fontWeight: 600, color: T.primary, letterSpacing: "-0.015em", ...sd }}>{s.title}</h3>
                    </div>
                    <Ic.ChevronRight style={{ width: 14, height: 14, color: T.muted, marginLeft: "auto", flexShrink: 0 }} />
                  </m.div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <div style={{ textAlign: "center" }}>
              <GhostBtn T={T} to="/services" size="lg">View all services & details <Ic.ArrowRight style={{ width: 14, height: 14 }} /></GhostBtn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ background: T.bg, padding: "96px 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.3, backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`, backgroundSize: "72px 72px" }} />
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <SectionHead T={T} eyebrow="Our Process" title={<>How we work.<br />Why it works.</>} sub="A clear, repeatable process that turns your vision into a digital product your audience actually uses — and loves." center />
          <div ref={lineRef} style={{ position: "relative", maxWidth: 660, margin: "0 auto" }}>
            <div style={{ position: "absolute", left: 26, top: 52, bottom: 24, width: 1, background: T.border }} />
            <m.div initial={{ height: 0 }} animate={lineInView ? { height: "calc(100% - 76px)" } : {}} transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              style={{ position: "absolute", left: 26, top: 52, width: 1, transformOrigin: "top", background: `linear-gradient(to bottom, ${T.accent}, transparent)` }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
              {STEPS.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.1}>
                  <div style={{ display: "flex", gap: 26, alignItems: "flex-start" }}>
                    <m.div initial={{ scale: 0 }} animate={lineInView ? { scale: 1 } : {}} transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 240, damping: 18 }}
                      style={{ position: "relative", zIndex: 1, flexShrink: 0, width: 52, height: 52, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: T.surface, border: `1px solid ${T.border}`, boxShadow: `0 0 0 5px ${T.bg}` }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: T.accent, ...ss }}>{step.num}</span>
                    </m.div>
                    <div style={{ paddingTop: 10 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.025em", color: T.primary, marginBottom: 7, ...sd }}>{step.title}</h3>
                      <p style={{ fontSize: 13.5, lineHeight: 1.7, color: T.muted, maxWidth: 430, ...ss }}>{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: T.surface, padding: "72px 0", borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 24 }}>
          {STATS.map((s, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true });
            const n = useCounter(s.value, inView);
            return (
              <Reveal key={s.label} delay={i * 0.1}>
                <div ref={ref} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "clamp(2.4rem,4vw,3.2rem)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1, color: T.primary, marginBottom: 10, ...sd }}>{n}{s.suffix}</div>
                  <p style={{ fontSize: 13, color: T.muted, maxWidth: 150, margin: "0 auto", lineHeight: 1.55, ...ss }}>{s.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="clients" style={{ background: T.bg, padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <SectionHead T={T} eyebrow="Clients" title={<>Brands we've<br />helped grow.</>} center />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div style={{ height: "100%", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", background: T.surface, border: `1px solid ${T.border}`, transition: "border-color 0.2s", boxShadow: T.cardShadow }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = T.borderHover}
                  onMouseLeave={e => e.currentTarget.style.borderColor = T.border}>
                  <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                    {Array(5).fill(0).map((_,si) => <Ic.Star key={si} style={{ width: 11, height: 11, color: T.amber }} />)}
                  </div>
                  <blockquote style={{ flex: 1, fontSize: 14, lineHeight: 1.78, color: T.secondary, marginBottom: 22, ...ss }}>"{t.quote}"</blockquote>
                  <div style={{ display: "flex", alignItems: "center", gap: 11, paddingTop: 18, borderTop: `1px solid ${T.border}` }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 700, flexShrink: 0, background: T.accentDim, border: `1px solid ${T.accentRing}`, color: T.accent, ...ss }}>{t.initials}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: T.primary, ...sd }}>{t.name}</div>
                      <div style={{ fontSize: 11.5, color: T.muted, ...ss }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: T.surface, padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 560, height: 320, borderRadius: "50%", background: `radial-gradient(ellipse, ${T.accentDim} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal>
            <Eyebrow T={T}>Ready to start?</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.06, color: T.primary, marginBottom: 16, ...sd }}>
              Your brand deserves<br />
              <span style={{ background: `linear-gradient(135deg, ${T.accent} 0%, #FF6B35 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>better than ordinary.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.78, color: T.secondary, maxWidth: 400, margin: "0 auto 32px", ...ss }}>
              Join the brands that chose to invest in quality design. Response within 24 hours — no pressure, no sales pitch.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
              <PrimaryBtn T={T} to="/contact" size="lg">Start a Project <Ic.ArrowRight style={{ width: 14, height: 14 }} /></PrimaryBtn>
              <GhostBtn T={T} href="https://wa.me/918960685128" size="lg">
                <Ic.Phone style={{ width: 13, height: 13 }} /> WhatsApp us
              </GhostBtn>
            </div>
            <p style={{ fontSize: 11.5, color: T.ghost, ...ss }}>Response within 24 hours · Based in India · Working globally</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}