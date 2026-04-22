import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Logo, Ic, ss } from "../theme";

const COLS = {
  Services: [
    { label: "UI/UX Design",    to: "/services" },
    { label: "Web Development", to: "/services" },
    { label: "SEO",             to: "/services" },
    { label: "Branding",        to: "/services" },
    { label: "Social Media",    to: "/services" },
  ],
  Company: [
    { label: "About Us", to: "/about"   },
    { label: "Careers",  to: "/careers" },
    { label: "Pricing",  to: "/pricing" },
    { label: "Contact",  to: "/contact" },
  ],
};

const CONNECT = [
  { label: "Instagram", href: "https://www.instagram.com/theidelyze/",                       ic: "Ig"    },
  { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61586719824918",      ic: "Fb"    },
  { label: "WhatsApp",  href: "https://wa.me/918960685128",                                  ic: "Phone" },
  { label: "Email",     href: "mailto:idelyze.mail@gmail.com",                               ic: "Mail"  },
];

export default function Footer({ T }) {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  const linkStyle = {
    fontSize: 13.5,
    lineHeight: 1.8,
    color: T.muted,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    textAlign: "left",
    textDecoration: "none",
    ...ss,
  };

  const colHeadStyle = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: T.muted,
    marginBottom: 16,
    ...ss,
  };

  return (
    <footer style={{
      background: T.surface,
      borderTop: `1px solid ${T.border}`,
      paddingTop: 52,
      paddingBottom: 28,
    }}>
      <div style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 24px",
      }}>

        {/* ── DESKTOP / TABLET layout ─────────────────────────────────── */}
        {!isMobile && (
          <div style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "2fr 1fr 1fr 1fr" : "1fr 1fr 1fr",
            columnGap: 60,
            rowGap: 40,
            alignItems: "flex-start",
            marginBottom: 44,
          }}>
            {/* Brand */}
            <div>
              <div style={{ marginBottom: 14 }}><Logo height={17} /></div>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: T.muted, maxWidth: 220, marginBottom: 20, ...ss }}>
                Creating digital excellence since 2023.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {CONNECT.map(({ href, ic }) => {
                  const IcComp = Ic[ic];
                  return (
                    <a key={ic} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ width: 30, height: 30, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: T.overlay, border: `1px solid ${T.border}`, color: T.muted, textDecoration: "none" }}
                      onMouseEnter={e => { e.currentTarget.style.color = T.primary; e.currentTarget.style.borderColor = T.borderHover; }}
                      onMouseLeave={e => { e.currentTarget.style.color = T.muted;   e.currentTarget.style.borderColor = T.border; }}>
                      <IcComp style={{ width: 13, height: 13 }} sw={1.75} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={colHeadStyle}>Services</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {COLS.Services.map(link => (
                  <li key={link.label}>
                    <button onClick={() => { navigate(link.to); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={linkStyle}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={colHeadStyle}>Company</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {COLS.Company.map(link => (
                  <li key={link.label}>
                    <button onClick={() => { navigate(link.to); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={linkStyle}>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 style={colHeadStyle}>Connect</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {CONNECT.map(link => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* ── MOBILE layout ───────────────────────────────────────────── */}
        {isMobile && (
          <div style={{ marginBottom: 36 }}>

            {/* Brand block */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ marginBottom: 12 }}><Logo height={16} /></div>
              <p style={{ fontSize: 12.5, lineHeight: 1.7, color: T.muted, marginBottom: 18, ...ss }}>
                Creating digital excellence since 2023.
              </p>
              {/* Social icons row */}
              <div style={{ display: "flex", gap: 8 }}>
                {CONNECT.map(({ href, ic }) => {
                  const IcComp = Ic[ic];
                  return (
                    <a key={ic} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ width: 34, height: 34, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: T.overlay, border: `1px solid ${T.border}`, color: T.muted, textDecoration: "none" }}
                      onMouseEnter={e => { e.currentTarget.style.color = T.primary; e.currentTarget.style.borderColor = T.borderHover; }}
                      onMouseLeave={e => { e.currentTarget.style.color = T.muted;   e.currentTarget.style.borderColor = T.border; }}>
                      <IcComp style={{ width: 14, height: 14 }} sw={1.75} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ✅ FIX: Services + Company side by side in 2-col grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px", marginBottom: 28 }}>
              {Object.entries(COLS).map(([heading, links]) => (
                <div key={heading}>
                  <h4 style={{ ...colHeadStyle, marginBottom: 14 }}>{heading}</h4>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                    {links.map(link => (
                      <li key={link.label}>
                        <button
                          onClick={() => { navigate(link.to); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          style={{ ...linkStyle, fontSize: 13 }}>
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ✅ FIX: Connect as a full-width row of text links — no orphaned column */}
            <div style={{ paddingTop: 24, borderTop: `1px solid ${T.border}` }}>
              <h4 style={{ ...colHeadStyle, marginBottom: 14 }}>Connect</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
                {CONNECT.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{ ...linkStyle, fontSize: 13 }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Bottom bar ─────────────────────────────────────────────── */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: 14,
          paddingTop: 24,
          borderTop: `1px solid ${T.border}`,
        }}>
          <p style={{ fontSize: 11.5, color: T.ghost, ...ss }}>
            © 2026 Idelyze. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: T.green, boxShadow: `0 0 6px ${T.green}` }} />
            <span style={{ fontSize: 11.5, color: T.ghost, ...ss }}>All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}