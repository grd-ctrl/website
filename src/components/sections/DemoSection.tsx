import { useTranslation } from 'react-i18next'
import { MessageCircle } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+a+GroundCTRL+demo'

const DEMO_TILES = [
  { label: 'Emergency Mode', color: '#ef4444', icon: '🚨', active: true },
  { label: 'Ext. Cameras', color: '#00d4ff', icon: '📷', active: false },
  { label: 'Incident Map', color: '#f59e0b', icon: '🗺️', active: false },
  { label: 'Default Layout', color: '#10b981', icon: '📺', active: false },
  { label: 'SOC Dashboard', color: '#a855f7', icon: '🖥️', active: false },
  { label: 'Night Mode', color: '#3b82f6', icon: '🌙', active: false },
  { label: 'Restore', color: '#6b7a99', icon: '↺', active: false },
  { label: 'Broadcast', color: '#f97316', icon: '📡', active: false },
]

export function DemoSection() {
  const { t } = useTranslation()

  return (
    <section id="demo" className="py-24 px-6 overflow-hidden" style={{ background: '#0a0f1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff' }}
            >
              {t('demo.label')}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ color: '#e8edf5' }}>
              {t('demo.title')}
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#6b7a99' }}>
              {t('demo.subtitle')}
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold no-underline transition-all"
              style={{
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.25)',
                color: '#00d4ff',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.18)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.1)'
              }}
            >
              <MessageCircle size={18} />
              {t('demo.cta')}
            </a>
          </div>

          {/* Tablet mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                width: '340px',
                background: '#0d1421',
                border: '2px solid #1e2d45',
                boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(0,212,255,0.08)',
                padding: '12px',
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-2 pb-3 text-xs" style={{ color: '#6b7a99' }}>
                <span>09:41</span>
                <span style={{ color: '#00d4ff', fontWeight: 600 }}>● LIVE</span>
                <span>🔋 94%</span>
              </div>
              {/* Room label */}
              <div className="px-2 pb-4">
                <p className="text-xs mb-1" style={{ color: '#6b7a99' }}>Control Room A</p>
                <p className="font-bold" style={{ color: '#e8edf5' }}>GroundCTRL</p>
              </div>
              {/* Tile grid */}
              <div className="grid grid-cols-4 gap-2">
                {DEMO_TILES.map((tile, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl flex flex-col items-center justify-center gap-1"
                    style={{
                      background: tile.active ? `${tile.color}22` : '#111827',
                      border: `1px solid ${tile.active ? tile.color + '50' : '#1e2d45'}`,
                    }}
                  >
                    <span className="text-lg">{tile.icon}</span>
                    <span className="text-[9px] font-medium text-center leading-tight px-1" style={{ color: tile.active ? tile.color : '#6b7a99' }}>
                      {tile.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Bottom nav */}
              <div className="flex justify-around pt-4 pb-1 px-2">
                {['🏠', '⚙️', '👤'].map((icon, i) => (
                  <button key={i} className="text-lg p-2 rounded-lg" style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: i === 0 ? 1 : 0.4 }}>
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
