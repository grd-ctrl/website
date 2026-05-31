import { Outlet, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'nl', label: 'NL' },
  { code: 'de', label: 'DE' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
]

export function RootLayout() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: '#0a0f1a', color: '#e8edf5' }}>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(10,15,26,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #1e2d45',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)', color: '#0a0f1a' }}
            >
              G
            </div>
            <span className="font-bold text-lg tracking-tight" style={{ color: '#e8edf5' }}>
              Ground<span style={{ color: '#00d4ff' }}>CTRL</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {(['features', 'usecases', 'demo', 'pricing'] as const).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm transition-colors no-underline"
                style={{ color: '#6b7a99' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e8edf5')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6b7a99')}
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <Link
              to="/checkout"
              className="text-sm no-underline"
              style={{ color: '#6b7a99' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e8edf5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7a99')}
            >
              {t('nav.checkout')}
            </Link>
          </nav>

          {/* Right side: lang + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className="text-xs px-2 py-1 rounded transition-colors"
                  style={{
                    background: i18n.language.startsWith(lang.code) ? 'rgba(0,212,255,0.12)' : 'transparent',
                    color: i18n.language.startsWith(lang.code) ? '#00d4ff' : '#6b7a99',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <a
              href="https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-2 rounded-lg no-underline transition-opacity"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #0099bb)', color: '#0a0f1a' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            style={{ background: 'none', border: 'none', color: '#e8edf5', cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ borderTop: '1px solid #1e2d45' }}>
            {(['features', 'usecases', 'demo', 'pricing'] as const).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm no-underline"
                style={{ color: '#6b7a99' }}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <Link to="/checkout" className="text-sm no-underline" style={{ color: '#6b7a99' }} onClick={() => setMenuOpen(false)}>
              {t('nav.checkout')}
            </Link>
            <div className="flex items-center gap-1 pt-2" style={{ borderTop: '1px solid #1e2d45' }}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { i18n.changeLanguage(lang.code); setMenuOpen(false) }}
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    background: i18n.language.startsWith(lang.code) ? 'rgba(0,212,255,0.12)' : 'transparent',
                    color: i18n.language.startsWith(lang.code) ? '#00d4ff' : '#6b7a99',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  )
}
