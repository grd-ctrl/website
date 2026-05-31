import { useTranslation } from 'react-i18next'
import { Shield, Wifi, Plane, Anchor, Heart, Zap, Building2, Factory } from 'lucide-react'

const ICONS = [Shield, Wifi, Plane, Anchor, Heart, Factory, Building2, Zap]
const COLORS = ['#ef4444', '#3b82f6', '#0ea5e9', '#10b981', '#ec4899', '#f97316', '#a855f7', '#f59e0b']

export function UseCasesSection() {
  const { t } = useTranslation()
  const items = t('usecases.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="usecases" className="py-24 px-6" style={{ background: '#0d1421' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)', color: '#a855f7' }}
          >
            {t('usecases.label')}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#e8edf5' }}>
            {t('usecases.title')}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#6b7a99' }}>
            {t('usecases.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            const color = COLORS[i % COLORS.length]
            return (
              <div
                key={i}
                className="rounded-2xl p-6 flex gap-4 items-start transition-all"
                style={{ background: '#111827', border: '1px solid #1e2d45' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${color}40`
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#1e2d45'
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}14`, color }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: '#e8edf5' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7a99' }}>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
