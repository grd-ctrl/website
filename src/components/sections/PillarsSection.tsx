import { useTranslation } from 'react-i18next'
import { Layers3, ShieldCheck, Zap } from 'lucide-react'

const colors = {
  tealDark: '#1C3F41',
  teal: '#244C4E',
  tealMuted: '#6B8A8C',
  green: '#78B832',
  border: '#D4DCEC',
}

const pillars = [
  { Icon: Zap, iconBg: '#EEF8E0', iconColor: '#78B832', accent: '#78B832' },
  { Icon: Layers3, iconBg: '#E8F2F2', iconColor: '#3D6466', accent: '#3D6466' },
  { Icon: ShieldCheck, iconBg: '#E5EEF1', iconColor: '#1C3F41', accent: '#1C3F41' },
]

export function PillarsSection() {
  const { t } = useTranslation()
  const items = t('pillars.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>

  return (
    <section style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div className="section-shell">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: colors.green,
            marginBottom: '18px',
          }}
        >
          // 01 FOUNDATION
        </div>
        <h2
          style={{
            maxWidth: '820px',
            margin: '0 0 40px',
            fontSize: 'clamp(44px, 5vw, 62px)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            color: colors.tealDark,
          }}
        >
          {t('pillars.title')}
        </h2>

        <div className="pillars-row">
          {items.map((item, index) => {
            const pillar = pillars[index] ?? pillars[0]
            return (
              <div
                key={item.title}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderLeft: `4px solid ${pillar.accent}`,
                  borderBottom: `4px solid ${pillar.accent}`,
                  borderRadius: '22px',
                  borderTop: `1px solid ${colors.border}`,
                  borderRight: `1px solid ${colors.border}`,
                  background: '#fff',
                  padding: '32px 28px 28px',
                  boxShadow: '0 18px 34px rgba(28,63,65,0.06)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '18px',
                    color: 'rgba(28,63,65,0.08)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '80px',
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  0{index + 1}
                </div>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    background: pillar.iconBg,
                    color: pillar.iconColor,
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: '22px',
                    position: 'relative',
                  }}
                >
                  <pillar.Icon size={24} />
                </div>
                <h3 style={{ margin: '0 0 10px', fontSize: '24px', fontWeight: 800, color: colors.tealDark }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7, color: colors.tealMuted }}>
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
