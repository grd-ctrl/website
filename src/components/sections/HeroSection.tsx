import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Send } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const COLORS = {
  tealDark: "#1C3F41",
  teal: "#244C4E",
  tealMuted: "#6B8A8C",
  green: "#78B832",
  greenBg: "#EEF8E0",
};

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const heroStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

export function HeroSection() {
  const { t } = useTranslation();

  // 3-D parallax on media column
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [8, -8]), { stiffness: 180, damping: 28 });
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [-6, 6]), { stiffness: 180, damping: 28 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="blueprint-grid-white"
      style={{ minHeight: "100vh", padding: "32px 24px 40px", position: "relative", overflow: "hidden" }}
    >
      {/* animated scan line */}
      <div className="hero-scan-line" />

      <div className="section-shell hero-layout" style={{ minHeight: "calc(100vh - 72px)" }}>

        {/* ── Left column ── stagger entrance on mount */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          style={{ padding: "28px 0", position: "relative" }}
        >
          {/* Badge */}
          <motion.div variants={heroItem}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: COLORS.greenBg,
                color: "#4E8A1E",
                borderRadius: "999px",
                padding: "10px 18px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: "28px",
              }}
            >
              <span style={{ fontSize: "14px" }}>●</span>
              {t("hero.badge")}
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={heroItem}
            style={{
              margin: "0 0 24px",
              color: COLORS.tealDark,
              fontSize: "clamp(52px, 6vw, 84px)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              maxWidth: "640px",
            }}
          >
            <span style={{ display: "block" }}>{t("hero.headline")}</span>
            <span
              className="btn-shimmer"
              style={{
                display: "block",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("hero.headline2")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroItem}
            style={{ margin: "0 0 36px", maxWidth: "480px", color: COLORS.tealMuted, fontSize: "18px", lineHeight: 1.7 }}
          >
            {t("hero.sub")}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={heroItem} style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "28px" }}>
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Link
                to="/demo"
                className="btn-shimmer btn-glow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: COLORS.tealDark,
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "16px",
                  padding: "16px 24px",
                  borderRadius: "999px",
                }}
              >
                <Send size={18} />
                {t("hero.cta_primary")}
              </Link>
            </motion.div>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1.5px solid ${COLORS.teal}`,
                color: COLORS.teal,
                textDecoration: "none",
                fontWeight: 700,
                padding: "16px 24px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.78)",
              }}
            >
              {t("hero.cta_secondary")}
            </motion.a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={heroItem}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: COLORS.tealMuted, fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.08em" }}
          >
            <CheckCircle size={16} style={{ color: COLORS.green }} />
            {t("hero.compat")}
          </motion.div>
        </motion.div>

        {/* ── Right column ── parallax media */}
        <motion.div
          className="hero-media-wrap"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: "1200px" }}
        >
          <span className="blueprint-cross" style={{ top: "18px", left: "14px", color: "rgba(28, 63, 65, 0.18)" }} />
          <span className="blueprint-cross" style={{ bottom: "18px", right: "14px", color: "rgba(28, 63, 65, 0.18)" }} />

          {/* Floating status bar */}
          <motion.div
            className="hero-floating-bar"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease }}
          >
            <img src="/website/logo.png" alt="GroundCTRL" style={{ height: "20px", width: "auto" }} />
            <div>
              <div style={{ color: "#ffffff", fontWeight: 800, fontSize: "13px" }}>GroundCTRL</div>
              <div style={{ color: "rgba(255,255,255,0.58)", fontSize: "11px" }}>Scenario sync active</div>
            </div>
          </motion.div>

          {/* Photo with 3-D tilt */}
          <motion.div style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}>
            <div className="hero-photo-shell">
              <img src="/website/img-hero.jpg" alt="GroundCTRL operator in a control room" className="hero-photo-image" />
              <div className="hero-photo-overlay" />
            </div>
          </motion.div>

          {/* Live card — entrance then CSS float */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0, ease }}
          >
            <div className="hero-live-card float-card">
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="pulse-green" style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#78B832" }} />
                <span style={{ color: "#78B832", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em" }}>LIVE</span>
              </div>
              <div style={{ color: "#ffffff", fontSize: "20px", fontWeight: 800, marginTop: "10px", letterSpacing: "-0.03em" }}>
                Control Room Alpha
              </div>
              <div style={{ color: "rgba(255,255,255,0.66)", fontSize: "13px", marginTop: "6px" }}>
                Unified wall control, alerts and live operator workflows.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
