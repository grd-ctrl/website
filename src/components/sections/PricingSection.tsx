import { useTranslation } from 'react-i18next'
import { Link } from '@tanstack/react-router'
import { MessageCircle, ArrowRight, Check } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL+pricing'

const TD = '#1C3F41'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

const INCLUDED = [
  'Unlimited action tiles per room',
  'Barco CTRL API integration',
  'iPad & Android tablet support',
  'Multi-user role-based access',
  '5 languages (EN, NL, DE, ES, IT)',
  'Priority implementation support',
]

export function PricingSection() {
  const { t } = useTranslation()

  return (
    <section id="pricing" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', background: '#EEF8E0', color: '#4E8A1E', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '20px' }}>
          {t('pricing.label')}
        </div>
        <h2 style={{ margin: '0 0 16px 0', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, color: TD, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {t('pricing.title')}
        </h2>
        <p style={{ margin: '0 0 56px 0', fontSize: '16px', lineHeight: 1.65, color: TM }}>
          {t('pricing.subtitle')}
        </p>

        <div style={{ background: '#fff', border: `1px solid ${BD}`, borderTop: `4px solid ${TD}`, borderRadius: '20px', padding: '48px', boxShadow: '0 4px 24px rgba(36,76,78,0.08)' }}>
          <div style={{ display: 'inline-block', background: '#EEF8E0', color: '#4E8A1E', borderRadius: '999px', padding: '4px 14px', fontSize: '12px', fontWeight: 700, marginBottom: '20px' }}>
            Enterprise
          </div>
          <div style={{ fontSize: '36px', fontWeight: 900, color: TD, marginBottom: '6px' }}>
            {t('pricing.cta')}
          </div>
          <p style={{ fontSize: '14px', color: TM, marginBottom: '36px' }}>
            {t('pricing.note')}
          </p>

          {/* Feature list */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '40px', textAlign: 'left' }}>
            {INCLUDED.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={14} style={{ color: GR, flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#244C4E' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: GR, color: TD, padding: '13px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'background .15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#5E9A2C')}
              onMouseLeave={e => (e.currentTarget.style.background = GR)}
            >
              <MessageCircle size={16} />
              {t('pricing.cta')}
            </a>
            <Link to="/checkout"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: `2px solid ${TD}`, color: TD, padding: '11px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'all .15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = TD; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = TD }}
            >
              {t('pricing.checkout_link')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
