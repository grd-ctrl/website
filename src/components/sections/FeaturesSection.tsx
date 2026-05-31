import { useTranslation } from 'react-i18next'
import { Monitor, Zap, Camera, Network, Tablet, PackageOpen } from 'lucide-react'

const ICONS = [Monitor, Zap, Camera, Network, Tablet, PackageOpen]
const ACCENT_COLORS = ['#00d4ff', '#f59e0b', '#a855f7', '#10b981', '#3b82f6', '#f97316']

export function FeaturesSection() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="features" className="py-24 px-6" style={{ background: '#0a0f1a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff' }}
          >
            {t('features.label')}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#e8edf5' }}>
            {t('features.title')}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b7a99' }}>
            {t('features.subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = ICONS[i]
            const color = ACCENT_COLORS[i]
            return (
              <div
                key={i}
                className="rounded-2xl p-6 group transition-all"
                style={{
                  background: '#111827',
                  border: '1px solid #1e2d45',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}40`
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#1e2d45'
                  ;(e.currentTarget as HTMLElement).style.transform = ''
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}14`, color }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#e8edf5' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7a99' }}>
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
