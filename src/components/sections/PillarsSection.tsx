import { useTranslation } from 'react-i18next'
import { Zap, Layers, ShieldCheck } from 'lucide-react'

const TD = '#1C3F41'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

const PILLAR_META = [
  { Icon: Zap,        color: GR,    borderColor: GR    },
  { Icon: Layers,     color: '#244C4E', borderColor: '#244C4E' },
  { Icon: ShieldCheck,color: TD,    borderColor: TD    },
]

export function PillarsSection() {
  const { t } = useTranslation()
  const items = t('pillars.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section className="blueprint-grid" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: '#EEF8E0', color: '#4E8A1E', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '20px' }}>
            {t('pillars.label')}
          </div>
          <h2 style={{ margin: '0 auto', maxWidth: '560px', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, color: TD, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {t('pillars.title')}
          </h2>
        </div>

        {/* 3 cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {items.map((item, i) => {
            const { Icon, color, borderColor } = PILLAR_META[i] ?? PILLAR_META[0]
            return (
              <div key={i} style={{ background: '#fff', border: `1px solid ${BD}`, borderTop: `4px solid ${borderColor}`, borderRadius: '16px', padding: '36px 28px', boxShadow: '0 2px 8px rgba(36,76,78,0.06)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color, marginBottom: '20px' }}>
                  <Icon size={24} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: '22px', color: TD, margin: '0 0 12px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: TM, margin: 0 }}>
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
