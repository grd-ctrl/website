import { useTranslation } from 'react-i18next'

const colors = {
  background: '#1C3F41',
  green: '#78B832',
}

export function StatsSection() {
  const { t } = useTranslation()
  const items = t('stats.items', {
    returnObjects: true,
  }) as Array<{ number: string; label: string }>

  return (
    <section className="blueprint-grid-dark" style={{ padding: '44px 24px 52px', position: 'relative' }}>
      <div className="section-shell">
        <div
          style={{
            color: 'rgba(120,184,50,0.74)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '26px',
          }}
        >
          {t('stats.intro')}
        </div>

        <div className="stats-grid" style={{ gap: '0' }}>
          {items.map((item, index) => (
            <div
              key={item.label}
              style={{
                padding: '12px 24px 12px 0',
                borderRight: index < items.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
              }}
            >
              <div
                style={{
                  color: colors.green,
                  fontFamily: 'var(--font-display)',
                  fontSize: '56px',
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
