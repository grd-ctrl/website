import { useTranslation } from 'react-i18next'
import { Activity, Building2, Plane, Shield, Wifi, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimateIn, fadeUp } from '../AnimateIn'

const colors = {
  white: '#ffffff',
  tealDark: '#1C3F41',
  teal: '#244C4E',
  tealMuted: '#6B8A8C',
  green: '#78B832',
  border: '#D4DCEC',
}

const meta = [
  { area: 'soc', Icon: Shield, featured: true, iconColor: '#78B832' },
  { area: 'noc', Icon: Wifi, iconColor: '#3B82F6' },
  { area: 'airports', Icon: Plane, iconColor: '#F59E0B' },
  { area: 'hospitals', Icon: Activity, iconColor: '#10B981' },
  { area: 'energy', Icon: Zap, iconColor: '#7C3AED' },
  { area: 'command', Icon: Building2, featured: true, dark: true, iconColor: '#78B832' },
]

export function UseCasesSection() {
  const { t } = useTranslation()
  const items = t('usecases.items', {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>

  return (
    <section id="usecases" className="blueprint-grid" style={{ padding: '96px 24px' }}>
      <div className="section-shell">
        <AnimateIn variants={fadeUp} style={{ maxWidth: '720px', marginBottom: '36px' }}>
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
            // 03 ENVIRONMENTS
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
            {t('usecases.title')}
          </h2>
          <p style={{ margin: 0, color: colors.tealMuted, fontSize: '17px', lineHeight: 1.7 }}>{t('usecases.subtitle')}</p>
        </AnimateIn>

        <div className="usecases-bento">
          {items.map((item, index) => {
            const itemMeta = meta[index]
            const dark = itemMeta.dark === true
            const featured = itemMeta.featured === true
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: index * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -5, boxShadow: dark ? '0 36px 72px rgba(28,63,65,0.32)' : '0 20px 48px rgba(28,63,65,0.12)' }}
                style={{
                  gridArea: itemMeta.area,
                  borderRadius: '20px',
                  padding: featured ? '32px' : '28px',
                  border: dark ? 'none' : `1px solid ${colors.border}`,
                  background: dark ? colors.tealDark : colors.white,
                  color: dark ? '#ffffff' : colors.teal,
                  boxShadow: dark ? '0 24px 48px rgba(28,63,65,0.22)' : '0 12px 24px rgba(28,63,65,0.06)',
                  minHeight: itemMeta.area === 'soc' ? '360px' : itemMeta.area === 'command' ? '240px' : '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: featured ? '52px' : '44px',
                      height: featured ? '52px' : '44px',
                      borderRadius: '16px',
                      background: dark ? 'rgba(120,184,50,0.14)' : `${itemMeta.iconColor}18`,
                      color: itemMeta.iconColor,
                      display: 'grid',
                      placeItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <itemMeta.Icon size={featured ? 24 : 20} />
                  </div>
                  <h3 style={{ margin: '0 0 10px', fontSize: featured ? '30px' : '22px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                    {item.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: dark ? 'rgba(255,255,255,0.72)' : colors.tealMuted,
                      maxWidth: itemMeta.area === 'command' ? '760px' : 'unset',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                {itemMeta.area === 'soc' ? (
                  <div
                    style={{
                      marginTop: '28px',
                      borderRadius: '18px',
                      padding: '18px',
                      border: `1px solid ${colors.border}`,
                      background: '#F4F7FA',
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                        <div style={{ height: '84px', borderRadius: '14px', background: '#244C4E' }} />
                        <div style={{ height: '84px', borderRadius: '14px', background: '#78B832' }} />
                        <div style={{ height: '84px', borderRadius: '14px', background: '#3D6466' }} />
                      </div>
                      <div style={{ display: 'grid', gap: '10px' }}>
                        <div style={{ height: '36px', borderRadius: '12px', background: '#ffffff', border: `1px solid ${colors.border}` }} />
                        <div style={{ height: '36px', borderRadius: '12px', background: '#ffffff', border: `1px solid ${colors.border}` }} />
                        <div style={{ height: '36px', borderRadius: '12px', background: '#ffffff', border: `1px solid ${colors.border}` }} />
                      </div>
                    </div>
                  </div>
                ) : null}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
