import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { MessageCircle, ArrowRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL+pricing'

export function PricingSection() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="py-24 px-6" style={{ background: '#0d1421' }}>
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: '#f59e0b' }}
        >
          {t('pricing.label')}
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: '#e8edf5' }}>
          {t('pricing.title')}
        </h2>
        <p className="text-lg mb-8" style={{ color: '#6b7a99' }}>
          {t('pricing.subtitle')}
        </p>

        <div
          className="rounded-2xl p-10 relative overflow-hidden"
          style={{ background: '#111827', border: '1px solid rgba(0,212,255,0.15)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center top, rgba(0,212,255,0.05) 0%, transparent 60%)' }}
          />
          <div className="relative z-10">
            <div className="text-6xl mb-4">📡</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#e8edf5' }}>Enterprise</h3>
            <p className="mb-2" style={{ color: '#6b7a99' }}>{t('pricing.subtitle')}</p>
            <p className="text-sm mb-8" style={{ color: '#6b7a99' }}>{t('pricing.note')}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold no-underline transition-all"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff, #0099bb)',
                  color: '#0a0f1a',
                  boxShadow: '0 0 24px rgba(0,212,255,0.2)',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
              >
                <MessageCircle size={18} />
                {t('pricing.cta')}
              </a>
              <Link
                to="/checkout"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold no-underline transition-all"
                style={{ background: 'transparent', border: '1px solid #1e2d45', color: '#6b7a99' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00d4ff'; (e.currentTarget as HTMLElement).style.color = '#00d4ff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1e2d45'; (e.currentTarget as HTMLElement).style.color = '#6b7a99' }}
              >
                {t('pricing.checkout_link')}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
