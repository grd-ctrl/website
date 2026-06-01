import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useFeaturebase } from 'featurebase-js/react'
import { ArrowLeft, Send, CheckCircle } from 'lucide-react'
import { Footer } from '../components/sections/Footer'

const TEAL = '#14b8a6'
const DARK = '#0c1a1c'
const TEXT = '#1a2e2e'
const MUTED = '#6b7280'
const BORDER = '#e2e8f0'
const PANEL = '#f8fafb'

const ROLES = [
  'Security Operations Manager',
  'Control Room Operator',
  'NOC Engineer',
  'IT Manager',
  'AV/Integration Specialist',
  'C-Level / Executive',
  'Procurement',
  'Other',
]

export function DemoPage() {
  const { update, showNewMessage } = useFeaturebase()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const valid = name.trim() && email.trim() && company.trim() && role

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!valid) return

    update({ email: email.trim(), name: name.trim(), company: { name: company.trim() } })
    showNewMessage(
      `Demo request — ${name.trim()} (${role}) at ${company.trim()} | ${email.trim()}${message.trim() ? ` | Note: ${message.trim()}` : ''}`
    )
    setSubmitted(true)
  }

  const field = (
    label: string,
    value: string,
    onChange: (v: string) => void,
    required = true,
    type = 'text'
  ) => {
    const missing = touched && required && !value.trim()
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label style={{ fontSize: '13px', fontWeight: 700, color: TEXT, letterSpacing: '0.02em' }}>
          {label}{required && <span style={{ color: TEAL }}> *</span>}
        </label>
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            padding: '12px 14px',
            borderRadius: '12px',
            border: `1px solid ${missing ? '#ef4444' : BORDER}`,
            background: '#fff',
            fontSize: '15px',
            color: TEXT,
            outline: 'none',
            transition: 'border-color .15s',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = TEAL)}
          onBlur={e => (e.currentTarget.style.borderColor = missing ? '#ef4444' : BORDER)}
        />
        {missing && <span style={{ fontSize: '12px', color: '#ef4444' }}>Required</span>}
      </div>
    )
  }

  return (
    <>
      <section style={{ minHeight: '100vh', background: PANEL, padding: 'clamp(80px, 10vw, 120px) 24px 60px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: MUTED, textDecoration: 'none', fontWeight: 700, marginBottom: '32px', fontSize: '14px' }}
          >
            <ArrowLeft size={15} />
            Back to GroundCTRL
          </Link>

          {!submitted ? (
            <div
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                border: `1px solid ${BORDER}`,
                boxShadow: '0 24px 60px rgba(15,23,42,0.07)',
                padding: 'clamp(28px, 5vw, 48px)',
              }}
            >
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: TEAL, fontWeight: 800, marginBottom: '10px' }}>
                  Request a Demo
                </div>
                <h1 style={{ margin: 0, fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 900, color: DARK, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
                  See GroundCTRL in action.
                </h1>
                <p style={{ margin: '10px 0 0', color: MUTED, fontSize: '15px', lineHeight: 1.65 }}>
                  Tell us a bit about yourself and we'll get back to you within 1 business day to schedule a live session.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                {field('Full name', name, setName)}
                {field('Work email', email, setEmail, true, 'email')}
                {field('Company', company, setCompany)}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: TEXT }}>
                    Your role<span style={{ color: TEAL }}> *</span>
                  </label>
                  <select
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: `1px solid ${touched && !role ? '#ef4444' : BORDER}`,
                      background: '#fff',
                      fontSize: '15px',
                      color: role ? TEXT : MUTED,
                      outline: 'none',
                    }}
                  >
                    <option value="" disabled>Select your role…</option>
                    {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {touched && !role && <span style={{ fontSize: '12px', color: '#ef4444' }}>Required</span>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: TEXT }}>
                    What are you looking to solve? <span style={{ color: MUTED, fontWeight: 500 }}>(optional)</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={3}
                    placeholder="e.g. We have 6 Barco video walls across 2 control rooms and need simpler operator workflows…"
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: `1px solid ${BORDER}`,
                      background: '#fff',
                      fontSize: '15px',
                      color: TEXT,
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = TEAL)}
                    onBlur={e => (e.currentTarget.style.borderColor = BORDER)}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '15px 28px',
                    borderRadius: '999px',
                    border: 'none',
                    background: TEAL,
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                >
                  <Send size={16} />
                  Request Demo
                </button>
              </form>
            </div>
          ) : (
            <div
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                border: `1px solid ${BORDER}`,
                boxShadow: '0 24px 60px rgba(15,23,42,0.07)',
                padding: 'clamp(28px, 5vw, 56px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <CheckCircle size={52} color={TEAL} strokeWidth={1.5} />
              <div>
                <h2 style={{ margin: 0, fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 900, color: DARK, letterSpacing: '-0.04em' }}>
                  Request received, {name.trim().split(' ')[0]}!
                </h2>
                <p style={{ margin: '10px 0 0', color: MUTED, fontSize: '15px', lineHeight: 1.65 }}>
                  Our team will reach out to <strong style={{ color: TEXT }}>{email.trim()}</strong> within 1 business day to schedule your demo.
                </p>
              </div>
              <Link
                to="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: '999px',
                  background: PANEL,
                  border: `1px solid ${BORDER}`,
                  color: TEXT,
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '14px',
                }}
              >
                <ArrowLeft size={14} />
                Back to homepage
              </Link>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
