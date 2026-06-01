import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { useFeaturebase } from 'featurebase-js/react'
import { ArrowLeft, Send, CheckCircle, ChevronDown } from 'lucide-react'
import { Footer } from '../components/sections/Footer'

const TEAL = '#14b8a6'
const TEAL_DIM = 'rgba(20,184,166,0.18)'
const PANEL = '#0c1a1c'
const BORDER = 'rgba(20,184,166,0.18)'
const MUTED = 'rgba(255,255,255,0.45)'
const TEXT = 'rgba(255,255,255,0.92)'

const ROLES = [
  'Security Operations Manager',
  'Control Room Operator',
  'NOC Engineer',
  'IT Manager',
  'AV / Integration Specialist',
  'C-Level / Executive',
  'Procurement',
  'Other',
]

const STATS = [
  { value: '< 2s', label: 'Action latency' },
  { value: '40+', label: 'Integrations' },
  { value: '99.9%', label: 'Uptime SLA' },
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
  const [mounted, setMounted] = useState(false)
  const [scanY, setScanY] = useState(0)

  useEffect(() => {
    setMounted(true)
    // scan-line animation
    let raf: number
    let y = 0
    const animate = () => {
      y = (y + 0.3) % 100
      setScanY(y)
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

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

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(20,184,166,0.5); }
          70%  { box-shadow: 0 0 0 12px rgba(20,184,166,0); }
          100% { box-shadow: 0 0 0 0 rgba(20,184,166,0); }
        }
        .demo-field-input {
          width: 100%;
          box-sizing: border-box;
          padding: 13px 16px;
          border-radius: 12px;
          border: 1px solid rgba(20,184,166,0.18);
          background: rgba(255,255,255,0.04);
          font-size: 15px;
          color: rgba(255,255,255,0.92);
          outline: none;
          transition: border-color .2s, background .2s, box-shadow .2s;
          font-family: inherit;
        }
        .demo-field-input::placeholder { color: rgba(255,255,255,0.25); }
        .demo-field-input:focus {
          border-color: #14b8a6;
          background: rgba(20,184,166,0.06);
          box-shadow: 0 0 0 3px rgba(20,184,166,0.12);
        }
        .demo-field-select {
          appearance: none;
          -webkit-appearance: none;
          width: 100%;
          box-sizing: border-box;
          padding: 13px 40px 13px 16px;
          border-radius: 12px;
          border: 1px solid rgba(20,184,166,0.18);
          background: rgba(255,255,255,0.04);
          font-size: 15px;
          color: rgba(255,255,255,0.92);
          outline: none;
          transition: border-color .2s, background .2s;
          font-family: inherit;
          cursor: pointer;
        }
        .demo-field-select:focus {
          border-color: #14b8a6;
          background: rgba(20,184,166,0.06);
          box-shadow: 0 0 0 3px rgba(20,184,166,0.12);
        }
        .demo-field-select option { background: #0c1a1c; color: #fff; }
        .demo-submit-btn {
          position: relative;
          overflow: hidden;
          padding: 15px 32px;
          border-radius: 999px;
          border: none;
          background: #14b8a6;
          color: #fff;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-family: inherit;
          transition: transform .15s, box-shadow .15s;
        }
        .demo-submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 32px rgba(20,184,166,0.38);
        }
        .demo-submit-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 2.2s infinite;
        }
        @media (max-width: 860px) {
          .demo-split { flex-direction: column !important; }
          .demo-image-panel { min-height: 260px !important; flex: none !important; width: 100% !important; }
          .demo-form-panel { min-height: unset !important; }
        }
      `}</style>

      <div
        className="demo-split"
        style={{
          display: 'flex',
          minHeight: '100vh',
          marginTop: '-64px',
        }}
      >
        {/* ── LEFT: image panel ── */}
        <div
          className="demo-image-panel"
          style={{
            flex: '0 0 46%',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: "url('/website/img-demo-panel.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(4,10,11,0.82) 0%, rgba(4,10,11,0.55) 60%, rgba(4,10,11,0.78) 100%)' }} />

          {/* grid texture */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(20,184,166,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.07) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          {/* scan-line */}
          <div style={{
            position: 'absolute',
            left: 0, right: 0,
            top: `${scanY}%`,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(20,184,166,0.5), transparent)',
            pointerEvents: 'none',
            transition: 'none',
          }} />

          {/* corner bracket top-left */}
          <div style={{ position: 'absolute', top: 24, left: 24, width: 32, height: 32, borderTop: `2px solid ${TEAL}`, borderLeft: `2px solid ${TEAL}` }} />
          <div style={{ position: 'absolute', bottom: 24, right: 24, width: 32, height: 32, borderBottom: `2px solid ${TEAL}`, borderRight: `2px solid ${TEAL}` }} />

          {/* content */}
          <div style={{ position: 'relative', zIndex: 2, padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontWeight: 700, fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
              <ArrowLeft size={14} />
              GROUNDCTRL
            </Link>

            <div style={{ animation: mounted ? 'fadeUp .7s ease both' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', color: TEAL, marginBottom: '20px', textTransform: 'uppercase' }}>
                // LIVE DEMO REQUEST
              </div>
              <h1 style={{
                margin: '0 0 20px',
                color: '#ffffff',
                fontSize: 'clamp(34px, 3.5vw, 52px)',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}>
                Command your<br />
                <span style={{ color: TEAL }}>control room.</span>
              </h1>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.58)', fontSize: '15px', lineHeight: 1.7, maxWidth: '340px' }}>
                One tablet. Every layout, camera, and scenario — executed in a single tap.
              </p>

              {/* stats row */}
              <div style={{ display: 'flex', gap: '24px', marginTop: '36px', flexWrap: 'wrap' }}>
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    style={{
                      animation: mounted ? `fadeUp .7s ease ${0.15 + i * 0.1}s both` : 'none',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', fontWeight: 900, color: TEAL, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* live indicator */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              borderRadius: '999px',
              background: 'rgba(20,184,166,0.10)',
              border: '1px solid rgba(20,184,166,0.22)',
              backdropFilter: 'blur(10px)',
              width: 'fit-content',
              animation: mounted ? 'fadeIn 1s ease .5s both' : 'none',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '999px', background: TEAL, display: 'block', animation: 'pulse-ring 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: TEAL, letterSpacing: '0.14em' }}>RESPONSE TIME &lt; 24H</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: form panel ── */}
        <div
          className="demo-form-panel"
          style={{
            flex: 1,
            background: PANEL,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(40px, 5vw, 72px) clamp(28px, 5vw, 72px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* background glow */}
          <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '999px', background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {!submitted ? (
              <>
                <div style={{ marginBottom: '32px', animation: mounted ? 'fadeUp .6s ease .1s both' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.18em', color: TEAL, marginBottom: '12px', textTransform: 'uppercase' }}>
                    Schedule a session
                  </div>
                  <h2 style={{ margin: 0, fontSize: 'clamp(24px, 2.8vw, 32px)', fontWeight: 900, color: TEXT, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
                    See it live.
                  </h2>
                  <p style={{ margin: '10px 0 0', color: MUTED, fontSize: '14px', lineHeight: 1.7 }}>
                    We'll show you GroundCTRL running on your type of setup — no sales pressure, just the product.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
                  {/* name + email */}
                  {[
                    { label: 'Full name', val: name, set: setName, type: 'text', delay: '.2s' },
                    { label: 'Work email', val: email, set: setEmail, type: 'email', delay: '.25s' },
                    { label: 'Company', val: company, set: setCompany, type: 'text', delay: '.3s' },
                  ].map(({ label, val, set, type, delay }) => {
                    const err = touched && !val.trim()
                    return (
                      <div key={label} style={{ animation: mounted ? `fadeUp .6s ease ${delay} both` : 'none' }}>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                          {label}
                        </label>
                        <input
                          type={type}
                          value={val}
                          onChange={e => set(e.target.value)}
                          className="demo-field-input"
                          style={{ borderColor: err ? '#ef4444' : undefined }}
                        />
                        {err && <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', display: 'block' }}>Required</span>}
                      </div>
                    )
                  })}

                  {/* role select */}
                  <div style={{ animation: mounted ? 'fadeUp .6s ease .35s both' : 'none', position: 'relative' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                      Your role
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        value={role}
                        onChange={e => setRole(e.target.value)}
                        className="demo-field-select"
                        style={{ borderColor: touched && !role ? '#ef4444' : undefined, color: role ? TEXT : MUTED }}
                      >
                        <option value="" disabled>Select role…</option>
                        {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                      </select>
                      <ChevronDown size={16} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: MUTED, pointerEvents: 'none' }} />
                    </div>
                    {touched && !role && <span style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', display: 'block' }}>Required</span>}
                  </div>

                  {/* message */}
                  <div style={{ animation: mounted ? 'fadeUp .6s ease .4s both' : 'none' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: MUTED, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                      What are you solving? <span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 400 }}>(optional)</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={2}
                      placeholder="e.g. 6 Barco walls across 2 control rooms, operators need simpler workflows…"
                      className="demo-field-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <div style={{ animation: mounted ? 'fadeUp .6s ease .45s both' : 'none', marginTop: '4px' }}>
                    <button type="submit" className="demo-submit-btn">
                      <Send size={16} />
                      Request Demo
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', animation: 'fadeUp .6s ease both' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '999px',
                  background: TEAL_DIM, border: `1px solid ${TEAL}`,
                  display: 'grid', placeItems: 'center',
                  animation: 'pulse-ring 2s ease 1',
                }}>
                  <CheckCircle size={32} color={TEAL} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: TEAL, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Request received
                  </div>
                  <h2 style={{ margin: 0, fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 900, color: TEXT, letterSpacing: '-0.04em' }}>
                    Great to meet you, {name.trim().split(' ')[0]}.
                  </h2>
                  <p style={{ margin: '12px 0 0', color: MUTED, fontSize: '14px', lineHeight: 1.7, maxWidth: '340px' }}>
                    We'll reach out to <span style={{ color: TEXT, fontWeight: 600 }}>{email.trim()}</span> within 1 business day to schedule your session.
                  </p>
                </div>

                <div style={{ padding: '16px 20px', borderRadius: '16px', background: 'rgba(20,184,166,0.06)', border: `1px solid ${BORDER}`, width: '100%', textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: MUTED, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '8px' }}>Confirmed</div>
                  <div style={{ color: TEXT, fontWeight: 700, fontSize: '14px' }}>{name.trim()}</div>
                  <div style={{ color: MUTED, fontSize: '13px', marginTop: '2px' }}>{role} · {company.trim()}</div>
                </div>

                <Link to="/"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '12px 22px', borderRadius: '999px',
                    border: `1px solid ${BORDER}`, background: 'transparent',
                    color: MUTED, fontWeight: 700, textDecoration: 'none', fontSize: '14px',
                  }}
                >
                  <ArrowLeft size={14} />
                  Back to homepage
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

