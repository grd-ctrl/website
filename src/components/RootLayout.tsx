import { Outlet, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useFeedbackWidget } from "featurebase-js/react";
import { MotionConfig } from "framer-motion";

const TD = "#1C3F41";
const TM = "#6B8A8C";
const GR = "#78B832";
const BD = "#D4DCEC";

export function RootLayout() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useFeedbackWidget({ theme: "light" });

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("s");
    if (s) {
      setTimeout(
        () =>
          document.getElementById(s)?.scrollIntoView({ behavior: "smooth" }),
        100,
      );
    }
  }, []);

  const scrollToSection = (key: string) => {
    const el = document.getElementById(key);
    if (el) {
      // On home page — just scroll, update URL without triggering router
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
      window.history.replaceState(null, "", `?s=${key}${window.location.hash}`);
    } else {
      // On another page — navigate home with section param
      window.location.href = `?s=${key}#/`;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div style={{ minHeight: "100vh", background: "#fff", color: "#244C4E" }}>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(8px)",
            borderBottom: `1px solid ${BD}`,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 24px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <img
                src="/website/logo.png"
                alt="GroundCTRL"
                style={{ height: "48px", width: "auto", flexShrink: 0 }}
              />
              <span className="logo-text">
                <span className="logo-ground">Ground</span>
                <span className="logo-ctrl">CTRL</span>
              </span>
            </Link>

            <nav
              className="nav-desktop"
              style={{ alignItems: "center", gap: "28px" }}
            >
              {(["features", "usecases", "demo", "pricing"] as const).map(
                (key) => (
                  <a
                    key={key}
                    href="javascript:void(0)"
                    onClick={() => scrollToSection(key)}
                    style={{
                      fontSize: "14px",
                      color: TM,
                      textDecoration: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "color .15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = TD)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = TM)}
                  >
                    {t(`nav.${key}`)}
                  </a>
                ),
              )}
              <Link
                to="/checkout"
                style={{
                  fontSize: "14px",
                  color: TM,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = TD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = TM)}
              >
                {t("nav.checkout")}
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="nav-desktop" style={{ alignItems: "center", gap: "12px" }}>
              <Link
                to="/demo"
                style={{
                  background: GR,
                  color: TD,
                  padding: "8px 20px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "background .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#5E9A2C")}
                onMouseLeave={(e) => (e.currentTarget.style.background = GR)}
              >
                {t("nav.contact")}
              </Link>
            </div>

            {/* Mobile: Request Demo + hamburger */}
            <div className="nav-mobile" style={{ alignItems: "center", gap: "12px" }}>
              <Link
                to="/demo"
                style={{
                  background: GR,
                  color: TD,
                  padding: "9px 18px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#5E9A2C")}
                onMouseLeave={(e) => (e.currentTarget.style.background = GR)}
              >
                {t("nav.contact")}
              </Link>
              <button
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: TD,
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div
              style={{
                borderTop: `1px solid ${BD}`,
                padding: "16px 24px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                background: "#fff",
              }}
            >
              {(["features", "usecases", "demo", "pricing"] as const).map(
                (key) => (
                  <a
                    key={key}
                    href="javascript:void(0)"
                    style={{
                      fontSize: "15px",
                      color: TD,
                      textDecoration: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      scrollToSection(key);
                      setMenuOpen(false);
                    }}
                  >
                    {t(`nav.${key}`)}
                  </a>
                ),
              )}
              <Link
                to="/checkout"
                style={{
                  fontSize: "15px",
                  color: TD,
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.checkout")}
              </Link>
            </div>
          )}
        </header>

        <main style={{ paddingTop: "64px" }}>
          <Outlet />
        </main>
      </div>
    </MotionConfig>
  );
}
