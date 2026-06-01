import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { Check, Send } from 'lucide-react'

const included = [
  'Unlimited action tiles per room',
  'Barco CTRL API integration',
  'iPad & Android tablet support',
  'Multi-user role-based access',
  'Priority onboarding support',
  'International deployment ready',
]

export function PricingSection() {
  const { t } = useTranslation()

  return (
    <section id="pricing" style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div className="section-shell" style={{ maxWidth: '860px', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#78B832',
            marginBottom: '16px',
          }}
        >
          // {t('pricing.label')}
        </div>
        <h2
          style={{
            margin: '0 0 14px',
            color: '#1C3F41',
            fontSize: 'clamp(40px, 5vw, 56px)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
          }}
        >
          {t('pricing.title')}
        </h2>
        <p style={{ margin: '0 auto 36px', maxWidth: '620px', color: '#6B8A8C', fontSize: '17px', lineHeight: 1.7 }}>
          {t('pricing.subtitle')}
        </p>

        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            border: '2px solid #1C3F41',
            borderRadius: '24px',
            overflow: 'hidden',
            background: '#ffffff',
            boxShadow: '0 24px 48px rgba(28,63,65,0.1)',
            textAlign: 'left',
          }}
        >
          <div style={{ background: '#1C3F41', padding: '30px 30px 28px', color: '#ffffff' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(120,184,50,0.8)',
                marginBottom: '14px',
              }}
            >
              Enterprise License
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '60px', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
              Custom
            </div>
            <div style={{ color: 'rgba(255,255,255,0.68)', marginTop: '8px', fontSize: '15px' }}>{t('pricing.note')}</div>
          </div>

          <div style={{ padding: '28px 30px 30px' }}>
            <div style={{ display: 'grid', gap: '14px', marginBottom: '28px' }}>
              {included.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '999px',
                      background: '#EEF8E0',
                      color: '#78B832',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={14} />
                  </span>
                  <span style={{ color: '#244C4E', fontSize: '15px', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/checkout"
              style={{
                display: 'inline-flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                background: '#78B832',
                color: '#1C3F41',
                textDecoration: 'none',
                padding: '16px 24px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '16px',
              }}
            >
              <Send size={18} />
              {t('pricing.cta')}
            </Link>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
                flexWrap: 'wrap',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.08em',
                color: '#6B8A8C',
                textTransform: 'uppercase',
              }}
            >
              <span>{t('pricing.note')}</span>
              <span>·</span>
              <Link to="/checkout" style={{ color: '#1C3F41', textDecoration: 'none' }}>
                {t('pricing.checkout_link')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
