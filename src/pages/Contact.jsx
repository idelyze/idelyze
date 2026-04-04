import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useTheme } from "../App";
import { Ic, ss, sd } from "../theme";
import { Reveal, Eyebrow, PageHero, ease } from "../components/Primitives";

export default function Contact() {
  const { T } = useTheme();
  const [form, setForm]     = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [error, setError]   = useState("");
  const handle = (k, v) => { setForm(f => ({ ...f, [k]: v })); setError(""); };

  const inp = {
    width: "100%", padding: "12px 14px", borderRadius: 10, fontSize: 14,
    outline: "none", background: T.overlay, border: `1px solid ${T.border}`,
    color: T.primary, boxSizing: "border-box", transition: "border-color 0.2s", ...ss,
  };

  return (
    <div style={{ background: T.bg }} id="contact-page">
      <PageHero T={T}
        eyebrow="Contact"
        title={<>Let's build something<br />great together.</>}
        sub="Whether you're launching a new brand, building a website, or improving your digital presence — we're ready to help. We respond within 24 hours." />

      <section style={{ background: T.bg, padding: "0 0 112px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "start" }}>

            {/* Left — contact details */}
            <Reveal>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: T.primary, marginBottom: 20, ...sd }}>Get in touch directly</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
                {[
                  { icon: "Mail",  label: "Email us",  value: "idelyze.mail@gmail.com",                                          href: "mailto:idelyze.mail@gmail.com" },
                  { icon: "Phone", label: "WhatsApp",  value: "+91 89606 85128",                                                  href: "https://wa.me/918960685128"    },
                  { icon: "Ig",    label: "Instagram", value: "@theidelyze",                                                      href: "https://www.instagram.com/theidelyze/" },
                  { icon: "Fb",    label: "Facebook",  value: "Idelyze",                                                          href: "https://www.facebook.com/profile.php?id=61586719824918" },
                ].map(c => {
                  const IcComp = Ic[c.icon];
                  return (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}
                      onMouseEnter={e => e.currentTarget.querySelector(".val").style.color = T.accent}
                      onMouseLeave={e => e.currentTarget.querySelector(".val").style.color = T.secondary}>
                      <div style={{ width: 42, height: 42, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", background: T.accentDim, border: `1px solid ${T.accentRing}`, flexShrink: 0 }}>
                        <IcComp style={{ width: 16, height: 16, color: T.accent }} sw={1.75} />
                      </div>
                      <div>
                        <p style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, marginBottom: 2, ...ss }}>{c.label}</p>
                        <p className="val" style={{ fontSize: 14, fontWeight: 500, color: T.secondary, transition: "color 0.15s", ...ss }}>{c.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Response promise */}
              <div style={{ padding: "20px 22px", borderRadius: 14, background: T.surface, border: `1px solid ${T.border}` }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.accent, marginBottom: 8, ...ss }}>Our promise</p>
                {["Response within 24 hours","No sales pressure — just honest advice","Free initial consultation on every project"].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: T.accentDim, border: `1px solid ${T.accentRing}` }}>
                      <Ic.Check style={{ width: 8, height: 8, color: T.accent }} sw={2.5} />
                    </div>
                    <span style={{ fontSize: 13.5, color: T.secondary, ...ss }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={0.15}>
              <div style={{ borderRadius: 20, padding: 32, background: T.surface, border: `1px solid ${T.border}`, boxShadow: T.shadow }}>
                <AnimatePresence mode="wait">
                  {sent ? (
                    <m.div key="sent" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 0" }}>
                      <div style={{ width: 60, height: 60, borderRadius: "50%", background: T.accentDim, border: `1px solid ${T.accentRing}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                        <Ic.Check style={{ width: 24, height: 24, color: T.accent }} sw={2.5} />
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: T.primary, marginBottom: 10, ...sd }}>WhatsApp is opening!</h3>
                      <p style={{ fontSize: 14, color: T.secondary, lineHeight: 1.7, marginBottom: 10, ...ss }}>
                        Your message is pre-filled. Just press <strong>Send</strong> to complete it.
                      </p>
                      <p style={{ fontSize: 13, color: T.muted, marginBottom: 24, ...ss }}>
                        WhatsApp not opening?{" "}
                        <a href="#" onClick={e => {
                          e.preventDefault();
                          const text = ["Hi Idelyze! 👋","",`Name: ${form.name}`,`Email: ${form.email}`,`Service: ${form.service || "General enquiry"}`,``,`Message: ${form.message}`].join("\n");
                          window.open("https://wa.me/918960685128?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
                        }} style={{ color: T.accent, textDecoration: "none", fontWeight: 600 }}>Click here</a>
                      </p>
                      <button onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                        style={{ fontSize: 13, color: T.muted, background: "none", border: `1px solid ${T.border}`, borderRadius: 8, padding: "9px 18px", cursor: "pointer", ...ss }}>
                        Send another message
                      </button>
                    </m.div>
                  ) : (
                    <m.div key="form" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      <h3 style={{ fontSize: 17, fontWeight: 700, color: T.primary, marginBottom: 4, ...sd }}>Start a project</h3>

                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        {[
                          { key: "name",  label: "Name *",  ph: "Your name",       type: "text"  },
                          { key: "email", label: "Email *", ph: "you@company.com",  type: "email" },
                        ].map(f => (
                          <div key={f.key}>
                            <label style={{ fontSize: 11, fontWeight: 600, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6, ...ss }}>{f.label}</label>
                            <input type={f.type} value={form[f.key]} onChange={e => handle(f.key, e.target.value)} placeholder={f.ph} style={inp}
                              onFocus={e => e.target.style.borderColor = T.accent}
                              onBlur={e  => e.target.style.borderColor = T.border} />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label style={{ fontSize: 11, fontWeight: 600, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6, ...ss }}>Service</label>
                        <select value={form.service} onChange={e => handle("service", e.target.value)} style={{ ...inp, appearance: "none" }}
                          onFocus={e => e.target.style.borderColor = T.accent}
                          onBlur={e  => e.target.style.borderColor = T.border}>
                          <option value="">Select a service...</option>
                          {["UI/UX Design","Web Development","SEO Optimisation","Branding","Social Media","Digital Systems","Not sure yet"].map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: 11, fontWeight: 600, color: T.muted, letterSpacing: "0.08em", textTransform: "uppercase", display: "block", marginBottom: 6, ...ss }}>Message *</label>
                        <textarea value={form.message} onChange={e => handle("message", e.target.value)} placeholder="Tell us about your project..." rows={5}
                          style={{ ...inp, resize: "vertical", minHeight: 110 }}
                          onFocus={e => e.target.style.borderColor = T.accent}
                          onBlur={e  => e.target.style.borderColor = T.border} />
                      </div>

                      {error && <p style={{ fontSize: 12.5, color: T.accent, ...ss }}>⚠ {error}</p>}

                      {/* WhatsApp send button */}
                      <a href="#"
                        onClick={e => {
                          e.preventDefault();
                          if (!form.name.trim())    { setError("Please enter your name.");    return; }
                          if (!form.email.trim())   { setError("Please enter your email.");   return; }
                          if (!form.message.trim()) { setError("Please write a message.");    return; }
                          const text = [
                            "Hi Idelyze! 👋", "",
                            `Name: ${form.name.trim()}`,
                            `Email: ${form.email.trim()}`,
                            `Service: ${form.service || "General enquiry"}`, "",
                            `Message: ${form.message.trim()}`,
                          ].join("\n");
                          window.open("https://wa.me/918960685128?text=" + encodeURIComponent(text), "_blank", "noopener,noreferrer");
                          setSent(true);
                        }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600, background: T.accent, color: "#fff", textDecoration: "none", cursor: "pointer", transition: "opacity 0.2s", boxShadow: `0 1px 3px rgba(231,28,24,0.3), inset 0 1px 0 rgba(255,255,255,0.18)`, ...ss }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                        Send via WhatsApp <Ic.Phone style={{ width: 14, height: 14 }} />
                      </a>

                      <p style={{ fontSize: 11.5, color: T.muted, textAlign: "center", ...ss }}>
                        Prefer email?{" "}
                        <a href="mailto:idelyze.mail@gmail.com" style={{ color: T.accent, textDecoration: "none" }}>idelyze.mail@gmail.com</a>
                      </p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
