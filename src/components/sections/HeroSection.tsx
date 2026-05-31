import { useTranslation } from 'react-i18next'
import { ArrowRight, MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden grid-pattern"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '500px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
          style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {t('hero.badge')}
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          <span style={{ color: '#e8edf5' }}>{t('hero.headline')}</span>
          <br />
          <span className="text-gradient">{t('hero.headline2')}</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#6b7a99' }}>
          {t('hero.sub')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base no-underline transition-all"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #0099bb)',
              color: '#0a0f1a',
              boxShadow: '0 0 32px rgba(0,212,255,0.25)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 48px rgba(0,212,255,0.35)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(0,212,255,0.25)' }}
          >
            <MessageCircle size={18} />
            {t('hero.cta_primary')}
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base no-underline transition-all"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #1e2d45', color: '#e8edf5' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00d4ff'; (e.currentTarget as HTMLElement).style.color = '#00d4ff' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1e2d45'; (e.currentTarget as HTMLElement).style.color = '#e8edf5' }}
          >
            {t('hero.cta_secondary')}
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Floating tile mockup */}
        <div className="mt-20 flex justify-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              width: '100%',
              maxWidth: '720px',
              background: '#111827',
              border: '1px solid #1e2d45',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.08)',
            }}
          >
            {/* Fake window chrome */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid #1e2d45' }}>
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-4 text-xs" style={{ color: '#6b7a99' }}>GroundCTRL — Control Room A</span>
            </div>
            {/* Tile grid */}
            <div className="p-6 grid grid-cols-4 gap-3">
              {[
                { label: 'Emergency Mode', color: '#ef4444', icon: '🚨' },
                { label: 'Default Layout', color: '#00d4ff', icon: '📺' },
                { label: 'Ext. Cameras', color: '#a855f7', icon: '📷' },
                { label: 'Incident Map', color: '#f59e0b', icon: '🗺️' },
                { label: 'SOC View', color: '#10b981', icon: '🖥️' },
                { label: 'Restore', color: '#6b7a99', icon: '↺' },
                { label: 'Night Mode', color: '#3b82f6', icon: '🌙' },
                { label: 'Settings', color: '#6b7a99', icon: '⚙️' },
              ].map((tile, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl flex flex-col items-center justify-center gap-2 text-center p-2"
                  style={{
                    background: `${tile.color}14`,
                    border: `1px solid ${tile.color}30`,
                    cursor: 'pointer',
                  }}
                >
                  <span className="text-2xl">{tile.icon}</span>
                  <span className="text-xs font-medium leading-tight" style={{ color: tile.color }}>
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
