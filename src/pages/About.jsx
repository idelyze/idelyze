import { useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { useTheme } from "../App";
import { Ic, ss, sd } from "../theme";
import { Reveal, Eyebrow, SectionHead, PageHero, PrimaryBtn, GhostBtn, ease } from "../components/Primitives";

const VALUES = [
  { icon: "Target", title: "Purpose before pixels",    desc: "Every design decision starts with a question: does this serve the user and the business goal? If the answer is no, we cut it." },
  { icon: "Heart",  title: "Invested, not transactional", desc: "We treat every project as if it were our own business. Your success is our portfolio — so we care deeply about outcomes, not just deliverables." },
  { icon: "Award",  title: "Craft over speed",          desc: "We don't rush quality. We take the time to get it right — because a website or brand that truly works pays for itself many times over." },
  { icon: "Users",  title: "Honest partnerships",       desc: "We tell you what you need to hear, not what's easiest to say. No overselling, no hidden upsells — just honest recommendations for your situation." },
];

const TIMELINE = [
  { year: "2023", title: "Idelyze is founded", desc: "Started as a small creative studio with a single mission: bring agency-quality design to growing businesses at honest prices." },
  { year: "2023", title: "First 5 brands launched", desc: "Shop24Hours, Ubika Preschool, and our earliest clients trusted us to build their digital presence. 100% delivered on brief." },
  { year: "2024", title: "Expanded to full digital systems", desc: "Grew from design-only to offering end-to-end digital services — web development, SEO, social media, and strategy under one roof." },
  { year: "2025", title: "20+ brands and counting", desc: "A growing portfolio of businesses we've helped stand out, scale up, and show up consistently across every digital channel." },
];

export default function About() {
  const { T, dark } = useTheme();
  const lineRef  = useRef(null);
  const lineInView = useInView(lineRef, { once: true });

  return (
    <div style={{ background: T.bg }}>
      <PageHero T={T}
        eyebrow="About Idelyze"
        title={<>We design systems<br />that outlast trends.</>}
        sub="Idelyze is a digital design studio founded on a simple belief: that great design, honest strategy, and genuine care produce digital presence that actually works." />

      {/* ── STORY ── */}
      <section style={{ background: T.surface, padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 80, alignItems: "center" }}>
            <Reveal>
              <Eyebrow T={T}>Our Story</Eyebrow>
              <h2 style={{ fontSize: "clamp(2rem,3vw,2.65rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.07, color: T.primary, marginBottom: 20, ...sd }}>
                Built for the builders.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: T.secondary, marginBottom: 18, ...ss }}>
                Idelyze was founded in 2023 with a clear frustration: too many growing businesses were stuck with generic templates, overpriced agencies, or designs that looked good in a pitch deck but didn't perform in the real world.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: T.secondary, marginBottom: 18, ...ss }}>
                We set out to change that. A studio that combines the strategic thinking of a large agency with the care and accountability of a dedicated partner — at prices that make sense for businesses at every stage.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: T.secondary, ...ss }}>
                Based in India, working globally. Every project we take on is treated as if it were our own business on the line.
              </p>
            </Reveal>

            {/* Stats visual */}
            <Reveal delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { num: "20+",  label: "Brands launched",         color: T.accent },
                  { num: "3yr",  label: "Years of experience",      color: T.green  },
                  { num: "100%", label: "On-brief delivery rate",   color: T.blue   },
                  { num: "24h",  label: "Average response time",    color: T.amber  },
                ].map(s => (
                  <div key={s.label} style={{ borderRadius: 16, padding: "24px 22px", background: T.bg, border: `1px solid ${T.border}`, boxShadow: T.cardShadow }}>
                    <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.04em", color: s.color, lineHeight: 1, marginBottom: 8, ...sd }}>{s.num}</div>
                    <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.5, ...ss }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: T.bg, padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <SectionHead T={T} eyebrow="Our Values" title={<>How we think.<br />How we work.</>} sub="These aren't words on a wall. They're the principles behind every decision we make on every project." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
            {VALUES.map((v, i) => {
              const IcComp = Ic[v.icon];
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div style={{ borderRadius: 16, padding: 24, background: T.surface, border: `1px solid ${T.border}`, boxShadow: T.cardShadow }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: T.accentDim, border: `1px solid ${T.accentRing}`, marginBottom: 18 }}>
                      <IcComp style={{ width: 16, height: 16, color: T.accent }} sw={1.75} />
                    </div>
                    <h3 style={{ fontSize: 15.5, fontWeight: 700, letterSpacing: "-0.02em", color: T.primary, marginBottom: 10, ...sd }}>{v.title}</h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.68, color: T.muted, ...ss }}>{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={{ background: T.surface, padding: "96px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 80, alignItems: "center" }}>
            <Reveal>
              <Eyebrow T={T}>Philosophy</Eyebrow>
              <h2 style={{ fontSize: "clamp(2rem,3vw,2.65rem)", fontWeight: 800, letterSpacing: "-0.035em", lineHeight: 1.07, color: T.primary, marginBottom: 20, ...sd }}>
                Design driven<br />by purpose.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.78, color: T.secondary, maxWidth: 440, marginBottom: 28, ...ss }}>
                Good design is invisible. It's not just about how it looks — it's about how it works. We strip away the unnecessary to focus on what truly matters to your users.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 13, marginBottom: 36 }}>
                {["Strategy-led design that solves real problems","Every pixel considered, every interaction purposeful","Systems built to grow with your business over time"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 11 }}>
                    <div style={{ width: 17, height: 17, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, background: T.accentDim, border: `1px solid ${T.accentRing}` }}>
                      <Ic.Check style={{ width: 9, height: 9, color: T.accent }} sw={2.5} />
                    </div>
                    <span style={{ fontSize: 13.5, lineHeight: 1.68, color: T.secondary, ...ss }}>{item}</span>
                  </li>
                ))}
              </ul>
              <PrimaryBtn T={T} to="/contact" size="lg">Work with us <Ic.ArrowRight style={{ width: 14, height: 14 }} /></PrimaryBtn>
            </Reveal>

            {/* Timeline */}
            <Reveal delay={0.15}>
              <div ref={lineRef} style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 16, top: 12, bottom: 12, width: 1, background: T.border }} />
                <m.div initial={{ height: 0 }} animate={lineInView ? { height: "calc(100% - 24px)" } : {}} transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                  style={{ position: "absolute", left: 16, top: 12, width: 1, transformOrigin: "top", background: `linear-gradient(to bottom, ${T.accent}, transparent)` }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {TIMELINE.map((item, i) => (
                    <Reveal key={item.title} delay={0.2 + i * 0.1}>
                      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                        <m.div initial={{ scale: 0 }} animate={lineInView ? { scale: 1 } : {}} transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 240 }}
                          style={{ position: "relative", zIndex: 1, flexShrink: 0, width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: T.bg, border: `1px solid ${T.border}`, boxShadow: `0 0 0 4px ${T.surface}` }}>
                          <div style={{ width: 8, height: 8, borderRadius: "50%", background: T.accent }} />
                        </m.div>
                        <div>
                          <span style={{ fontSize: 10.5, fontWeight: 700, color: T.accent, letterSpacing: "0.08em", ...ss }}>{item.year}</span>
                          <h4 style={{ fontSize: 15, fontWeight: 700, color: T.primary, marginBottom: 5, marginTop: 2, ...sd }}>{item.title}</h4>
                          <p style={{ fontSize: 13, lineHeight: 1.65, color: T.muted, ...ss }}>{item.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: T.bg, padding: "80px 0" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <Reveal>
            <Eyebrow T={T}>Work with us</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.9rem,3vw,2.5rem)", fontWeight: 800, letterSpacing: "-0.035em", color: T.primary, marginBottom: 16, ...sd }}>
              Ready to build something you're proud of?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: T.secondary, marginBottom: 32, ...ss }}>
              Tell us about your project and we'll tell you honestly whether we're the right fit. No pressure, no pitch.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <PrimaryBtn T={T} to="/contact" size="lg">Start a Project <Ic.ArrowRight style={{ width: 14, height: 14 }} /></PrimaryBtn>
              <GhostBtn T={T} to="/careers" size="lg">Join our team</GhostBtn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
