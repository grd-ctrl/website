import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Copy, Check, AlertTriangle, MessageCircle, ArrowLeft } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Footer } from '../components/sections/Footer'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+here+is+my+proof+of+payment+for+GroundCTRL'

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

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl"
      style={{ background: '#0d1421', border: '1px solid #1e2d45' }}
    >
      <div className="min-w-0 flex-1">
        <p className="text-xs mb-0.5" style={{ color: '#6b7a99' }}>{label}</p>
        <p className="text-sm font-mono font-medium truncate" style={{ color: '#e8edf5' }}>{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0 transition-all"
        style={{
          background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(0,212,255,0.08)',
          border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : 'rgba(0,212,255,0.2)'}`,
          color: copied ? '#10b981' : '#00d4ff',
          cursor: 'pointer',
        }}
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
      <div className="min-h-screen py-16 px-6" style={{ background: '#0a0f1a' }}>
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm mb-8 no-underline transition-colors"
            style={{ color: '#6b7a99' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#00d4ff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7a99')}
          >
            <ArrowLeft size={16} />
            GroundCTRL
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold mb-2" style={{ color: '#e8edf5' }}>
              {t('checkout.title')}
            </h1>
            <p style={{ color: '#6b7a99' }}>{t('checkout.subtitle')}</p>
          </div>

          {/* Warning */}
          <div
            className="flex gap-3 p-4 rounded-xl mb-8"
            style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}
          >
            <AlertTriangle size={18} style={{ color: '#f59e0b', flexShrink: 0, marginTop: 2 }} />
            <p className="text-sm leading-relaxed" style={{ color: '#d97706' }}>
              {t('checkout.warning')}
            </p>
          </div>

          {/* Currency toggle */}
          <div className="mb-8">
            <p className="text-sm mb-3" style={{ color: '#6b7a99' }}>{t('checkout.currency_label')}</p>
            <div
              className="inline-flex rounded-xl overflow-hidden"
              style={{ border: '1px solid #1e2d45' }}
            >
              {(['USD', 'EUR'] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className="px-6 py-2.5 text-sm font-semibold transition-all"
                  style={{
                    background: currency === c ? 'rgba(0,212,255,0.12)' : 'transparent',
                    color: currency === c ? '#00d4ff' : '#6b7a99',
                    border: 'none',
                    cursor: 'pointer',
                    borderRight: c === 'USD' ? '1px solid #1e2d45' : 'none',
                  }}
                >
                  {c === 'USD' ? '🇺🇸 USD' : '🇪🇺 EUR'}
                </button>
              ))}
            </div>
          </div>

          {/* Bank details */}
          <div className="flex flex-col gap-3 mb-8">
            <CopyRow label={fields.bank} value={SHARED.bank} />
            <CopyRow label={fields.bank_address} value={SHARED.bank_address} />
            <CopyRow label={fields.bank_country} value={SHARED.bank_country} />
            <CopyRow label={fields.swift} value={SHARED.swift} />
            <CopyRow label={fields.iban} value={SHARED.iban} />
            <CopyRow label={fields.branch} value={SHARED.branch} />
            <CopyRow label={fields.account_type} value={SHARED.account_type} />

            {/* Beneficiary highlighted */}
            <div
              className="flex items-center justify-between gap-4 py-3 px-4 rounded-xl"
              style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)' }}
            >
              <div className="min-w-0 flex-1">
                <p className="text-xs mb-0.5 font-semibold" style={{ color: '#00d4ff' }}>{fields.beneficiary}</p>
                <p className="text-sm font-mono font-bold" style={{ color: '#e8edf5' }}>{SHARED.beneficiary}</p>
              </div>
              <BeneficiaryCopy value={SHARED.beneficiary} t={t} />
            </div>

            <CopyRow label={fields.beneficiary_address} value={SHARED.beneficiary_address} />
          </div>

          {/* Intermediary bank */}
          <div
            className="rounded-xl p-4 mb-8"
            style={{ background: '#0d1421', border: '1px solid #1e2d45' }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6b7a99' }}>
              {currency === 'USD' ? '🇺🇸' : '🇪🇺'} Intermediary Bank ({currency})
            </p>
            <div className="flex flex-col gap-3">
              <CopyRow label={fields.intermediary_swift} value={inter.intermediary_swift} />
              <CopyRow label={fields.intermediary_bank} value={inter.intermediary_bank} />
              <CopyRow label={fields.intermediary_country} value={inter.intermediary_country} />
              <CopyRow label={fields.intermediary_account} value={inter.intermediary_account} />
            </div>
          </div>

          {/* After transfer */}
          <div
            className="rounded-xl p-6 text-center"
            style={{ background: '#111827', border: '1px solid #1e2d45' }}
          >
            <p className="text-sm mb-4" style={{ color: '#6b7a99' }}>
              {t('checkout.after_transfer')}
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold no-underline transition-all"
              style={{
                background: 'linear-gradient(135deg, #25d366, #1ab757)',
                color: '#fff',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.85'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
            >
              <MessageCircle size={18} />
              {t('checkout.contact_cta')}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

function BeneficiaryCopy({ value, t }: { value: string; t: (k: string) => string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0 transition-all"
      style={{
        background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(0,212,255,0.12)',
        border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : 'rgba(0,212,255,0.3)'}`,
        color: copied ? '#10b981' : '#00d4ff',
        cursor: 'pointer',
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? t('checkout.copied') : t('checkout.copy')}
    </button>
  )
}
