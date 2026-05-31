import { useTranslation } from 'react-i18next'
import { Camera, Monitor, Settings2, Shield, Volume2, Zap } from 'lucide-react'

const colors = {
  white: '#ffffff',
  alt: '#F4F7FA',
  tealDark: '#1C3F41',
  teal: '#244C4E',
  tealMuted: '#6B8A8C',
  green: '#78B832',
  border: '#D4DCEC',
}

const integrations = [
  { name: 'Barco CTRL', Icon: Shield, color: '#244C4E', native: true },
  { name: 'Milestone VMS', Icon: Camera, color: '#2563EB' },
  { name: 'Verkada', Icon: Camera, color: '#78B832' },
  { name: 'Bosch', Icon: Camera, color: '#DC2626' },
  { name: 'Node-RED', Icon: Zap, color: '#F97316' },
  { name: 'Power Automate', Icon: Zap, color: '#2563EB' },
  { name: 'Crestron', Icon: Monitor, color: '#7C3AED' },
  { name: 'Q-SYS', Icon: Volume2, color: '#0F766E' },
  { name: 'Extron', Icon: Settings2, color: '#6B7280' },
]

export function IntegrationsSection() {
  const { t } = useTranslation()

  return (
    <section id="integrations" className="blueprint-grid" style={{ padding: '96px 24px' }}>
      <div className="section-shell">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: colors.green,
            marginBottom: '18px',
          }}
        >
          // {t('integrations.label')}
        </div>
        <h2
          style={{
            maxWidth: '720px',
            margin: '0 0 16px',
            fontSize: 'clamp(38px, 5vw, 56px)',
            lineHeight: 1.02,
            letterSpacing: '-0.03em',
            color: colors.tealDark,
          }}
        >
          {t('integrations.title')}
        </h2>
        <p style={{ margin: '0 0 32px', maxWidth: '640px', color: colors.tealMuted, fontSize: '17px', lineHeight: 1.7 }}>
          {t('integrations.subtitle')}
        </p>

        <div className="integrations-grid">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              style={{
                background: colors.white,
                border: `1px solid ${colors.border}`,
                borderRadius: '16px',
                padding: '18px 18px 16px',
                boxShadow: '0 12px 24px rgba(28,63,65,0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '14px',
                    background: `${integration.color}18`,
                    display: 'grid',
                    placeItems: 'center',
                    color: integration.color,
                  }}
                >
                  <integration.Icon size={18} />
                </div>
                {integration.native ? (
                  <span
                    style={{
                      background: '#EEF8E0',
                      color: '#4E8A1E',
                      borderRadius: '999px',
                      padding: '6px 10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Native
                  </span>
                ) : null}
              </div>
              <div style={{ color: colors.tealDark, fontWeight: 700, fontSize: '15px' }}>{integration.name}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '24px',
            color: colors.tealMuted,
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.12em',
          }}
        >
          {t('integrations.api_note')}
        </div>
      </div>
    </section>
  )
}
