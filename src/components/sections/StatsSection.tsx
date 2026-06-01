import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const colors = {
  background: '#1C3F41',
  green: '#78B832',
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function StatsSection() {
  const { t } = useTranslation()
  const items = t('stats.items', {
    returnObjects: true,
  }) as Array<{ number: string; label: string }>

  return (
    <section className="blueprint-grid-dark" style={{ padding: '44px 24px 52px', position: 'relative', overflow: 'hidden' }}>
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
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
        </motion.div>

        <div className="stats-grid" style={{ gap: '0' }}>
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30, scale: 0.88, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: index * 0.12, ease }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
