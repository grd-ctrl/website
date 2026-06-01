import { useTranslation } from 'react-i18next'
import { Camera, LayoutGrid, Monitor, TabletSmartphone, Waypoints } from 'lucide-react'
import { motion } from 'framer-motion'
import { Stagger, StaggerItem, AnimateIn, fadeUp } from '../AnimateIn'

const colors = {
  white: '#ffffff',
  tealDark: '#1C3F41',
  teal: '#244C4E',
  tealMuted: '#6B8A8C',
  green: '#78B832',
  border: '#D4DCEC',
}

const cardMeta = [
  { area: 'big', Icon: Monitor, border: '#1C3F41' },
  { area: 'small1', Icon: LayoutGrid, border: '#78B832' },
  { area: 'small2', Icon: Camera, border: '#D97706' },
  { area: 'med1', Icon: Waypoints, border: '#3D6466' },
  { area: 'med2', Icon: TabletSmartphone, border: '#7C3AED' },
]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function FeaturesSection() {
  const { t } = useTranslation()
  const items = t('features.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>
  const featureCards = items.slice(0, 5)

  return (
    <section id="features" style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div className="section-shell">
        <AnimateIn variants={fadeUp} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <div style={{ maxWidth: '560px', textAlign: 'right' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: colors.green,
                marginBottom: '16px',
              }}
            >
              // 02 CONTROL LAYER
            </div>
            <h2
              style={{
                margin: '0 0 12px',
                fontSize: 'clamp(40px, 5vw, 56px)',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: colors.tealDark,
              }}
            >
              {t('features.title')}
            </h2>
            <p style={{ margin: 0, color: colors.tealMuted, fontSize: '17px', lineHeight: 1.7 }}>{t('features.subtitle')}</p>
          </div>
        </AnimateIn>

        <Stagger className="features-bento" amount={0.05}>
          {featureCards.map((item, index) => {
            const meta = cardMeta[index]
            const isBig = meta.area === 'big'
            return (
              <StaggerItem key={item.title} scale>
                <motion.article
                  whileHover={{ y: -6, boxShadow: isBig ? '0 40px 80px rgba(28,63,65,0.3)' : '0 20px 40px rgba(28,63,65,0.12)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  style={{
                    gridArea: meta.area,
                    borderRadius: isBig ? '20px' : '16px',
                    padding: isBig ? '40px' : '32px',
                    background: isBig ? colors.tealDark : colors.white,
                    color: isBig ? '#ffffff' : colors.teal,
                    border: isBig ? 'none' : `1px solid ${colors.border}`,
                    borderTop: isBig ? 'none' : `4px solid ${meta.border}`,
                    boxShadow: isBig ? '0 28px 54px rgba(28,63,65,0.18)' : '0 12px 24px rgba(28,63,65,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: isBig ? '100%' : '260px',
                    overflow: 'hidden',
                    cursor: 'default',
                  }}
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                      style={{
                        width: isBig ? '64px' : '48px',
                        height: isBig ? '64px' : '48px',
                        borderRadius: isBig ? '18px' : '16px',
                        background: isBig ? 'rgba(255,255,255,0.08)' : `${meta.border}16`,
                        color: isBig ? colors.green : meta.border,
                        display: 'grid',
                        placeItems: 'center',
                        marginBottom: '22px',
                      }}
                    >
                      <meta.Icon size={isBig ? 30 : 22} />
                    </motion.div>
                    <h3
                      style={{
                        margin: '0 0 12px',
                        fontSize: isBig ? '34px' : '24px',
                        lineHeight: 1.05,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: isBig ? '17px' : '15px',
                        lineHeight: 1.7,
                        color: isBig ? 'rgba(255,255,255,0.72)' : colors.tealMuted,
                        maxWidth: isBig ? '420px' : 'unset',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {isBig ? (
                    <div
                      style={{
                        marginTop: '30px',
                        borderRadius: '18px',
                        border: '1px solid rgba(255,255,255,0.08)',
                        padding: '18px',
                        background: 'rgba(255,255,255,0.04)',
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, minmax(0, 1fr)) 52px repeat(2, minmax(0, 1fr))',
                          gap: '10px',
                          alignItems: 'center',
                        }}
                      >
                        {(['#78B832', '#60A5FA', '#F59E0B', '#F87171'] as const).map((color, tileIndex) => (
                          <motion.div
                            key={`left-${tileIndex}`}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 + tileIndex * 0.06, ease }}
                            style={{
                              height: tileIndex < 2 ? '72px' : '52px',
                              borderRadius: '14px',
                              background: `${color}33`,
                              border: `1px solid ${color}66`,
                              transformOrigin: 'bottom',
                            }}
                          />
                        ))}
                        <div
                          style={{
                            height: '52px',
                            borderRadius: '14px',
                            background: 'rgba(255,255,255,0.06)',
                            display: 'grid',
                            placeItems: 'center',
                            color: colors.green,
                            fontSize: '26px',
                          }}
                        >
                          →
                        </div>
                        {(['#78B832', '#60A5FA', '#F59E0B', '#F87171'] as const).map((color, tileIndex) => (
                          <motion.div
                            key={`right-${tileIndex}`}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.7 + tileIndex * 0.06, ease }}
                            style={{
                              height: tileIndex % 2 === 0 ? '60px' : '82px',
                              borderRadius: '14px',
                              background: `${color}22`,
                              border: `1px solid ${color}52`,
                              transformOrigin: 'bottom',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : meta.area === 'med1' ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
                      {['Crestron', 'Q-SYS', 'Node-RED'].map((logo, i) => (
                        <motion.span
                          key={logo}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
                          whileHover={{ scale: 1.08 }}
                          style={{
                            padding: '10px 12px',
                            borderRadius: '999px',
                            background: '#F4F7FA',
                            border: `1px solid ${colors.border}`,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            color: colors.tealDark,
                            cursor: 'default',
                          }}
                        >
                          {logo}
                        </motion.span>
                      ))}
                    </div>
                  ) : null}
                </motion.article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
