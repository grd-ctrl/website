import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Copy, Check, AlertTriangle, MessageCircle, ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Footer } from '../components/sections/Footer'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+here+is+my+proof+of+payment+for+GroundCTRL'

const TD = '#1C3F41'
const TM = '#6B8A8C'
const BD = '#D4DCEC'

const SHARED = {
  bank: 'Banco Topazio S/A',
  bank_address: 'Rua 18 de Novembro, 273 - Porto Alegre - RS, 90240-040',
  bank_country: 'Brazil',
  swift: 'TOPZBRRSXXX',
  iban: 'BR7707679404000004227169063C1',
  branch: '0001',
  account_type: 'Checkings',
  beneficiary: 'VIRAL DESENVOLVIMENTO & TECNOLOGIA LTDA',
  beneficiary_address: 'H Conj Ceara Ii, 1260 - Conjunto Ceara Ii, Fortaleza - CE, 60533-662',
}

const INTERMEDIARY = {
  USD: {
    intermediary_swift: 'SCBLUS33',
    intermediary_bank: 'Standard Chartered Bank',
    intermediary_country: 'New York, USA',
    intermediary_account: '3544026839001',
  },
  EUR: {
    intermediary_swift: 'SCBLDEFX',
    intermediary_bank: 'Standard Chartered Bank',
    intermediary_country: 'Frankfurt, Germany',
    intermediary_account: '500058000',
  },
}

function CopyRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
      padding: '12px 16px', borderRadius: '10px',
      background: highlight ? '#EEF8E0' : '#F4F7FA',
      border: `1px solid ${highlight ? '#B8E08A' : BD}`,
    }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        <p style={{ margin: '0 0 2px 0', fontSize: '11px', fontWeight: highlight ? 700 : 500, color: highlight ? '#4E8A1E' : TM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
        <p style={{ margin: 0, fontSize: '14px', fontFamily: 'monospace', fontWeight: highlight ? 700 : 500, color: highlight ? TD : '#244C4E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
      </div>
      <button onClick={handleCopy}
        style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, flexShrink: 0, cursor: 'pointer', transition: 'all .15s', background: copied ? '#EEF8E0' : '#fff', border: `1px solid ${copied ? '#B8E08A' : BD}`, color: copied ? '#4E8A1E' : TM }}
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
        {copied ? t('checkout.copied') : t('checkout.copy')}
      </button>
    </div>
  )
}

export function CheckoutPage() {
  const { t } = useTranslation()
  const [currency, setCurrency] = useState<'USD' | 'EUR'>('EUR')
  const fields = t('checkout.fields', { returnObjects: true }) as Record<string, string>
  const inter = INTERMEDIARY[currency]

  return (
    <>
      <div style={{ minHeight: 'calc(100vh - 64px)', padding: '48px 24px', background: '#F4F7FA' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>

          {/* Back */}
          <Link to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: TM, textDecoration: 'none', marginBottom: '32px', fontWeight: 500, transition: 'color .15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = TD)}
            onMouseLeave={e => (e.currentTarget.style.color = TM)}
          >
            <ArrowLeft size={15} />
            GroundCTRL
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '32px', fontWeight: 900, color: TD, letterSpacing: '-0.02em' }}>
              {t('checkout.title')}
            </h1>
            <p style={{ margin: 0, color: TM, fontSize: '15px' }}>{t('checkout.subtitle')}</p>
          </div>

          {/* Warning */}
          <div style={{ display: 'flex', gap: '12px', padding: '16px', borderRadius: '12px', marginBottom: '32px', background: '#FFFBEB', border: '1px solid #FDE68A' }}>
            <AlertTriangle size={18} style={{ color: '#D97706', flexShrink: 0, marginTop: 2 }} />
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.55, color: '#92400E' }}>
              {t('checkout.warning')}
            </p>
          </div>

          {/* Currency toggle */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ margin: '0 0 10px 0', fontSize: '13px', fontWeight: 600, color: TM, textTransform: 'uppercase', letterSpacing: '0.07em' }}>{t('checkout.currency_label')}</p>
            <div style={{ display: 'inline-flex', background: '#fff', border: `1px solid ${BD}`, borderRadius: '999px', padding: '3px' }}>
              {(['USD', 'EUR'] as const).map((c) => (
                <button key={c} onClick={() => setCurrency(c)}
                  style={{ padding: '8px 24px', borderRadius: '999px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', border: 'none', transition: 'all .15s', background: currency === c ? TD : 'transparent', color: currency === c ? '#fff' : TM }}
                >
                  {c === 'USD' ? 'USD' : 'EUR'}
                </button>
              ))}
            </div>
          </div>

          {/* Card */}
          <div style={{ background: '#fff', border: `1px solid ${BD}`, borderRadius: '16px', padding: '28px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(36,76,78,0.06)' }}>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: TM }}>
              Beneficiary Bank
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <CopyRow label={fields.bank} value={SHARED.bank} />
              <CopyRow label={fields.bank_address} value={SHARED.bank_address} />
              <CopyRow label={fields.bank_country} value={SHARED.bank_country} />
              <CopyRow label={fields.swift} value={SHARED.swift} />
              <CopyRow label={fields.iban} value={SHARED.iban} />
              <CopyRow label={fields.branch} value={SHARED.branch} />
              <CopyRow label={fields.account_type} value={SHARED.account_type} />
              <CopyRow label={fields.beneficiary} value={SHARED.beneficiary} highlight />
              <CopyRow label={fields.beneficiary_address} value={SHARED.beneficiary_address} />
            </div>
          </div>

          {/* Intermediary */}
          <div style={{ background: '#fff', border: `1px solid ${BD}`, borderRadius: '16px', padding: '28px', marginBottom: '28px', boxShadow: '0 2px 8px rgba(36,76,78,0.06)' }}>
            <p style={{ margin: '0 0 16px 0', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', color: TM }}>
              Intermediary Bank ({currency})
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <CopyRow label={fields.intermediary_swift} value={inter.intermediary_swift} />
              <CopyRow label={fields.intermediary_bank} value={inter.intermediary_bank} />
              <CopyRow label={fields.intermediary_country} value={inter.intermediary_country} />
              <CopyRow label={fields.intermediary_account} value={inter.intermediary_account} />
            </div>
          </div>

          {/* After transfer */}
          <div style={{ background: '#fff', border: `1px solid ${BD}`, borderRadius: '16px', padding: '28px', textAlign: 'center', boxShadow: '0 2px 8px rgba(36,76,78,0.06)' }}>
            <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: TM, lineHeight: 1.6 }}>
              {t('checkout.after_transfer')}
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#fff', padding: '12px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'opacity .15s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <MessageCircle size={17} />
              {t('checkout.contact_cta')}
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
