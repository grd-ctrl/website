import { useTranslation } from 'react-i18next'
import { CheckCircle, MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL'

const COLORS = {
  tealDark: '#1C3F41',
  teal: '#244C4E',
  tealMuted: '#6B8A8C',
  green: '#78B832',
  greenBg: '#EEF8E0',
}

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="blueprint-grid-white"
      style={{ minHeight: '100vh', padding: '32px 24px 40px', position: 'relative', overflow: 'hidden' }}
    >
      <div className="section-shell hero-layout" style={{ minHeight: 'calc(100vh - 72px)' }}>
        <div style={{ padding: '28px 0', position: 'relative' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: COLORS.greenBg,
              color: '#4E8A1E',
              borderRadius: '999px',
              padding: '10px 18px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '28px',
            }}
          >
            <span style={{ fontSize: '14px' }}>●</span>
            {t('hero.badge')}
          </div>

          <h1
            style={{
              margin: '0 0 24px',
              color: COLORS.tealDark,
              fontSize: 'clamp(52px, 6vw, 84px)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              maxWidth: '640px',
            }}
          >
            <span style={{ display: 'block' }}>{t('hero.headline')}</span>
            <span style={{ display: 'block', color: COLORS.green }}>{t('hero.headline2')}</span>
          </h1>

          <p
            style={{
              margin: '0 0 36px',
              maxWidth: '480px',
              color: COLORS.tealMuted,
              fontSize: '18px',
              lineHeight: 1.7,
            }}
          >
            {t('hero.sub')}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: COLORS.green,
                color: COLORS.tealDark,
                textDecoration: 'none',
                fontWeight: 800,
                padding: '16px 24px',
                borderRadius: '999px',
                boxShadow: '0 18px 40px rgba(120, 184, 50, 0.28)',
              }}
            >
              <MessageCircle size={18} />
              {t('hero.cta_primary')}
            </a>
            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1.5px solid ${COLORS.teal}`,
                color: COLORS.teal,
                textDecoration: 'none',
                fontWeight: 700,
                padding: '16px 24px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.78)',
              }}
            >
              {t('hero.cta_secondary')}
            </a>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: COLORS.tealMuted,
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
            }}
          >
            <CheckCircle size={16} style={{ color: COLORS.green }} />
            {t('hero.compat')}
          </div>
        </div>

        <div className="hero-media-wrap">
          <span className="blueprint-cross" style={{ top: '18px', left: '14px', color: 'rgba(28, 63, 65, 0.18)' }} />
          <span className="blueprint-cross" style={{ bottom: '18px', right: '14px', color: 'rgba(28, 63, 65, 0.18)' }} />

          <div className="hero-floating-bar">
            <img src="/website/logo.png" alt="GroundCTRL" style={{ height: '20px', width: 'auto' }} />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '13px' }}>GroundCTRL</div>
              <div style={{ color: 'rgba(255,255,255,0.58)', fontSize: '11px' }}>Scenario sync active</div>
            </div>
          </div>

          <div className="hero-photo-shell">
            <img
              src="/website/img-operator.jpg"
              alt="GroundCTRL operator in a control room"
              className="hero-photo-image"
            />
            <div className="hero-photo-overlay" />
          </div>

          <div className="hero-live-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="pulse-green" style={{ width: '10px', height: '10px', borderRadius: '999px', background: '#78B832' }} />
              <span style={{ color: '#78B832', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em' }}>
                LIVE
              </span>
            </div>
            <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 800, marginTop: '10px', letterSpacing: '-0.03em' }}>
              Control Room Alpha
            </div>
            <div style={{ color: 'rgba(255,255,255,0.66)', fontSize: '13px', marginTop: '6px' }}>
              Unified wall control, alerts and live operator workflows.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
