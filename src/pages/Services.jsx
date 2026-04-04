import { useState, useRef } from "react";
import { m, useInView, useReducedMotion } from "framer-motion";
import { useTheme } from "../App";
import { Ic, ss, sd } from "../theme";
import { Reveal, SectionHead, PageHero, PrimaryBtn, GhostBtn, ease } from "../components/Primitives";

const SERVICES = [
  {
    icon: "Palette", tag: "UI/UX Design", color: "#E71C18",
    title: "Interfaces that feel effortless",
    desc: "We design intuitive, visually refined interfaces built around real user behaviour — from wireframes to pixel-perfect handoff. Every screen is purposeful, every interaction considered.",
    features: ["User research & journey mapping","Wireframing & prototyping","High-fidelity UI design","Figma source files & design system","Developer handoff documentation","Up to 3 revision rounds"],
    process: "We start by understanding your users, then move through wireframes, visual design, and interactive prototypes — refining at every stage until the experience feels completely natural.",
  },
  {
    icon: "Globe", tag: "Web Development", color: "#3B82F6",
    title: "Fast, scalable websites",
    desc: "Robust, modern websites built with clean code and performance in mind. From landing pages to full web platforms — we build for speed, scalability, and longevity.",
    features: ["Mobile-first responsive design","Performance & Core Web Vitals optimised","CMS integration (custom or headless)","Contact forms & lead capture","WhatsApp & social integrations","Post-launch support included"],
    process: "We combine design and development in tight cycles — building, testing, and refining in real browsers from day one so there are no surprises at launch.",
  },
  {
    icon: "BarChart", tag: "SEO Optimisation", color: "#10B981",
    title: "Visibility that compounds",
    desc: "Strategic SEO that drives sustained organic growth. We optimise structure, content, and technical performance so your site ranks — and keeps ranking as competitors catch up.",
    features: ["Technical SEO audit & fixes","Keyword research & content strategy","On-page & off-page optimisation","Core Web Vitals & speed improvements","Google Search Console setup","Monthly ranking reports"],
    process: "We audit your current position first, then build a prioritised roadmap — tackling technical fixes, content gaps, and authority building in the right order for maximum impact.",
  },
  {
    icon: "Brain", tag: "Branding", color: "#8B5CF6",
    title: "Identity that sticks",
    desc: "From logo design to full visual systems — we craft brand identities with personality, purpose, and the consistency to make a lasting impression across every touchpoint.",
    features: ["Logo design (3 initial concepts)","Colour system & typography","Brand voice & tone guidelines","Business card & stationery design","Social media template kit","Full brand guidelines PDF"],
    process: "We start with your brand's purpose, audience, and competitive landscape — then translate those insights into a visual identity that feels both unique and completely right.",
  },
  {
    icon: "Layers", tag: "Social Media", color: "#F59E0B",
    title: "Content that converts",
    desc: "Instagram and Facebook content designed to stop the scroll. Creative posts, reels concepts, campaign assets, and ongoing social strategy built for growing brands.",
    features: ["Monthly content calendar","Custom graphic design for each post","Caption copywriting & hashtag strategy","Reel concepts & storyboards","Story templates & highlights","Monthly performance report"],
    process: "We develop your social voice and visual style first, then create content systematically — batching production to keep quality high and delivery consistent every month.",
  },
  {
    icon: "Zap", tag: "Digital Systems", color: "#06B6D4",
    title: "Systems designed to scale",
    desc: "Strategy, design, and technology woven into one cohesive digital system — so every piece of your online presence works harder, together, as a unified whole.",
    features: ["Full brand identity kit","Multi-page website","Advanced SEO strategy","Social media setup & strategy","Analytics & tracking setup","3–6 months priority support"],
    process: "We treat your entire digital presence as a single system — designing brand, web, and content to reinforce each other, so the whole is significantly more powerful than its parts.",
  },
];

function ServiceCard({ s, i }) {
  const { T } = useTheme();
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [open, setOpen] = useState(false);
  const IcComp = Ic[s.icon];

  return (
    <m.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease }}>
      <div style={{ borderRadius: 18, overflow: "hidden", background: T.surface, border: `1px solid ${T.border}`, boxShadow: T.cardShadow }}>
        {/* Header */}
        <div style={{ padding: "28px 28px 20px", borderBottom: `1px solid ${T.border}` }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
              {IcComp && <IcComp style={{ width: 20, height: 20, color: s.color }} sw={1.75} />}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: s.color, marginBottom: 6, ...ss }}>{s.tag}</p>
              <h3 style={{ fontSize: 19, fontWeight: 700, letterSpacing: "-0.025em", color: T.primary, marginBottom: 10, ...sd }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: T.secondary, ...ss }}>{s.desc}</p>
            </div>
          </div>
        </div>
      

        {/* Features */}
        <div style={{ padding: "20px 20px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, marginBottom: 14, ...ss }}>What's included</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px", marginBottom: 20 }}>
            {s.features.map(f => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, background: `${s.color}12`, border: `1px solid ${s.color}30` }}>
                  <Ic.Check style={{ width: 8, height: 8, color: s.color }} sw={2.5} />
                </div>
                <span style={{ fontSize: 13, lineHeight: 1.55, color: T.secondary, ...ss }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Process toggle */}
          <button onClick={() => setOpen(!open)}
            style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 600, color: s.color, background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: open ? 12 : 0, ...ss }}>
            <Ic.ChevronRight style={{ width: 13, height: 13, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
            How we approach this
          </button>
          {open && (
            <m.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
              style={{ fontSize: 13.5, lineHeight: 1.7, color: T.muted, padding: "14px 16px", borderRadius: 10, background: T.overlay, border: `1px solid ${T.border}`, ...ss }}>
              {s.process}
            </m.p>
          )}
        </div>

        {/* CTA strip */}
        <div style={{ padding: "0 28px 24px" }}>
          <PrimaryBtn T={T} to="/contact" size="md">
            Get a quote for {s.tag} <Ic.ArrowRight style={{ width: 13, height: 13 }} />
          </PrimaryBtn>
        </div>
      </div>
    </m.div>
  );
}

export default function Services() {
  const { T } = useTheme();
  return (
    <div style={{ background: T.bg }}>
      <PageHero T={T}
        eyebrow="Our Services"
        title={<>What we do,<br />done well.</>}
        sub="From brand identity to full digital systems — a complete studio that handles every layer of your online presence. Every service is delivered with the same care and precision." />

      <section style={{ background: T.bg, padding: "0 0 112px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(520px,1fr))", gap: 20 }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.tag} s={s} i={i} />)}
          </div>

          {/* Bottom CTA */}
          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 64, padding: "48px 32px", borderRadius: 20, background: T.surface, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: T.accent, marginBottom: 14, ...ss }}>Not sure where to start?</p>
              <h3 style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: T.primary, marginBottom: 14, ...sd }}>Let's figure it out together.</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: T.secondary, maxWidth: 480, margin: "0 auto 28px", ...ss }}>
                Tell us about your business and goals. We'll recommend exactly what you need — no upselling, no fluff.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <PrimaryBtn T={T} to="/contact" size="lg">Start a Project <Ic.ArrowRight style={{ width: 14, height: 14 }} /></PrimaryBtn>
                <GhostBtn T={T} to="/pricing" size="lg">See Pricing</GhostBtn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
