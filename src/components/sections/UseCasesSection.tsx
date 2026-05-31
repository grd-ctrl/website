import { useTranslation } from 'react-i18next'
import { Shield, Wifi, Plane, Anchor, Activity, Factory, Building2, Zap } from 'lucide-react'

const ICONS = [Shield, Wifi, Plane, Anchor, Activity, Factory, Building2, Zap]
const TD = '#1C3F41'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

export function UseCasesSection() {
  const { t } = useTranslation()
  const items = t('usecases.items', { returnObjects: true }) as { title: string; description: string }[]

  return (
    <section id="usecases" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: '#EEF8E0', color: '#4E8A1E', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '20px' }}>
            {t('usecases.label')}
          </div>
          <h2 style={{ margin: '0 0 16px 0', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, color: TD, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {t('usecases.title')}
          </h2>
          <p style={{ margin: '0 auto', maxWidth: '500px', fontSize: '16px', lineHeight: 1.65, color: TM }}>
            {t('usecases.subtitle')}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div key={i}
                style={{ background: '#fff', border: `1px solid ${BD}`, borderRadius: '12px', padding: '24px', display: 'flex', gap: '14px', alignItems: 'flex-start', transition: 'border-color .2s, box-shadow .2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = GR; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(120,184,50,0.12)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = BD; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EEF8E0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: GR, flexShrink: 0 }}>
                  <Icon size={19} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '14px', color: TD, margin: '0 0 6px 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.55, color: TM, margin: 0 }}>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
