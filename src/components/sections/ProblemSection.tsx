import { useTranslation } from 'react-i18next'
import { X, Check } from 'lucide-react'

const TD = '#1C3F41'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

export function ProblemSection() {
  const { t } = useTranslation()
  const problems = t('problem.items', { returnObjects: true }) as string[]
  const solutions = t('problem.solution_items', { returnObjects: true }) as string[]

  return (
    <section id="problem" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Section intro */}
        <div style={{ maxWidth: '600px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: '#FEF2F2', color: '#B91C1C', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '20px' }}>
            {t('problem.label')}
          </div>
          <h2 style={{ margin: '0 0 16px 0', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, color: TD, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {t('problem.title')}
          </h2>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: TM }}>
            {t('problem.description')}
          </p>
        </div>

        {/* Two cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>

          {/* Challenge card */}
          <div style={{ background: '#fff', border: `1px solid ${BD}`, borderLeft: '4px solid #DC2626', borderRadius: '16px', padding: '32px' }}>
            <p style={{ fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.09em', color: '#DC2626', margin: '0 0 20px 0' }}>
              {t('problem.label')}
            </p>
            <h3 style={{ fontWeight: 800, fontSize: '20px', color: TD, margin: '0 0 20px 0' }}>
              {t('problem.section_title')}
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {problems.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <X size={11} />
                  </span>
                  <span style={{ fontSize: '14px', lineHeight: 1.55, color: TM }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution card */}
          <div style={{ background: '#fff', border: `1px solid ${BD}`, borderLeft: `4px solid ${GR}`, borderRadius: '16px', padding: '32px' }}>
            <p style={{ fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.09em', color: '#4E8A1E', margin: '0 0 20px 0' }}>
              {t('problem.solution_label')}
            </p>
            <h3 style={{ fontWeight: 800, fontSize: '20px', color: TD, margin: '0 0 20px 0' }}>
              {t('problem.solution_title')}
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {solutions.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#EEF8E0', color: GR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <Check size={11} />
                  </span>
                  <span style={{ fontSize: '14px', lineHeight: 1.55, color: '#244C4E' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
