import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-16 px-6" style={{ background: '#080d18', borderTop: '1px solid #1e2d45' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)', color: '#0a0f1a' }}
              >
                G
              </div>
              <span className="font-bold text-lg tracking-tight" style={{ color: '#e8edf5' }}>
                Ground<span style={{ color: '#00d4ff' }}>CTRL</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#6b7a99' }}>
              {t('footer.tagline')}
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {(['features', 'usecases', 'checkout', 'contact'] as const).map((key) => (
              key === 'checkout' ? (
                <Link
                  key={key}
                  to="/checkout"
                  className="text-sm no-underline transition-colors"
                  style={{ color: '#6b7a99' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e8edf5')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7a99')}
                >
                  {t(`footer.links.${key}`)}
                </Link>
              ) : (
                <a
                  key={key}
                  href={key === 'contact'
                    ? 'https://wa.me/+5585998614541'
                    : `#${key}`}
                  className="text-sm no-underline transition-colors"
                  style={{ color: '#6b7a99' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#e8edf5')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7a99')}
                >
                  {t(`footer.links.${key}`)}
                </a>
              )
            ))}
          </nav>
        </div>

        <div style={{ borderTop: '1px solid #1e2d45', paddingTop: '2rem' }}>
          <p className="text-xs" style={{ color: '#6b7a99' }}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
