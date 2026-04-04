import { useState, createContext, useContext, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation, m, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { LIGHT, DARK } from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ─── LAZY LOAD ALL PAGES ────────────────────────────────────────────────────── */
const Home     = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Pricing  = lazy(() => import("./pages/Pricing"));
const Contact  = lazy(() => import("./pages/Contact"));
const About    = lazy(() => import("./pages/About"));
const Careers  = lazy(() => import("./pages/Careers"));

/* ─── THEME CONTEXT ─────────────────────────────────────────────────────────── */
export const ThemeCtx = createContext();
export const useTheme = () => useContext(ThemeCtx);

/* ─── SCROLL TO TOP ON ROUTE CHANGE ─────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

/* ─── PAGE LOADING FALLBACK ──────────────────────────────────────────────────── */
function PageFallback({ T }) {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: T.bg }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", border: `3px solid ${T.accentDim}`, borderTopColor: "#E71C18", animation: "spin 0.7s linear infinite" }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/* ─── INTRO ANIMATION ────────────────────────────────────────────────────────── 
   WHY IT EXISTS: This plays once when the site first loads, shows the Idelyze 
   logo with a red progress bar, then fades out to reveal the page underneath.
   It's a brand moment — like a TV channel ident. onDone() removes it.
───────────────────────────────────────────────────────────────────────────────── */
function Intro({ onDone }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Hold logo for 1.6s, then start exit, fully done at 2.2s
    const t1 = setTimeout(() => setExiting(true), 1600);
    const t2 = setTimeout(() => onDone(), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <m.div
          key="intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "#06080F",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 20,
          }}>
          {/* Logo reveal */}
          <m.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            {/* Inline logo so it works before fonts load */}
            <svg height={38} viewBox="886 270 2257 510" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
              <path d="M886.2 727.1V277L971.6 329.5V773.3L886.2 727.1ZM1217.58 771.2L1131.48 725L1045.38 771.2V274.9L1131.48 327.4L1217.58 274.9L1389.78 373.6V671.8L1217.58 771.2ZM1217.58 373.6L1131.48 426.8V625.6L1217.58 671.8L1303.68 625.6V426.8L1217.58 373.6ZM1460.34 372.2L1632.54 273.5L1804.74 372.2L1718.64 419.1L1632.54 372.2L1546.44 425.4L1718.64 524.8L1632.54 571L1546.44 524.8V624.2L1632.54 670.4L1804.74 571V670.4L1632.54 769.8L1460.34 670.4V372.2ZM1856.06 333.7L1942.16 281.2V631.9L2027.56 678.1V777.5L1856.06 678.1V333.7ZM1976.32 475.1V323.2L2062.42 276.3V421.9L2149.22 475.1L2235.32 421.9V276.3L2320.72 323.2V673.9L2149.22 773.3L2062.42 720.1L2235.32 620.7V521.3L2149.22 574.5C2089.72 541.6 2036.52 508.7 1976.32 475.1ZM2554.67 377.1V476.5L2467.87 522.7V622.1L2554.67 675.3V694.9L2653.37 635.4L2726.17 675.3L2554.67 774.7L2381.77 675.3V476.5C2434.97 442.9 2494.47 410 2554.67 377.1ZM2554.67 675.3L2726.17 575.9V377.1L2554.67 277.7L2381.77 377.1L2447.57 417L2554.67 357.5V377.1L2640.07 423.3V522.7C2613.47 536 2593.87 549.3 2554.67 575.9V675.3ZM2796.76 372.2L2968.96 273.5L3141.16 372.2L3055.06 419.1L2968.96 372.2L2882.86 425.4L3055.06 524.8L2968.96 571L2882.86 524.8V624.2L2968.96 670.4L3141.16 571V670.4L2968.96 769.8L2796.76 670.4V372.2Z" fill="#E71C18"/>
            </svg>
          </m.div>

          {/* Tagline */}
          <m.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 0.4, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ color: "#F0F2FF", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--fs, sans-serif)" }}>
            Digital Systems · Design Studio
          </m.p>

          {/* Progress bar — sweeps left to right in 1.4s */}
          <m.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: 2, background: "#E71C18", transformOrigin: "left",
            }}
          />
        </m.div>
      )}
    </AnimatePresence>
  );
}

/* ─── CUSTOM CURSOR ──────────────────────────────────────────────────────────── 
   WHY IT EXISTS: Replaces the default OS cursor with a branded red dot + ring.
   The CSS sets cursor:none, this component draws the replacement.
   Only shown on desktop mouse — hidden on touch/mobile automatically.
───────────────────────────────────────────────────────────────────────────────── */
function CustomCursor({ T }) {
  // Mouse position — dot follows instantly
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  // Ring follows with spring lag for smooth trailing feel
  const ringX = useSpring(dotX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(dotY, { stiffness: 120, damping: 22 });
  // Dot snaps fast with minimal lag
  const snapX = useSpring(dotX, { stiffness: 500, damping: 40 });
  const snapY = useSpring(dotY, { stiffness: 500, damping: 40 });

  const [hovered, setHovered] = useState(false);
  const [visible, setVisible]  = useState(false);

  useEffect(() => {
    const onMove = e => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onOver = e => setHovered(!!e.target.closest("a, button, [role='button'], [data-cursor]"));
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  const base = {
    position: "fixed", top: 0, left: 0,
    pointerEvents: "none", zIndex: 99999,
    translateX: "-50%", translateY: "-50%",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.2s ease",
  };

  return (
    <>
      {/* Red dot — snaps to cursor instantly */}
      <m.div style={{
        ...base,
        x: snapX, y: snapY,
        width: 8, height: 8,
        borderRadius: "50%",
        background: T.accent,
      }} />
      {/* Ring — trails behind with spring, grows on hover */}
      <m.div style={{
        ...base,
        x: ringX, y: ringY,
        width: hovered ? 44 : 30,
        height: hovered ? 44 : 30,
        borderRadius: "50%",
        border: `1.5px solid ${T.accent}`,
        opacity: visible ? (hovered ? 0.7 : 0.35) : 0,
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
      }} />
    </>
  );
}

/* ─── ROOT APP ───────────────────────────────────────────────────────────────── */
export default function App() {
  const [dark, setDark]   = useState(false);
  const [ready, setReady] = useState(false); // false = intro playing, true = site visible
  const T = dark ? DARK : LIGHT;

  return (
    <ThemeCtx.Provider value={{ T, dark, toggleDark: () => setDark(d => !d) }}>
      <LazyMotion features={domAnimation} strict>
        <>
          <style>{`
            /* ── Reset ── */
            *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
            html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
            :root { --fd: 'Bricolage Grotesque', system-ui, sans-serif; --fs: 'DM Sans', system-ui, sans-serif; }
            body { overflow-x: hidden; background: ${T.bg}; transition: background 0.3s ease; }

            /* ── Custom cursor — only on mouse devices, never on touch ── */
            @media (hover: hover) and (pointer: fine) {
              body, a, button, [role="button"] { cursor: none !important; }
            }

            /* ── Skip to main content ── */
            .skip-link {
              position: absolute; top: -100px; left: 16px; z-index: 99999;
              background: #E71C18; color: #fff; padding: 10px 18px;
              border-radius: 8px; font-size: 14px; font-weight: 600;
              font-family: var(--fs); text-decoration: none;
              transition: top 0.15s ease;
            }
            .skip-link:focus { top: 16px; }

            /* ── Focus indicator for keyboard navigation ── */
            :focus { outline: none; }
            :focus-visible { outline: 2px solid #E71C18; outline-offset: 3px; border-radius: 6px; }

            /* ── Scrollbar ── */
            ::-webkit-scrollbar       { width: 4px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: rgba(231,28,24,0.25); border-radius: 10px; }
            ::-webkit-scrollbar-thumb:hover { background: rgba(231,28,24,0.45); }
            ::selection { background: rgba(231,28,24,0.18); color: inherit; }

            /* ── Reduced motion ── */
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }

            /* ── Responsive nav helpers ── */
            .nav-desktop { display: flex !important; }
            .nav-mobile  { display: none  !important; }
            @media (max-width: 768px) {
              .nav-desktop { display: none  !important; }
              .nav-mobile  { display: flex  !important; }
            }

            /* ── Spinner for lazy page fallback ── */
            @keyframes spin { to { transform: rotate(360deg); } }
          `}</style>

          {/* 1. Intro plays first — onDone sets ready=true which shows the site */}
          <Intro onDone={() => setReady(true)} />

          {/* 2. Custom cursor — always rendered but only visible on mouse devices */}
          <CustomCursor T={T} />

          {/* 3. Main site — fades in after intro completes */}
          <AnimatePresence>
            {ready && (
              <m.div
                key="site"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}>
                <BrowserRouter>
                  <ScrollToTop />
                  <a href="#main-content" className="skip-link">Skip to main content</a>
                  <div style={{ background: T.bg, minHeight: "100vh", transition: "background 0.3s ease" }}>
                    <Navbar T={T} dark={dark} toggleDark={() => setDark(d => !d)} />
                    <main id="main-content">
                      <Suspense fallback={<PageFallback T={T} />}>
                        <Routes>
                          <Route path="/"         element={<Home />}     />
                          <Route path="/services" element={<Services />} />
                          <Route path="/pricing"  element={<Pricing />}  />
                          <Route path="/contact"  element={<Contact />}  />
                          <Route path="/about"    element={<About />}    />
                          <Route path="/careers"  element={<Careers />}  />
                        </Routes>
                      </Suspense>
                    </main>
                    <Footer T={T} />
                  </div>
                </BrowserRouter>
              </m.div>
            )}
          </AnimatePresence>
        </>
      </LazyMotion>
    </ThemeCtx.Provider>
  );
}
