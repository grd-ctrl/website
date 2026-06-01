import { useTranslation } from 'react-i18next'
import { Layers3, ShieldCheck, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const pillars = [
  { Icon: Zap, color: '#78B832' },
  { Icon: Layers3, color: '#3D8C8E' },
  { Icon: ShieldCheck, color: '#1C3F41' },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function PillarsSection() {
  const { t } = useTranslation()
  const items = t('pillars.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <section style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div className="section-shell">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '64px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#78B832',
              margin: 0,
              flexShrink: 0,
            }}
          >
            // {t('pillars.label')}
          </p>
          <div style={{ flex: 1, height: '1px', background: '#E8EDEE' }} />
        </motion.div>

        {/* Rows */}
        <div>
          {items.map((item, index) => {
            const pillar = pillars[index] ?? pillars[0]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.1, ease }}
                whileHover={{ x: 6 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr auto',
                  alignItems: 'start',
                  gap: '32px',
                  padding: '40px 0',
                  borderTop: '1px solid #E8EDEE',
                  cursor: 'default',
                }}
              >
                {/* Index */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#B0BEC0',
                    letterSpacing: '0.08em',
                    paddingTop: '4px',
                  }}
                >
                  0{index + 1}
                </span>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      margin: '0 0 12px',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(26px, 3vw, 36px)',
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                      lineHeight: 1.1,
                      color: '#1C3F41',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      lineHeight: 1.75,
                      color: '#6B8A8C',
                      maxWidth: '560px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ marginTop: '6px' }}
                >
                  <pillar.Icon size={28} color={pillar.color} strokeWidth={1.5} style={{ opacity: 0.7 }} />
                </motion.div>
              </motion.div>
            )
          })}
          <div style={{ borderTop: '1px solid #E8EDEE' }} />
        </div>
      </div>
    </section>
  )
}
