import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Layers3, ShieldCheck, Zap } from 'lucide-react'

const pillars = [
  { Icon: Zap, color: '#78B832' },
  { Icon: Layers3, color: '#3D8C8E' },
  { Icon: ShieldCheck, color: '#1C3F41' },
]

export function PillarsSection() {
  const { t } = useTranslation()
  const items = t('pillars.items', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    rowRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 120)
            obs.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section style={{ background: '#ffffff', padding: '96px 24px' }}>
      <div className="section-shell">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', marginBottom: '64px' }}>
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
        </div>

        {/* Rows */}
        <div>
          {items.map((item, index) => {
            const pillar = pillars[index] ?? pillars[0]
            return (
              <div
                key={item.title}
                ref={el => { rowRefs.current[index] = el }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr auto',
                  alignItems: 'start',
                  gap: '32px',
                  padding: '40px 0',
                  borderTop: '1px solid #E8EDEE',
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: 'opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1)',
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

                {/* Icon — right side, no box */}
                <pillar.Icon
                  size={28}
                  color={pillar.color}
                  strokeWidth={1.5}
                  style={{ marginTop: '6px', opacity: 0.7 }}
                />
              </div>
            )
          })}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid #E8EDEE' }} />
        </div>
      </div>
    </section>
  )
}

