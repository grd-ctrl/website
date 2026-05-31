import { useTranslation } from 'react-i18next'
import { Monitor, Zap, Camera, Network, Tablet, PackageOpen } from 'lucide-react'

const ICONS = [Monitor, Zap, Camera, Network, Tablet, PackageOpen]
const TD = '#1C3F41'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

export function FeaturesSection() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="features" className="blueprint-grid" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header — left-aligned for enterprise feel */}
        <div style={{ maxWidth: '580px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: '#EEF8E0', color: '#4E8A1E', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '20px' }}>
            {t('features.label')}
          </div>
          <h2 style={{ margin: '0 0 16px 0', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, color: TD, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {t('features.title')}
          </h2>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: TM }}>
            {t('features.subtitle')}
          </p>
        </div>

        {/* Grid — AbacatePay left-border cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div key={i}
                style={{ background: '#fff', border: `1px solid ${BD}`, borderLeft: `4px solid ${GR}`, borderRadius: '12px', padding: '24px 22px', display: 'flex', gap: '16px', boxShadow: '0 1px 4px rgba(36,76,78,0.05)', transition: 'box-shadow .2s, transform .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(36,76,78,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(36,76,78,0.05)'; (e.currentTarget as HTMLElement).style.transform = '' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EEF8E0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: GR, flexShrink: 0 }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '15px', color: TD, margin: '0 0 7px 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.6, color: TM, margin: 0 }}>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
