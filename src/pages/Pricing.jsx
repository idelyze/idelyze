import { useState, useRef } from "react";
import { m, useInView, AnimatePresence } from "framer-motion";
import { useTheme } from "../App";
import { Ic, ss, sd } from "../theme";
import { Reveal, SectionHead, PageHero, PrimaryBtn, GhostBtn, ease } from "../components/Primitives";

const CATALOGUE = [
  {
    service: "UI/UX Design", icon: "Palette", color: "#E71C18",
    desc: "User-centred interfaces, wireframes, and prototypes that convert.",
    plans: [
      { name: "Essential",     price: "₹8,000",  period: "one-time",      highlight: false, desc: "Clean, functional UI for startups launching fast.",       features: ["Up to 5 screens","Wireframes + final design","1 revision round","Figma source file","Mobile-responsive layouts"] },
      { name: "Professional",  price: "₹18,000", period: "one-time",      highlight: true,  desc: "Full product design with prototype and handoff.",          features: ["Up to 15 screens","Wireframes + UI design","Clickable prototype","3 revision rounds","Design system components","Developer handoff notes"] },
      { name: "Enterprise",    price: "Custom",  period: "project-based", highlight: false, desc: "Complex platforms and multi-flow product design.",           features: ["Unlimited screens","UX research & audit","User journey mapping","Interactive prototype","Complete design system","Ongoing design support"] },
    ],
  },
  {
    service: "Web Development", icon: "Globe", color: "#3B82F6",
    desc: "Fast, scalable websites built with modern tech and clean code.",
    plans: [
      { name: "Starter",  price: "₹12,000", period: "one-time",      highlight: false, desc: "A polished landing page to get you online.",               features: ["Up to 5 pages","Mobile responsive","Contact form","Basic SEO setup","1 month support","Fast hosting-ready"] },
      { name: "Growth",   price: "₹28,000", period: "one-time",      highlight: true,  desc: "Full-featured website with CMS and animations.",            features: ["Up to 12 pages","CMS integration","Custom animations","Advanced SEO setup","WhatsApp / lead forms","3 months support","Speed optimisation"] },
      { name: "Studio",   price: "Custom",  period: "project-based", highlight: false, desc: "Web platforms, portals, and custom integrations.",           features: ["Unlimited pages","E-commerce / portal","Custom backend logic","API integrations","Performance monitoring","Priority support"] },
    ],
  },
  {
    service: "SEO", icon: "BarChart", color: "#10B981",
    desc: "Strategic SEO that compounds — more visibility, more leads.",
    plans: [
      { name: "Basic",     price: "₹5,000",  period: "/ month", highlight: false, desc: "Essential on-page SEO for new or small websites.",        features: ["Keyword research (20 terms)","On-page optimisation","Meta tags & titles","XML sitemap","Monthly report","Google Search Console setup"] },
      { name: "Growth",    price: "₹12,000", period: "/ month", highlight: true,  desc: "Full strategy — on-page, off-page, and content-driven.",   features: ["Keyword research (60 terms)","On + off-page SEO","3 blog posts / month","Backlink building","Core Web Vitals fix","Competitor analysis","Fortnightly report"] },
      { name: "Authority", price: "₹22,000", period: "/ month", highlight: false, desc: "Aggressive growth SEO for competitive markets.",            features: ["Unlimited keywords","Full technical audit","8 blog posts / month","Premium backlinks","Local SEO","Schema markup","Weekly report + call"] },
    ],
  },
  {
    service: "Branding", icon: "Brain", color: "#8B5CF6",
    desc: "Logos, visual systems, and brand identity built to last.",
    plans: [
      { name: "Identity",   price: "₹7,000",  period: "one-time",      highlight: false, desc: "A strong logo and palette for new brands.",               features: ["Logo design (3 concepts)","Colour palette","Typography selection","2 revision rounds","PNG / SVG files","Basic brand guidelines"] },
      { name: "Brand Kit",  price: "₹18,000", period: "one-time",      highlight: true,  desc: "Complete visual identity and usage guide.",                features: ["Logo + variations","Full colour system","Typography system","Brand voice guide","Business card design","Social templates","Brand guidelines PDF"] },
      { name: "Full Brand", price: "Custom",  period: "project-based", highlight: false, desc: "Enterprise branding across every touchpoint.",             features: ["Everything in Brand Kit","Brand strategy & positioning","Packaging design","Brand motion / animations","Pitch deck design","Ongoing brand consultancy"] },
    ],
  },
  {
    service: "Social Media", icon: "Layers", color: "#F59E0B",
    desc: "Instagram & Facebook content that stops the scroll.",
    plans: [
      { name: "Starter", price: "₹6,000",  period: "/ month", highlight: false, desc: "Consistent posting to keep your brand visible.",          features: ["8 posts / month","Instagram + Facebook","Caption copywriting","Hashtag strategy","Basic analytics report","Story templates (4/month)"] },
      { name: "Growth",  price: "₹12,000", period: "/ month", highlight: true,  desc: "Full content calendar with design and strategy.",          features: ["16 posts / month","Reels / short video (4/month)","Custom graphic design","Caption + hashtag strategy","Engagement management","Monthly analytics","Content calendar"] },
      { name: "Agency",  price: "₹22,000", period: "/ month", highlight: false, desc: "Full social management — strategy, content, and ads.",     features: ["24 posts / month","8 reels / month","Paid ad management","Influencer coordination","Community management","Campaign planning","Weekly performance report"] },
    ],
  },
  {
    service: "Digital Systems", icon: "Zap", color: "#06B6D4",
    desc: "Strategy, design, and tech unified into one digital system.",
    plans: [
      { name: "Launch",    price: "₹25,000", period: "one-time",      highlight: false, desc: "Everything a new brand needs to launch online.",          features: ["Brand identity (logo + palette)","5-page website","Basic SEO setup","Social media setup (2 platforms)","1 month support","Google My Business setup"] },
      { name: "Scale",     price: "₹55,000", period: "one-time",      highlight: true,  desc: "Complete digital system — brand, web, SEO, and social.",  features: ["Full brand identity kit","Up to 12-page website","Advanced SEO (3 months)","Social media kit + strategy","CMS integration","Analytics setup","3 months priority support"] },
      { name: "Dominate",  price: "Custom",  period: "project-based", highlight: false, desc: "Enterprise presence built for long-term leadership.",       features: ["Everything in Scale","Custom web platform / portal","Ongoing SEO management","Full social media management","Paid ad strategy","Monthly strategy calls","Dedicated account manager"] },
    ],
  },
];

function PlanCard({ plan, accentColor, T }) {
  const isH = plan.highlight;
  const bg       = isH ? accentColor : T.surface;
  const txtMain  = isH ? "#fff" : T.primary;
  const txtSub   = isH ? "rgba(255,255,255,0.78)" : T.secondary;
  const txtMuted = isH ? "rgba(255,255,255,0.6)"  : T.muted;
  const chkBg    = isH ? "rgba(255,255,255,0.2)"  : `${accentColor}15`;
  const chkClr   = isH ? "#fff" : accentColor;

  return (
    <div style={{ flex: 1, minWidth: 0, borderRadius: 18, padding: 26, display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", background: bg, border: `1px solid ${isH ? accentColor : T.border}`, boxShadow: isH ? `0 20px 60px ${accentColor}30` : T.cardShadow }}>
      {isH && <div style={{ position: "absolute", top: 14, right: 14, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 50, background: "rgba(255,255,255,0.22)", color: "#fff", ...ss }}>Popular</div>}
      <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: txtMuted, marginBottom: 10, ...ss }}>{plan.name}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
        <span style={{ fontSize: "clamp(1.8rem,2.5vw,2.3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: txtMain, ...sd }}>{plan.price}</span>
        {plan.price !== "Custom" && <span style={{ fontSize: 12, color: txtMuted, ...ss }}>{plan.period}</span>}
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: txtSub, marginBottom: 22, ...ss }}>{plan.desc}</p>
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9, flex: 1, marginBottom: 22 }}>
        {plan.features.map(f => (
          <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: txtSub, ...ss }}>
            <div style={{ width: 15, height: 15, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, background: chkBg }}>
              <Ic.Check style={{ width: 8, height: 8, color: chkClr }} sw={3} />
            </div>
            {f}
          </li>
        ))}
      </ul>
      <a href="#"
        onClick={e => { e.preventDefault(); const el = document.getElementById("contact-page"); if (el) el.scrollIntoView({ behavior: "smooth" }); window.location.hash = "/contact"; }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 18px", borderRadius: 10, fontSize: 13.5, fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s", cursor: "pointer", background: isH ? "#fff" : accentColor, color: isH ? accentColor : "#fff", ...ss }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
        {plan.price === "Custom" ? "Let's talk" : "Get started"} <Ic.ArrowRight style={{ width: 13, height: 13 }} />
      </a>
    </div>
  );
}

export default function Pricing() {
  const { T } = useTheme();
  const [active, setActive] = useState(0);
  const current = CATALOGUE[active];
  const IcComp  = Ic[current.icon];

  return (
    <div style={{ background: T.bg }}>
      <PageHero T={T}
        eyebrow="Pricing"
        title={<>Transparent pricing<br />for every service.</>}
        sub="No hidden fees. Pick your service, pick your tier. Every package is designed to deliver real value at every budget." />

      <section style={{ background: T.bg, padding: "0 0 112px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>

          {/* Service tabs */}
          <Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 48 }}>
              {CATALOGUE.map((cat, i) => {
                const TabIc = Ic[cat.icon];
                const isActive = i === active;
                return (
                  <m.button key={cat.service} onClick={() => setActive(i)}
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 16px", borderRadius: 50, fontSize: 13, fontWeight: isActive ? 600 : 500, cursor: "pointer", transition: "all 0.2s ease", background: isActive ? T.accent : T.surface, color: isActive ? "#fff" : T.muted, border: `1px solid ${isActive ? T.accent : T.border}`, boxShadow: isActive ? `0 4px 20px rgba(231,28,24,0.25)` : T.cardShadow, ...ss }}>
                    <TabIc style={{ width: 13, height: 13 }} sw={2} />
                    {cat.service}
                  </m.button>
                );
              })}
            </div>
          </Reveal>

          {/* Active service content */}
          <AnimatePresence mode="wait">
            <m.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease }}>
              {/* Service strip */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36, maxWidth: 680, margin: "0 auto 36px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: `${current.color}15`, border: `1px solid ${current.color}30` }}>
                  <IcComp style={{ width: 18, height: 18, color: current.color }} sw={1.75} />
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: current.color, marginBottom: 3, ...ss }}>{current.service}</p>
                  <p style={{ fontSize: 14, color: T.secondary, ...ss }}>{current.desc}</p>
                </div>
              </div>

              {/* Plan cards */}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", maxWidth: 980, margin: "0 auto" }}>
                {current.plans.map(plan => (
                  <PlanCard key={plan.name} plan={plan} accentColor={current.color} T={T} />
                ))}
              </div>
            </m.div>
          </AnimatePresence>

          {/* Bottom note */}
          <Reveal delay={0.2}>
            <p style={{ textAlign: "center", fontSize: 13, color: T.muted, marginTop: 48, ...ss }}>
              Not sure which plan fits?{" "}
              <PrimaryBtn T={T} to="/contact" size="md">
                Let's talk — we'll recommend the right one
              </PrimaryBtn>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
