import { useNavigate } from "react-router-dom";
import { Logo, Ic, ss, sd } from "../theme";

const COLS = {
  Services: [
    { label: "UI/UX Design",    to: "/services" },
    { label: "Web Development", to: "/services" },
    { label: "SEO",             to: "/services" },
    { label: "Branding",        to: "/services" },
    { label: "Social Media",    to: "/services" },
  ],
  Company: [
    { label: "About Us",  to: "/about"   },
    { label: "Careers",   to: "/careers" },
    { label: "Pricing",   to: "/pricing" },
    { label: "Contact",   to: "/contact" },
  ],
  Connect: [
    { label: "Instagram", href: "https://www.instagram.com/theidelyze/" },
    { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61586719824918" },
    { label: "WhatsApp",  href: "https://wa.me/918960685128" },
    { label: "Email",     href: "mailto:idelyze.mail@gmail.com" },
  ],
};

export default function Footer({ T }) {
  const navigate = useNavigate();

  return (
    <footer style={{ background: T.surface, borderTop: `1px solid ${T.border}`, paddingTop: 52, paddingBottom: 28 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 44 }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 14 }}><Logo height={17} /></div>
            <p style={{ fontSize: 13, lineHeight: 1.72, color: T.muted, maxWidth: 220, marginBottom: 20, ...ss }}>
              Creating digital excellence since 2023.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { href: "https://www.instagram.com/theidelyze/",                     ic: "Ig"    },
                { href: "https://www.facebook.com/profile.php?id=61586719824918",    ic: "Fb"    },
                { href: "https://wa.me/918960685128",                                ic: "Phone" },
                { href: "mailto:idelyze.mail@gmail.com",                             ic: "Mail"  },
              ].map(({ href, ic }) => {
                const IcComp = Ic[ic];
                return (
                  <a key={ic} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ width: 30, height: 30, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: T.overlay, border: `1px solid ${T.border}`, color: T.muted, textDecoration: "none", transition: "all 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = T.primary; e.currentTarget.style.borderColor = T.borderHover; }}
                    onMouseLeave={e => { e.currentTarget.style.color = T.muted;   e.currentTarget.style.borderColor = T.border; }}>
                    <IcComp style={{ width: 13, height: 13 }} sw={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(COLS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.muted, marginBottom: 14, ...ss }}>{heading}</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                {links.map(link => (
                  <li key={link.label}>
                    {link.to ? (
                      <button onClick={() => { navigate(link.to); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        style={{ fontSize: 12.5, color: T.muted, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", transition: "color 0.15s", ...ss }}
                        onMouseEnter={e => e.target.style.color = T.primary}
                        onMouseLeave={e => e.target.style.color = T.muted}>
                        {link.label}
                      </button>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 12.5, color: T.muted, textDecoration: "none", transition: "color 0.15s", ...ss }}
                        onMouseEnter={e => e.target.style.color = T.primary}
                        onMouseLeave={e => e.target.style.color = T.muted}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14, paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
          <p style={{ fontSize: 11.5, color: T.ghost, ...ss }}>© 2026 Idelyze. All rights reserved.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.green, boxShadow: `0 0 6px ${T.green}` }} />
            <span style={{ fontSize: 11.5, color: T.ghost, ...ss }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
