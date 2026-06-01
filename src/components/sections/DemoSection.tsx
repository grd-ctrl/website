import { useTranslation } from 'react-i18next'
import { MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL'

export function DemoSection() {
  const { t } = useTranslation()

  return (
    <section
      id="demo"
      style={{
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/website/img-dashboard.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 30, 30, 0.85)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <span className="blueprint-cross" style={{ left: '5%', top: '50%', color: 'rgba(255,255,255,0.12)' }} />
      <span className="blueprint-cross" style={{ right: '5%', top: '50%', color: 'rgba(255,255,255,0.12)' }} />

      <div className="section-shell" style={{ textAlign: 'center', maxWidth: '860px' }}>
        <h2
          style={{
            margin: '0 0 14px',
            color: '#ffffff',
            fontSize: 'clamp(46px, 6vw, 74px)',
            lineHeight: 0.98,
            letterSpacing: '-0.04em',
          }}
        >
          {t('demo.title')}
        </h2>
        <p style={{ margin: '0 auto 30px', maxWidth: '660px', color: 'rgba(255,255,255,0.68)', fontSize: '18px', lineHeight: 1.7 }}>
          {t('demo.subtitle')}
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#78B832',
            color: '#1C3F41',
            textDecoration: 'none',
            padding: '18px 28px',
            borderRadius: '999px',
            fontWeight: 800,
            boxShadow: '0 24px 42px rgba(120,184,50,0.22)',
          }}
        >
          <MessageCircle size={20} />
          {t('demo.cta')}
        </a>

        <div
          style={{
            marginTop: '18px',
            color: 'rgba(255,255,255,0.68)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.12em',
          }}
        >
          No setup fee. Deploy in minutes.
        </div>
      </div>
    </section>
  )
}
