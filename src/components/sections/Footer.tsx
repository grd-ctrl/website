import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { LayoutGrid } from 'lucide-react'

const TD = '#1C3F41'
const TM_LIGHT = '#A8C0C2'
const GR = '#78B832'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{ background: TD, padding: '64px 24px 40px', borderTop: `4px solid ${GR}` }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Top row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', alignItems: 'flex-start' }}>

            {/* Brand */}
            <div style={{ maxWidth: '320px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '7px', background: GR, display: 'flex', alignItems: 'center', justifyContent: 'center', color: TD }}>
                  <LayoutGrid size={15} />
                </div>
                <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em', color: '#fff' }}>
                  Ground<span style={{ color: GR }}>CTRL</span>
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.6, color: TM_LIGHT }}>
                {t('footer.tagline')}
              </p>
            </div>

            {/* Nav */}
            <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 32px' }}>
              {(['features', 'usecases', 'checkout', 'contact'] as const).map((key) =>
                key === 'checkout' ? (
                  <Link key={key} to="/checkout"
                    style={{ fontSize: '14px', textDecoration: 'none', color: TM_LIGHT, fontWeight: 500, transition: 'color .15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = TM_LIGHT)}
                  >{t(`footer.links.${key}`)}</Link>
                ) : (
                  <a key={key}
                    href={key === 'contact' ? 'https://wa.me/+5585998614541' : `#${key}`}
                    style={{ fontSize: '14px', textDecoration: 'none', color: TM_LIGHT, fontWeight: 500, transition: 'color .15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = TM_LIGHT)}
                  >{t(`footer.links.${key}`)}</a>
                )
              )}
            </nav>

          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />

          {/* Bottom */}
          <p style={{ margin: 0, fontSize: '12px', color: TM_LIGHT }}>
            {t('footer.copyright')}
          </p>
        </div>

      </div>
    </footer>
  )
}
