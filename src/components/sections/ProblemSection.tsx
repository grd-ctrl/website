import { useTranslation } from 'react-i18next'
import { Check, CircleX } from 'lucide-react'

const colors = {
  tealDark: '#1C3F41',
  teal: '#244C4E',
  tealMuted: '#6B8A8C',
  green: '#78B832',
  alt: '#F4F7FA',
  border: '#D4DCEC',
}

export function ProblemSection() {
  const { t } = useTranslation()
  const problems = t('problem.items', { returnObjects: true }) as string[]
  const solutions = t('problem.solution_items', { returnObjects: true }) as string[]

  return (
    <section className="blueprint-grid" style={{ padding: '80px 24px' }}>
      <div className="section-shell">
        <div className="problem-panels">
          <div
            style={{
              background: colors.tealDark,
              color: '#ffffff',
              borderRadius: '20px',
              padding: '48px 40px',
              boxShadow: '0 20px 40px rgba(28,63,65,0.14)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#78B83266',
                marginBottom: '18px',
              }}
            >
              {t('problem.before_label')}
            </div>
            <h2
              style={{
                margin: '0 0 28px',
                fontSize: '38px',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: '#ffffff',
              }}
            >
              {t('problem.before_title')}
            </h2>

            <div style={{ display: 'grid', gap: '18px' }}>
              {problems.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '999px',
                      background: 'rgba(248,113,113,0.14)',
                      color: '#F87171',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <CircleX size={16} />
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: '16px', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: '#ffffff',
              color: colors.teal,
              borderRadius: '20px',
              padding: '48px 40px',
              border: `1px solid ${colors.border}`,
              borderTop: `4px solid ${colors.green}`,
              boxShadow: '0 8px 32px rgba(28,63,65,0.08)',
            }}
          >
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
              {t('problem.after_label')}
            </div>
            <h2
              style={{
                margin: '0 0 28px',
                fontSize: '38px',
                lineHeight: 1.02,
                letterSpacing: '-0.03em',
                color: colors.tealDark,
              }}
            >
              {t('problem.after_title')}
            </h2>

            <div style={{ display: 'grid', gap: '18px' }}>
              {solutions.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '999px',
                      background: '#EEF8E0',
                      color: colors.green,
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={16} />
                  </span>
                  <span style={{ color: colors.teal, fontSize: '16px', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
