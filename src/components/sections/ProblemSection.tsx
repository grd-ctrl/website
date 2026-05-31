import { useTranslation } from 'react-i18next'
import { X, Check } from 'lucide-react'

export function ProblemSection() {
  const { t } = useTranslation()
  const problems = t('problem.items', { returnObjects: true }) as string[]
  const solutions = t('problem.solution_items', { returnObjects: true }) as string[]

  return (
    <section id="problem" className="py-24 px-6" style={{ background: '#0d1421' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem side */}
          <div
            className="rounded-2xl p-8"
            style={{ background: '#111827', border: '1px solid #1e2d45' }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}
            >
              {t('problem.label')}
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#e8edf5' }}>
              {t('problem.title')}
            </h3>
            <p className="mb-6 leading-relaxed" style={{ color: '#6b7a99' }}>
              {t('problem.description')}
            </p>
            <ul className="flex flex-col gap-3">
              {problems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}
                  >
                    <X size={12} />
                  </span>
                  <span className="text-sm" style={{ color: '#6b7a99' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution side */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: '#111827', border: '1px solid rgba(0,212,255,0.2)' }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at top right, rgba(0,212,255,0.05) 0%, transparent 60%)' }}
            />
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00d4ff' }}
              >
                {t('problem.solution_label')}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#e8edf5' }}>
                {t('problem.solution_title')}
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: '#6b7a99' }}>
                {t('problem.solution_description')}
              </p>
              <ul className="flex flex-col gap-3">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(0,212,255,0.15)', color: '#00d4ff' }}
                    >
                      <Check size={12} />
                    </span>
                    <span className="text-sm" style={{ color: '#e8edf5' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
