import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo, Ic, ss } from "../theme";

const NAV_LINKS = [
  { label: "Home",     to: "/"         },
  { label: "About",    to: "/about"    },
  { label: "Services", to: "/services" },
  { label: "Pricing",  to: "/pricing"  },
  { label: "Careers",  to: "/careers"  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Navbar({ T, dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const goTo = (to) => {
    setOpen(false);
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const themeLabel = dark ? "Switch to Day mode" : "Switch to Night mode";

  return (
    <>
      <m.header
        role="banner"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? T.navBg : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
          padding: `${scrolled ? 10 : 17}px 0`,
          transition: "all 0.4s ease",
        }}>
        <nav
          aria-label="Main navigation"
          style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button
            onClick={() => goTo("/")}
            aria-label="Idelyze — go to homepage"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
            <Logo height={19} />
          </button>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", gap: 2, alignItems: "center" }} role="list">
            {NAV_LINKS.map(l => (
              <button
                key={l.label}
                role="listitem"
                onClick={() => goTo(l.to)}
                aria-current={isActive(l.to) ? "page" : undefined}
                style={{
                  color: isActive(l.to) ? T.accent : T.muted,
                  fontSize: 13, fontWeight: isActive(l.to) ? 600 : 500,
                  padding: "6px 13px", borderRadius: 8,
                  transition: "color 0.15s", background: "none", border: "none",
                  cursor: "pointer", ...ss,
                }}
                onMouseEnter={e => { if (!isActive(l.to)) e.currentTarget.style.color = T.primary; }}
                onMouseLeave={e => { if (!isActive(l.to)) e.currentTarget.style.color = T.muted; }}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <m.button
              onClick={toggleDark}
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
              aria-label={themeLabel}
              title={themeLabel}
              style={{ width: 34, height: 34, borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", background: T.overlay, border: `1px solid ${T.border}`, cursor: "pointer", color: T.muted, transition: "all 0.2s" }}>
              {dark
                ? <Ic.Sun  style={{ width: 14, height: 14 }} aria-hidden="true" />
                : <Ic.Moon style={{ width: 14, height: 14 }} aria-hidden="true" />}
            </m.button>

            <m.button
              onClick={() => goTo("/contact")}
              whileHover={{ scale: 1.015, boxShadow: `0 0 0 3px ${T.accentRing}` }}
              whileTap={{ scale: 0.985 }}
              aria-label="Start a project — go to contact page"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 18px", fontSize: 13, fontWeight: 600, borderRadius: 10, background: T.accent, color: "#fff", border: "none", cursor: "pointer", boxShadow: `0 1px 3px rgba(231,28,24,0.3), inset 0 1px 0 rgba(255,255,255,0.18)`, ...ss }}>
              Start a Project
            </m.button>
          </div>

          {/* Mobile row */}
          <div className="nav-mobile" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <m.button
              onClick={toggleDark}
              whileTap={{ scale: 0.9 }}
              aria-label={themeLabel}
              title={themeLabel}
              style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: T.overlay, border: `1px solid ${T.border}`, cursor: "pointer", color: T.muted }}>
              {dark
                ? <Ic.Sun  style={{ width: 14, height: 14 }} aria-hidden="true" />
                : <Ic.Moon style={{ width: 14, height: 14 }} aria-hidden="true" />}
            </m.button>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: T.overlay, border: `1px solid ${T.border}`, cursor: "pointer", color: T.muted }}>
              {open
                ? <Ic.X    style={{ width: 16, height: 16 }} aria-hidden="true" />
                : <Ic.Menu style={{ width: 16, height: 16 }} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </m.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.18 }}
            style={{ position: "fixed", top: 66, left: 12, right: 12, zIndex: 99, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, padding: 16, boxShadow: T.shadow }}>
            {NAV_LINKS.map(l => (
              <button
                key={l.label}
                onClick={() => goTo(l.to)}
                aria-current={isActive(l.to) ? "page" : undefined}
                style={{ display: "block", width: "100%", textAlign: "left", color: isActive(l.to) ? T.accent : T.secondary, fontSize: 14, fontWeight: isActive(l.to) ? 600 : 500, padding: "11px 12px", borderRadius: 8, background: "none", border: "none", cursor: "pointer", ...ss }}>
                {l.label}
              </button>
            ))}
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${T.border}` }}>
              <m.button
                onClick={() => goTo("/contact")}
                whileTap={{ scale: 0.985 }}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 20px", fontSize: 14, fontWeight: 600, borderRadius: 10, background: T.accent, color: "#fff", border: "none", cursor: "pointer", ...ss }}>
                Start a Project
              </m.button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
