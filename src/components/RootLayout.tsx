import { Outlet, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

const TD = '#1C3F41'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

export function RootLayout() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#244C4E' }}>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${BD}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/website/logo.png" alt="GroundCTRL" style={{ height: '32px', width: 'auto', flexShrink: 0 }} />
            <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em', color: TD }}>
              Ground<span style={{ color: GR }}>CTRL</span>
            </span>
          </Link>

          <nav className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {(['features', 'usecases', 'demo', 'pricing'] as const).map((key) => (
              <a key={key}
                href="javascript:void(0)"
                onClick={() => document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' })}
                style={{ fontSize: '14px', color: TM, textDecoration: 'none', fontWeight: 500, cursor: 'pointer', transition: 'color .15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = TD)}
                onMouseLeave={e => (e.currentTarget.style.color = TM)}
              >{t(`nav.${key}`)}</a>
            ))}
            <Link to="/checkout"
              style={{ fontSize: '14px', color: TM, textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = TD)}
              onMouseLeave={e => (e.currentTarget.style.color = TM)}
            >{t('nav.checkout')}</Link>
          </nav>

          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/demo"
              style={{ background: GR, color: TD, padding: '8px 20px', borderRadius: '999px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', transition: 'background .15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#5E9A2C')}
              onMouseLeave={e => (e.currentTarget.style.background = GR)}
            >{t('nav.contact')}</Link>
          </div>

          <button className="md:hidden"
            style={{ background: 'none', border: 'none', color: TD, cursor: 'pointer', padding: '8px' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>

        {menuOpen && (
          <div style={{ borderTop: `1px solid ${BD}`, padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#fff' }}>
            {(['features', 'usecases', 'demo', 'pricing'] as const).map((key) => (
              <a key={key}
                href="javascript:void(0)"
                style={{ fontSize: '15px', color: TD, textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}
                onClick={() => { document.getElementById(key)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }}
              >{t(`nav.${key}`)}</a>
            ))}
            <Link to="/checkout" style={{ fontSize: '15px', color: TD, textDecoration: 'none', fontWeight: 500 }} onClick={() => setMenuOpen(false)}>{t('nav.checkout')}</Link>
            <Link to="/demo"
              style={{ background: GR, color: TD, padding: '12px 24px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', textAlign: 'center' }}
              onClick={() => setMenuOpen(false)}
            >{t('nav.contact')}</Link>
          </div>
        )}
      </header>

      <main style={{ paddingTop: '64px' }}>
        <Outlet />
      </main>
    </div>
  )
}
