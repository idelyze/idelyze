import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useTheme } from "../App";
import { Ic, ss, sd } from "../theme";
import { Reveal, Eyebrow, SectionHead, PageHero, PrimaryBtn, ease } from "../components/Primitives";

const PERKS = [
  { icon: "Globe",     title: "Work from anywhere",     desc: "We're a fully remote team. Work from home, a café, or anywhere that helps you do your best work." },
  { icon: "Award",     title: "Craft-first culture",    desc: "We value quality deeply. You'll work on real projects with real impact — no filler, no grunt work." },
  { icon: "Users",     title: "Small team, big impact", desc: "Every person on the team shapes the work and the culture. Your ideas are heard and acted on." },
  { icon: "Zap",       title: "Grow fast",              desc: "We invest in our team's growth — tools, courses, and the freedom to take on challenges you haven't faced before." },
  { icon: "Heart",     title: "Meaningful work",        desc: "Our clients are real businesses — shops, schools, startups. You'll see the direct impact of your work." },
  { icon: "Briefcase", title: "Flexible engagement",    desc: "We hire full-time, part-time, and on a project basis. Tell us what works for you." },
];

const OPENINGS = [
  {
    title: "UI/UX Designer",
    type: "Full-time / Part-time",
    location: "Remote — India",
    desc: "We're looking for a designer who thinks in systems and cares deeply about the details. You'll work across brand, web, and product design projects.",
    requirements: ["2+ years UI/UX experience","Proficient in Figma","Portfolio showing real shipped work","Strong visual design sensibility","Good written communication"],
  },
  {
    title: "Web Developer",
    type: "Full-time / Project-based",
    location: "Remote — India",
    desc: "A front-end focused developer who can take a Figma file and build it into a fast, pixel-perfect, responsive website. React experience preferred.",
    requirements: ["2+ years web development","HTML, CSS, JavaScript (solid foundations)","React or similar framework","Performance & accessibility awareness","Experience with CMS platforms"],
  },
  {
    title: "Social Media Creative",
    type: "Part-time / Freelance",
    location: "Remote",
    desc: "A creative who eats Instagram for breakfast. You'll design posts, conceive reels, write captions, and help brands build engaged communities.",
    requirements: ["Strong visual sense for social content","Proficient in Canva or Adobe tools","Understanding of Instagram & Facebook algorithms","Copywriting ability","Organised — can manage a content calendar"],
  },
];

function OpeningCard({ role, i }) {
  const { T } = useTheme();
  const [open, setOpen] = useState(false);
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const handle = (k, v) => { setForm(f => ({ ...f, [k]: v })); setError(""); };

  const inp = { width: "100%", padding: "10px 13px", borderRadius: 9, fontSize: 13.5, outline: "none", background: T.overlay, border: `1px solid ${T.border}`, color: T.primary, boxSizing: "border-box", transition: "border-color 0.2s", ...ss };

  const apply = e => {
    e.preventDefault();
    if (!form.name.trim())    { setError("Please enter your name.");    return; }
    if (!form.email.trim())   { setError("Please enter your email.");   return; }
    if (!form.message.trim()) { setError("Please tell us about yourself."); return; }
    const text = [
      `Hi Idelyze! I'd like to apply for the ${role.title} role. 👋`, "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`, "",
      `About me: ${form.message.trim()}`,
    ].join("\n");
    window.open("https://wa.me/918960685128?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
    setApplied(true);
  };

  return (
    <Reveal delay={i * 0.1}>
      <div style={{ borderRadius: 18, overflow: "hidden", background: T.surface, border: `1px solid ${T.border}`, boxShadow: T.cardShadow }}>
        {/* Role header */}
        <div style={{ padding: "26px 28px", borderBottom: `1px solid ${T.border}` }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", color: T.primary, marginBottom: 10, ...sd }}>{role.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  { icon: "Briefcase", text: role.type    },
                  { icon: "MapPin",    text: role.location },
                ].map(tag => {
                  const IcComp = Ic[tag.icon];
                  return (
                    <span key={tag.text} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 500, color: T.muted, padding: "4px 10px", borderRadius: 20, background: T.overlay, border: `1px solid ${T.border}`, ...ss }}>
                      <IcComp style={{ width: 11, height: 11 }} sw={1.75} /> {tag.text}
                    </span>
                  );
                })}
              </div>
            </div>
            <m.button onClick={() => setOpen(!open)}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", fontSize: 13, fontWeight: 600, borderRadius: 10, background: T.accentDim, color: T.accent, border: `1px solid ${T.accentRing}`, cursor: "pointer", transition: "all 0.2s", flexShrink: 0, ...ss }}>
              {open ? "Hide details" : "View & Apply"} <Ic.ChevronRight style={{ width: 13, height: 13, transform: open ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
            </m.button>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.68, color: T.secondary, marginTop: 14, ...ss }}>{role.desc}</p>
        </div>

        {/* Expandable details + apply */}
        <AnimatePresence>
          {open && (
            <m.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease }}>
              <div style={{ padding: "24px 28px", borderBottom: `1px solid ${T.border}` }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, marginBottom: 14, ...ss }}>What we're looking for</p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {role.requirements.map(r => (
                    <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ width: 15, height: 15, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, background: T.accentDim, border: `1px solid ${T.accentRing}` }}>
                        <Ic.Check style={{ width: 7, height: 7, color: T.accent }} sw={2.5} />
                      </div>
                      <span style={{ fontSize: 13.5, color: T.secondary, lineHeight: 1.55, ...ss }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application */}
              <div style={{ padding: "24px 28px" }}>
                {applied ? (
                  <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "16px 0" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: T.accentDim, border: `1px solid ${T.accentRing}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                      <Ic.Check style={{ width: 18, height: 18, color: T.accent }} sw={2.5} />
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: T.primary, marginBottom: 6, ...sd }}>Application sent via WhatsApp!</p>
                    <p style={{ fontSize: 13, color: T.muted, ...ss }}>We'll review your message and get back to you within 48 hours.</p>
                  </m.div>
                ) : (
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: T.primary, marginBottom: 16, ...sd }}>Apply for this role</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[{ k:"name", l:"Name *", ph:"Your name" },{ k:"email", l:"Email *", ph:"you@email.com" }].map(f => (
                          <div key={f.k}>
                            <label style={{ fontSize: 10.5, fontWeight: 600, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 5, ...ss }}>{f.l}</label>
                            <input value={form[f.k]} onChange={e => handle(f.k, e.target.value)} placeholder={f.ph} style={inp}
                              onFocus={e => e.target.style.borderColor = T.accent}
                              onBlur={e  => e.target.style.borderColor = T.border} />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label style={{ fontSize: 10.5, fontWeight: 600, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 5, ...ss }}>Tell us about yourself & share your portfolio link *</label>
                        <textarea value={form.message} onChange={e => handle("message", e.target.value)} placeholder="Brief intro + link to your work (portfolio, GitHub, Behance, etc.)" rows={3}
                          style={{ ...inp, resize: "vertical", minHeight: 80 }}
                          onFocus={e => e.target.style.borderColor = T.accent}
                          onBlur={e  => e.target.style.borderColor = T.border} />
                      </div>
                      {error && <p style={{ fontSize: 12, color: T.accent, ...ss }}>⚠ {error}</p>}
                      <a href="#" onClick={apply}
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", borderRadius: 10, fontSize: 13.5, fontWeight: 600, background: T.accent, color: "#fff", textDecoration: "none", cursor: "pointer", transition: "opacity 0.2s", width: "fit-content", ...ss }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                        Apply via WhatsApp <Ic.Phone style={{ width: 13, height: 13 }} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function Careers() {
  const { T } = useTheme();

  return (
    <div style={{ background: T.bg }}>
      <PageHero T={T}
        eyebrow="Careers"
        title={<>Build great things<br />with us.</>}
        sub="We're a small, craft-focused team that cares about quality, honesty, and making a real difference for the brands we work with. Sound like you?" />

      {/* ── PERKS ── */}
      <section style={{ background: T.surface, padding: "80px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <SectionHead T={T} eyebrow="Why Idelyze" title={<>What it's like<br />to work with us.</>} />

          {/* ✅ FIX: align-items stretch (default) makes all cells in a row equal height */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, alignItems: "stretch" }}>
            {PERKS.map((p, i) => {
              const IcComp = Ic[p.icon];
              return (
                <Reveal key={p.title} delay={i * 0.07} style={{ height: "100%" }}>
                  {/* ✅ FIX: flex column + height 100% so icon stays top, desc fills middle */}
                  <div style={{
                    borderRadius: 16,
                    padding: "22px 24px",
                    background: T.bg,
                    border: `1px solid ${T.border}`,
                    boxShadow: T.cardShadow,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxSizing: "border-box",
                  }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: T.accentDim, border: `1px solid ${T.accentRing}`, marginBottom: 16, flexShrink: 0 }}>
                      <IcComp style={{ width: 14, height: 14, color: T.accent }} sw={1.75} />
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: T.primary, marginBottom: 8, ...sd }}>{p.title}</h3>
                    {/* ✅ FIX: flex: 1 fills remaining height so all cards bottom-align */}
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: T.muted, flex: 1, ...ss }}>{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPENINGS ── */}
      <section style={{ background: T.bg, padding: "80px 0 112px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <SectionHead T={T} eyebrow="Open Roles" title={<>Current openings.</>} sub="All roles are remote-friendly. We hire for attitude and craft — not just years on a CV." />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {OPENINGS.map((role, i) => <OpeningCard key={role.title} role={role} i={i} />)}
          </div>

          {/* Speculative applications */}
          <Reveal delay={0.3}>
            <div style={{ marginTop: 40, padding: "36px 32px", borderRadius: 18, background: T.surface, border: `1px solid ${T.border}`, textAlign: "center" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.accent, marginBottom: 12, ...ss }}>Don't see your role?</p>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: T.primary, marginBottom: 10, ...sd }}>We're always open to great people.</h3>
              <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.68, maxWidth: 420, margin: "0 auto 24px", ...ss }}>
                If you think you'd add something to the team — even if we don't have a listed role — send us a message. We'd love to hear from you.
              </p>
              <a href="mailto:idelyze.mail@gmail.com?subject=Speculative Application — [Your Role]"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", borderRadius: 10, fontSize: 13.5, fontWeight: 600, background: T.accent, color: "#fff", textDecoration: "none", transition: "opacity 0.2s", ...ss }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                <Ic.Mail style={{ width: 14, height: 14 }} /> Send a speculative application
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}