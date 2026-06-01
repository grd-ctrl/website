import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="blueprint-grid-dark" style={{ padding: '72px 24px 34px', position: 'relative', overflow: 'hidden' }}>
      <div className="section-shell">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <img src="/website/logo.png" alt="GroundCTRL" style={{ height: '28px', width: 'auto' }} />
              <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '22px', letterSpacing: '-0.03em' }}>
                Ground<span style={{ color: '#78B832' }}>CTRL</span>
              </div>
            </div>

            <div
              style={{
                maxWidth: '620px',
                marginBottom: '30px',
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(28px, 4vw, 36px)',
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                fontFamily: 'var(--font-display)',
              }}
            >
              {t('footer.tagline')}
            </div>
          </div>

          <div className="footer-links-grid">
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(120,184,50,0.72)',
                  marginBottom: '16px',
                }}
              >
                Navigation
              </div>
              <div style={{ display: 'grid', gap: '12px' }}>
                <a href="#features" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>{t('footer.links.features')}</a>
                <a href="#usecases" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>{t('footer.links.usecases')}</a>
                <a href="#pricing" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>{t('nav.pricing')}</a>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(120,184,50,0.72)',
                  marginBottom: '16px',
                }}
              >
                Action
              </div>
              <div style={{ display: 'grid', gap: '12px' }}>
                <Link to="/checkout" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>
                  {t('footer.links.checkout')}
                </Link>
                <a href="https://wa.me/+5585998614541" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>
                  {t('footer.links.contact')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '30px 0 16px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '16px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
            }}
          >
            {t('footer.copyright')}
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.58)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
            }}
          >
            <span className="pulse-green" style={{ width: '10px', height: '10px', borderRadius: '999px', background: '#78B832' }} />
            ONLINE
          </div>
        </div>
      </div>
    </footer>
  )
}
