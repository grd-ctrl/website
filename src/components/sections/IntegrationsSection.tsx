import { useTranslation } from 'react-i18next'
import { Camera, Monitor, Settings2, Shield, Volume2, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimateIn, fadeUp } from '../AnimateIn'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const integrations = [
  { name: 'Barco CTRL', Icon: Shield, native: true },
  { name: 'Milestone VMS', Icon: Camera },
  { name: 'Verkada', Icon: Camera },
  { name: 'Bosch', Icon: Camera },
  { name: 'Node-RED', Icon: Zap },
  { name: 'Power Automate', Icon: Zap },
  { name: 'Crestron', Icon: Monitor },
  { name: 'Q-SYS', Icon: Volume2 },
  { name: 'Extron', Icon: Settings2 },
]

export function IntegrationsSection() {
  const { t } = useTranslation()

  return (
    <section
      id="integrations"
      style={{
        position: 'relative',
        padding: '120px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/website/img-control-panel.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Dark overlay with teal tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(8,22,24,0.91) 0%, rgba(20,50,52,0.86) 100%)',
        }}
      />

      <div className="section-shell" style={{ position: 'relative' }}>
        <AnimateIn variants={fadeUp}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#78B832',
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
              color: '#ffffff',
            }}
          >
            {t('integrations.title')}
          </h2>
          <p style={{ margin: '0 0 48px', maxWidth: '580px', color: 'rgba(255,255,255,0.55)', fontSize: '17px', lineHeight: 1.7 }}>
            {t('integrations.subtitle')}
          </p>
        </AnimateIn>

        <div className="integrations-grid">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease }}
              whileHover={{ y: -4, borderColor: 'rgba(120,184,50,0.5)', background: 'rgba(255,255,255,0.11)' }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '16px',
                padding: '20px 20px 18px',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(120,184,50,0.15)',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#78B832',
                  }}
                >
                  <integration.Icon size={18} />
                </div>
                {integration.native ? (
                  <span
                    style={{
                      background: 'rgba(120,184,50,0.2)',
                      color: '#a8e05a',
                      borderRadius: '999px',
                      padding: '5px 10px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(120,184,50,0.3)',
                    }}
                  >
                    Native
                  </span>
                ) : null}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: '15px' }}>{integration.name}</div>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            marginTop: '32px',
            color: 'rgba(255,255,255,0.35)',
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
