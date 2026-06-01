import { useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useFeaturebase } from 'featurebase-js/react'
import { ArrowLeft, Check, ChevronRight, Copy, MessageCircle, ShieldCheck } from 'lucide-react'
import { Footer } from '../components/sections/Footer'

type Currency = 'EUR' | 'USD'
type BillingCycle = 'monthly' | 'annual'
type CheckoutStep = 1 | 2 | 3
type LicenseChoice = 1 | 2 | 3 | 5 | 10 | 15 | 20 | '25+'

type CheckoutFieldKey =
  | 'bank'
  | 'bank_address'
  | 'bank_country'
  | 'swift'
  | 'iban'
  | 'branch'
  | 'account_type'
  | 'beneficiary'
  | 'beneficiary_address'
  | 'intermediary_swift'
  | 'intermediary_bank'
  | 'intermediary_country'
  | 'intermediary_account'

type CheckoutFields = Record<CheckoutFieldKey, string>

const BORDER = '#D0D7DE'
const TEXT = '#0a0a0a'
const MUTED = '#5F6B76'
const PANEL = '#F4F7FA'
const TEAL = '#14b8a6'
const DARK = '#1C3F41'
const GREEN = '#78B832'
const WHATSAPP_BASE = 'https://wa.me/5585998614541?text='

const COUNTRIES = [
  'United States',
  'Brazil',
  'Germany',
  'Italy',
  'Netherlands',
  'Portugal',
  'Spain',
  'United Arab Emirates',
  'United Kingdom',
  'Other',
]

const LICENSE_OPTIONS: LicenseChoice[] = [1, 2, 3, 5, 10, 15, 20, '25+']

const PRICING = {
  EUR: [
    { min: 1, max: 4, amount: 490 },
    { min: 5, max: 9, amount: 440 },
    { min: 10, max: 24, amount: 390 },
  ],
  USD: [
    { min: 1, max: 4, amount: 540 },
    { min: 5, max: 9, amount: 490 },
    { min: 10, max: 24, amount: 430 },
  ],
} satisfies Record<Currency, Array<{ min: number; max: number; amount: number }>>

const SHARED = {
  bank: 'Banco Topazio S/A',
  bank_address: 'Rua 18 de Novembro, 273 - Porto Alegre - RS, 90240-040',
  bank_country: 'Brazil',
  swift: 'TOPZBRRSXXX',
  iban: 'BR7679404000004227169063C1',
  branch: '0001',
  account_type: 'Checkings',
  beneficiary: 'VIRAL DESENVOLVIMENTO & TECNOLOGIA LTDA, GROUND CTRL',
  beneficiary_address: 'H Conj Ceara Ii, 1260 - Conjunto Ceara Ii, Fortaleza - CE, 60533-662',
} satisfies Record<Exclude<CheckoutFieldKey, 'intermediary_swift' | 'intermediary_bank' | 'intermediary_country' | 'intermediary_account'>, string>

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
} satisfies Record<Currency, Record<Extract<CheckoutFieldKey, 'intermediary_swift' | 'intermediary_bank' | 'intermediary_country' | 'intermediary_account'>, string>>

function getUnitPrice(quantity: number, currency: Currency) {
  return PRICING[currency].find((tier) => quantity >= tier.min && quantity <= tier.max)?.amount ?? null
}

function formatMoney(amount: number, currency: Currency) {
  return new Intl.NumberFormat(currency === 'EUR' ? 'nl-NL' : 'en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatTransferAmount(amount: number, currency: Currency) {
  return `${currency} ${new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)}`
}

function CopyRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) auto',
        gap: '12px',
        alignItems: 'center',
        padding: '14px 16px',
        borderRadius: '14px',
        background: highlight ? 'rgba(20,184,166,0.08)' : '#ffffff',
        border: `1px solid ${highlight ? 'rgba(20,184,166,0.34)' : BORDER}`,
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: highlight ? DARK : MUTED,
            marginBottom: '6px',
            fontWeight: 700,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: TEXT,
            lineHeight: 1.55,
            overflowWrap: 'anywhere',
            fontWeight: highlight ? 800 : 600,
          }}
        >
          {value}
        </div>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          justifyContent: 'center',
          minWidth: '96px',
          padding: '10px 14px',
          borderRadius: '12px',
          border: `1px solid ${copied ? 'rgba(20,184,166,0.4)' : BORDER}`,
          background: copied ? 'rgba(20,184,166,0.08)' : '#ffffff',
          color: copied ? DARK : MUTED,
          cursor: 'pointer',
          fontWeight: 700,
        }}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? t('checkout.copied') : t('checkout.copy')}
      </button>
    </div>
  )
}

export function CheckoutPage() {
  const { t } = useTranslation()
  const { update, showNewMessage } = useFeaturebase()
  const fields = t('checkout.fields', { returnObjects: true }) as CheckoutFields

  const [step, setStep] = useState<CheckoutStep>(1)
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [country, setCountry] = useState(COUNTRIES[0])
  const [licenseChoice, setLicenseChoice] = useState<LicenseChoice>(5)
  const [billing, setBilling] = useState<BillingCycle>('annual')
  const [currency, setCurrency] = useState<Currency>('EUR')
  const [accountTouched, setAccountTouched] = useState(false)

  const numericLicenseCount = licenseChoice === '25+' ? 25 : licenseChoice
  const customPricing = licenseChoice === '25+'
  const unitPrice = customPricing ? null : getUnitPrice(numericLicenseCount, currency)
  const monthlySubtotal = unitPrice === null ? null : unitPrice * numericLicenseCount
  const annualSubtotal = monthlySubtotal === null ? null : monthlySubtotal * 12
  const annualDiscount = annualSubtotal === null ? null : annualSubtotal * 0.2
  const totalAmount =
    billing === 'annual'
      ? annualSubtotal === null || annualDiscount === null
        ? null
        : annualSubtotal - annualDiscount
      : monthlySubtotal

  const accountValid = email.trim() && fullName.trim() && companyName.trim() && country.trim()

  const billingSuffix = billing === 'annual' ? t('checkout.per_year') : t('checkout.per_month')
  const selectedPlanLabel = customPricing
    ? '25+ licenses · custom quote'
    : `${numericLicenseCount} ${numericLicenseCount === 1 ? 'license' : 'licenses'} · ${t(`checkout.${billing}`)}`

  const transferAmount = totalAmount === null ? t('checkout.contact_sales') : formatTransferAmount(totalAmount, currency)

  const paymentWhatsappLink = useMemo(() => {
    const amountText = totalAmount === null ? 'custom quote' : formatTransferAmount(totalAmount, currency)
    return `${WHATSAPP_BASE}${encodeURIComponent(
      `I completed my GroundCTRL payment for ${licenseChoice} licenses ${currency} ${amountText}`
    )}`
  }, [currency, licenseChoice, totalAmount])

  const salesWhatsappLink = useMemo(
    () =>
      `${WHATSAPP_BASE}${encodeURIComponent(
        `Hi, I need a GroundCTRL custom quote for ${licenseChoice} licenses.`
      )}`,
    [licenseChoice]
  )

  const handleAccountSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAccountTouched(true)

    if (!accountValid) {
      return
    }

    update({
      email: email.trim(),
      name: fullName.trim(),
      company: { name: companyName.trim() },
    })

    showNewMessage(
      `New checkout lead: ${email.trim()} | ${fullName.trim()} | ${companyName.trim()} | ${licenseChoice} licenses | ${billing} billing | ${currency} ${totalAmount}`
    )

    setStep(3)
  }

  const goToAccount = () => {
    if (customPricing) {
      window.open(salesWhatsappLink, '_blank', 'noopener,noreferrer')
      return
    }
    setStep(2)
  }

  const stepItems = [
    { number: 1 as const, label: t('checkout.step_licenses'), enabled: true },
    { number: 2 as const, label: t('checkout.step_account'), enabled: true },
    { number: 3 as const, label: t('checkout.step_payment'), enabled: Boolean(accountValid) && !customPricing },
  ]

  const renderInput = ({
    label,
    value,
    onChange,
    type = 'text',
  }: {
    label: string
    value: string
    onChange: (value: string) => void
    type?: 'text' | 'email'
  }) => (
    <label style={{ display: 'grid', gap: '8px' }}>
      <span style={{ fontSize: '14px', fontWeight: 700, color: TEXT }}>{label}</span>
      <input
        value={value}
        type={type}
        onChange={(event) => onChange(event.target.value)}
        style={{
          width: '100%',
          borderRadius: '8px',
          border: `1px solid ${BORDER}`,
          padding: '15px 12px',
          fontSize: '15px',
          lineHeight: 1.4,
          color: TEXT,
          background: '#ffffff',
          outlineColor: TEAL,
        }}
      />
    </label>
  )

  return (
    <>
      <section className="checkout-shell" style={{ background: '#ffffff' }}>
        {step !== 3 ? (
        <aside className="checkout-aside">
          <div className="checkout-aside-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <img src="/website/logo.png" alt="GroundCTRL" style={{ height: '32px', width: 'auto' }} />
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, fontWeight: 700 }}>
                  GroundCTRL
                </div>
                <div style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.03em', color: DARK }}>
                  GroundCTRL Enterprise
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: '24px',
                background: '#ffffff',
                border: `1px solid ${BORDER}`,
                padding: '26px',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, fontWeight: 700, marginBottom: '14px' }}>
                Order summary
              </div>
              <div style={{ fontSize: '26px', lineHeight: 1.05, fontWeight: 900, color: TEXT, letterSpacing: '-0.04em' }}>
                GroundCTRL Enterprise
              </div>
              <div style={{ marginTop: '10px', color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>{selectedPlanLabel}</div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: `1px solid ${BORDER}`, display: 'grid', gap: '12px' }}>
                {customPricing ? (
                  <div
                    style={{
                      borderRadius: '18px',
                      padding: '16px 18px',
                      background: 'rgba(20,184,166,0.08)',
                      border: '1px solid rgba(20,184,166,0.22)',
                      color: DARK,
                      lineHeight: 1.6,
                    }}
                  >
                    {t('checkout.custom_pricing')}
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', color: MUTED, fontSize: '14px' }}>
                      <span>{formatMoney(unitPrice ?? 0, currency)} × {numericLicenseCount}</span>
                      <span>{formatMoney(monthlySubtotal ?? 0, currency)}{t('checkout.per_month')}</span>
                    </div>
                    {billing === 'annual' && annualSubtotal !== null && annualDiscount !== null && totalAmount !== null ? (
                      <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', color: MUTED, fontSize: '14px' }}>
                          <span>12 months</span>
                          <span>{formatMoney(annualSubtotal, currency)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', color: GREEN, fontSize: '14px', fontWeight: 700 }}>
                          <span>{t('checkout.discount')}</span>
                          <span>-{formatMoney(annualDiscount, currency)}</span>
                        </div>
                      </>
                    ) : null}
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', paddingTop: '14px', borderTop: `1px solid ${BORDER}`, color: TEXT, fontSize: '18px', fontWeight: 800 }}>
                      <span>{t('checkout.total')}</span>
                      <span>{formatMoney(totalAmount ?? 0, currency)}{billingSuffix}</span>
                    </div>
                  </>
                )}
              </div>

              <div style={{ marginTop: '24px', padding: '14px 16px', borderRadius: '16px', background: PANEL, color: DARK, display: 'flex', gap: '12px', alignItems: 'center' }}>
                <ShieldCheck size={18} />
                <span style={{ fontSize: '14px', fontWeight: 700 }}>Secure wire transfer · 256-bit encryption</span>
              </div>
            </div>

            <div style={{ marginTop: '24px', borderRadius: '22px', border: `1px solid ${BORDER}`, background: '#ffffff', overflow: 'hidden' }}>
              <div style={{ padding: '18px 20px', borderBottom: `1px solid ${BORDER}`, fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: MUTED }}>
                Monthly pricing tiers
              </div>
              <div style={{ display: 'grid' }}>
                {[
                  ['1–4', '€490', '$540'],
                  ['5–9', '€440', '$490'],
                  ['10–24', '€390', '$430'],
                  ['25+', t('checkout.contact_sales'), t('checkout.contact_sales')],
                ].map(([range, eur, usd], index) => (
                  <div
                    key={range}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '90px 1fr 1fr',
                      gap: '12px',
                      alignItems: 'center',
                      padding: '15px 20px',
                      borderTop: index === 0 ? 'none' : `1px solid ${BORDER}`,
                      fontSize: '14px',
                    }}
                  >
                    <strong style={{ color: TEXT }}>{range}</strong>
                    <span style={{ color: currency === 'EUR' ? DARK : MUTED, fontWeight: currency === 'EUR' ? 800 : 600 }}>{eur}/unit</span>
                    <span style={{ color: currency === 'USD' ? DARK : MUTED, fontWeight: currency === 'USD' ? 800 : 600 }}>{usd}/unit</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
        ) : null}

        <div className="checkout-main">
          <div className="checkout-form-card">
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: MUTED,
                textDecoration: 'none',
                fontWeight: 700,
                marginBottom: '28px',
              }}
            >
              <ArrowLeft size={16} />
              GroundCTRL
            </Link>

            <div className="checkout-step-indicator" style={{ marginBottom: '32px' }}>
              {stepItems.map((item) => {
                const active = step === item.number
                const complete = step > item.number
                const disabled = !item.enabled

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => {
                      if (!disabled && item.number <= step) {
                        setStep(item.number)
                      }
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '18px',
                      border: `1px solid ${active ? 'rgba(20,184,166,0.35)' : BORDER}`,
                      background: active ? 'rgba(20,184,166,0.08)' : '#ffffff',
                      opacity: disabled ? 0.45 : 1,
                      cursor: disabled ? 'not-allowed' : 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '999px',
                        display: 'grid',
                        placeItems: 'center',
                        background: complete || active ? DARK : PANEL,
                        color: complete || active ? '#ffffff' : MUTED,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {item.number}
                    </span>
                    <span>
                      <span style={{ display: 'block', fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED, fontWeight: 700 }}>
                        Step {item.number}
                      </span>
                      <span style={{ display: 'block', marginTop: '2px', color: TEXT, fontSize: '15px', fontWeight: 800 }}>{item.label}</span>
                    </span>
                  </button>
                )
              })}
            </div>

            <div
              style={{
                borderRadius: '28px',
                border: `1px solid ${BORDER}`,
                background: '#ffffff',
                boxShadow: '0 24px 60px rgba(15, 23, 42, 0.06)',
                padding: 'clamp(24px, 4vw, 40px)',
              }}
            >
              {step === 1 ? (
                <div className="checkout-step-panel">
                  <div style={{ marginBottom: '26px' }}>
                    <div style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: TEAL, fontWeight: 800, marginBottom: '12px' }}>
                      {t('checkout.step_licenses')}
                    </div>
                    <h1 style={{ margin: 0, color: TEXT, fontSize: 'clamp(36px, 4vw, 46px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>
                      {t('checkout.licenses_title')}
                    </h1>
                    <p style={{ margin: '12px 0 0', color: MUTED, lineHeight: 1.7, fontSize: '16px', maxWidth: '580px' }}>
                      Choose the number of operator tablets you need, then select how you want to bill the deployment.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gap: '24px' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: TEXT, marginBottom: '12px' }}>{t('checkout.license_count')}</div>
                      <div className="checkout-license-grid">
                        {LICENSE_OPTIONS.map((item) => {
                          const active = item === licenseChoice
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => setLicenseChoice(item)}
                              style={{
                                padding: '14px 16px',
                                borderRadius: '999px',
                                border: `1px solid ${active ? 'rgba(20,184,166,0.45)' : BORDER}`,
                                background: active ? 'rgba(20,184,166,0.1)' : '#ffffff',
                                color: active ? DARK : TEXT,
                                fontWeight: 800,
                                cursor: 'pointer',
                              }}
                            >
                              {item}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="checkout-two-col">
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: TEXT, marginBottom: '12px' }}>{t('checkout.billing_cycle')}</div>
                        <div style={{ display: 'inline-flex', padding: '4px', background: PANEL, borderRadius: '999px', gap: '4px' }}>
                          {(['monthly', 'annual'] as const).map((item) => {
                            const active = billing === item
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => setBilling(item)}
                                style={{
                                  border: 'none',
                                  borderRadius: '999px',
                                  padding: '12px 18px',
                                  background: active ? '#ffffff' : 'transparent',
                                  color: active ? TEXT : MUTED,
                                  cursor: 'pointer',
                                  fontWeight: 800,
                                  boxShadow: active ? '0 2px 12px rgba(15, 23, 42, 0.08)' : 'none',
                                }}
                              >
                                {t(`checkout.${item}`)}
                                {item === 'annual' ? (
                                  <span style={{ marginLeft: '8px', color: GREEN }}>{t('checkout.annual_badge')}</span>
                                ) : null}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: TEXT, marginBottom: '12px' }}>{t('checkout.currency_label')}</div>
                        <div style={{ display: 'inline-flex', padding: '4px', background: PANEL, borderRadius: '999px', gap: '4px' }}>
                          {(['EUR', 'USD'] as const).map((item) => {
                            const active = currency === item
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => setCurrency(item)}
                                style={{
                                  border: 'none',
                                  borderRadius: '999px',
                                  padding: '12px 22px',
                                  background: active ? DARK : 'transparent',
                                  color: active ? '#ffffff' : MUTED,
                                  cursor: 'pointer',
                                  fontWeight: 800,
                                }}
                              >
                                {item}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <div style={{ borderRadius: '22px', border: `1px solid ${BORDER}`, overflow: 'hidden' }}>
                      <div style={{ padding: '18px 20px', background: PANEL, color: TEXT, fontWeight: 800 }}>
                        {customPricing ? t('checkout.custom_pricing') : `${numericLicenseCount} licenses · ${t(`checkout.${billing}`)} billing`}
                      </div>
                      {customPricing ? (
                        <div style={{ padding: '20px' }}>
                          <p style={{ margin: 0, color: MUTED, lineHeight: 1.7 }}>{t('checkout.custom_pricing')}</p>
                          <a
                            href={salesWhatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              marginTop: '18px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '13px 18px',
                              borderRadius: '999px',
                              background: '#25D366',
                              color: '#ffffff',
                              textDecoration: 'none',
                              fontWeight: 800,
                            }}
                          >
                            <MessageCircle size={16} />
                            {t('checkout.contact_sales')}
                          </a>
                        </div>
                      ) : (
                        <div style={{ padding: '20px', display: 'grid', gap: '14px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', color: MUTED, fontSize: '14px' }}>
                            <span>{t('checkout.unit_price')}</span>
                            <strong style={{ color: TEXT }}>{formatMoney(unitPrice ?? 0, currency)}</strong>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', color: MUTED, fontSize: '14px' }}>
                            <span>× {numericLicenseCount}</span>
                            <strong style={{ color: TEXT }}>{formatMoney(monthlySubtotal ?? 0, currency)}{t('checkout.per_month')}</strong>
                          </div>
                          {billing === 'annual' && annualSubtotal !== null && annualDiscount !== null ? (
                            <>
                              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', color: MUTED, fontSize: '14px' }}>
                                <span>{t('checkout.subtotal')}</span>
                                <strong style={{ color: TEXT }}>{formatMoney(annualSubtotal, currency)}</strong>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', color: GREEN, fontSize: '14px', fontWeight: 800 }}>
                                <span>{t('checkout.discount')}</span>
                                <span>-{formatMoney(annualDiscount, currency)}</span>
                              </div>
                            </>
                          ) : null}
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', paddingTop: '14px', borderTop: `1px solid ${BORDER}`, fontSize: '18px', fontWeight: 800, color: TEXT }}>
                            <span>{t('checkout.total')}</span>
                            <span>{formatMoney(totalAmount ?? 0, currency)}{billingSuffix}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
                    <button
                      type="button"
                      onClick={goToAccount}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        flex: '1 1 260px',
                        border: 'none',
                        borderRadius: '999px',
                        background: customPricing ? DARK : TEAL,
                        color: '#ffffff',
                        padding: '16px 24px',
                        fontWeight: 800,
                        cursor: 'pointer',
                      }}
                    >
                      {customPricing ? t('checkout.contact_sales') : t('checkout.continue')}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <form className="checkout-step-panel" onSubmit={handleAccountSubmit}>
                  <div style={{ marginBottom: '26px' }}>
                    <div style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: TEAL, fontWeight: 800, marginBottom: '12px' }}>
                      {t('checkout.step_account')}
                    </div>
                    <h1 style={{ margin: 0, color: TEXT, fontSize: 'clamp(36px, 4vw, 46px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>
                      {t('checkout.account_title')}
                    </h1>
                    <p style={{ margin: '12px 0 0', color: MUTED, lineHeight: 1.7, fontSize: '16px', maxWidth: '560px' }}>
                      Set up your buyer profile. We will use these details to prepare your enterprise order and follow up after payment.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gap: '18px' }}>
                    {renderInput({ label: t('checkout.email'), value: email, onChange: setEmail, type: 'email' })}
                    <div className="checkout-two-col">
                      {renderInput({ label: t('checkout.full_name'), value: fullName, onChange: setFullName })}
                      {renderInput({ label: t('checkout.company'), value: companyName, onChange: setCompanyName })}
                    </div>
                    <label style={{ display: 'grid', gap: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: TEXT }}>{t('checkout.country')}</span>
                      <select
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        style={{
                          width: '100%',
                          borderRadius: '8px',
                          border: `1px solid ${BORDER}`,
                          padding: '15px 12px',
                          fontSize: '15px',
                          lineHeight: 1.4,
                          color: TEXT,
                          background: '#ffffff',
                          outlineColor: TEAL,
                        }}
                      >
                        {COUNTRIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {accountTouched && !accountValid ? (
                    <div style={{ marginTop: '16px', color: '#b91c1c', fontSize: '14px', fontWeight: 700 }}>
                      Please fill in every field before continuing.
                    </div>
                  ) : null}

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '26px' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        borderRadius: '999px',
                        border: `1px solid ${BORDER}`,
                        background: '#ffffff',
                        color: TEXT,
                        padding: '14px 18px',
                        fontWeight: 800,
                        cursor: 'pointer',
                      }}
                    >
                      <ArrowLeft size={16} />
                      {t('checkout.back')}
                    </button>
                    <button
                      type="submit"
                      style={{
                        flex: '1 1 200px',
                        border: 'none',
                        borderRadius: '999px',
                        background: TEAL,
                        color: '#ffffff',
                        padding: '16px 24px',
                        fontSize: '16px',
                        fontWeight: 800,
                        cursor: 'pointer',
                      }}
                    >
                      {t('checkout.continue')}
                    </button>
                  </div>
                </form>
              ) : null}

              {step === 3 ? (
                <div className="checkout-step-panel">
                  <div style={{ marginBottom: '26px' }}>
                    <div style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: TEAL, fontWeight: 800, marginBottom: '12px' }}>
                      {t('checkout.step_payment')}
                    </div>
                    <h1 style={{ margin: 0, color: TEXT, fontSize: 'clamp(36px, 4vw, 46px)', lineHeight: 0.98, letterSpacing: '-0.05em' }}>
                      {t('checkout.payment_title')}
                    </h1>
                    <p style={{ margin: '12px 0 0', color: MUTED, lineHeight: 1.7, fontSize: '16px', maxWidth: '580px' }}>
                      Transfer the exact amount below. Once the transfer is complete, send us the proof on WhatsApp so we can activate your licenses.
                    </p>
                  </div>

                  <div
                    style={{
                      padding: '22px 24px',
                      borderRadius: '22px',
                      background: 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(28,63,65,0.08))',
                      border: '1px solid rgba(20,184,166,0.24)',
                      marginBottom: '24px',
                    }}
                  >
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: MUTED, fontWeight: 700 }}>
                      {t('checkout.transfer_amount')}
                    </div>
                    <div style={{ fontSize: 'clamp(34px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-0.04em', color: DARK, marginTop: '10px' }}>
                      {transferAmount}
                    </div>
                    <div style={{ marginTop: '10px', color: MUTED, fontSize: '14px' }}>{selectedPlanLabel}</div>
                  </div>

                  <div style={{ display: 'grid', gap: '14px' }}>
                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: MUTED, fontWeight: 700 }}>
                      Beneficiary bank
                    </div>
                    <CopyRow label={fields.bank} value={SHARED.bank} />
                    <CopyRow label={fields.bank_address} value={SHARED.bank_address} />
                    <CopyRow label={fields.bank_country} value={SHARED.bank_country} />
                    <CopyRow label={fields.swift} value={SHARED.swift} />
                    <CopyRow label={fields.iban} value={SHARED.iban} />
                    <CopyRow label={fields.branch} value={SHARED.branch} />
                    <CopyRow label={fields.account_type} value={SHARED.account_type} />
                    <CopyRow label={fields.beneficiary} value={SHARED.beneficiary} highlight />
                    <CopyRow label={fields.beneficiary_address} value={SHARED.beneficiary_address} />

                    <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.14em', color: MUTED, fontWeight: 700, marginTop: '10px' }}>
                      Intermediary bank ({currency})
                    </div>
                    <CopyRow label={fields.intermediary_swift} value={INTERMEDIARY[currency].intermediary_swift} />
                    <CopyRow label={fields.intermediary_bank} value={INTERMEDIARY[currency].intermediary_bank} />
                    <CopyRow label={fields.intermediary_country} value={INTERMEDIARY[currency].intermediary_country} />
                    <CopyRow label={fields.intermediary_account} value={INTERMEDIARY[currency].intermediary_account} />
                  </div>

                  <div
                    style={{
                      marginTop: '24px',
                      padding: '16px 18px',
                      borderRadius: '18px',
                      border: '1px solid rgba(245, 158, 11, 0.35)',
                      background: 'rgba(245, 158, 11, 0.09)',
                      color: '#92400e',
                      fontWeight: 700,
                      lineHeight: 1.6,
                    }}
                  >
                    {t('checkout.beneficiary_warning')} <span style={{ color: TEXT }}>{SHARED.beneficiary}</span>
                  </div>

                  <p style={{ margin: '18px 0 0', color: MUTED, lineHeight: 1.7, fontSize: '15px' }}>
                    {t('checkout.after_transfer')}
                  </p>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        borderRadius: '999px',
                        border: `1px solid ${BORDER}`,
                        background: '#ffffff',
                        color: TEXT,
                        padding: '14px 18px',
                        fontWeight: 800,
                        cursor: 'pointer',
                      }}
                    >
                      <ArrowLeft size={16} />
                      {t('checkout.back')}
                    </button>
                    <a
                      href={paymentWhatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        flex: '1 1 280px',
                        borderRadius: '999px',
                        background: '#25D366',
                        color: '#ffffff',
                        textDecoration: 'none',
                        padding: '16px 24px',
                        fontWeight: 800,
                      }}
                    >
                      <MessageCircle size={18} />
                      {t('checkout.completed_transfer')}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
