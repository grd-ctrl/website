import { useTranslation } from 'react-i18next'
import { useFeaturebase } from 'featurebase-js/react'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export function SupportSection() {
  const { t } = useTranslation()
  const { show } = useFeaturebase()

  return (
    <section
      id="support"
      style={{
        background: '#1C3F41',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blueprint grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '560px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* LEFT: Photo */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
          <img
            src="/website/thisisengineering.jpg"
            alt="GroundCTRL Support Team"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Gradient overlay right edge for blending */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 55%, #1C3F41 100%)',
            }}
          />
          {/* Availability badge */}
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '28px',
              background: 'rgba(10,30,30,0.82)',
              border: '1px solid rgba(120,184,50,0.35)',
              borderRadius: '12px',
              padding: '14px 18px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#78B832',
                  boxShadow: '0 0 0 3px rgba(120,184,50,0.25)',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span style={{ color: '#78B832', fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Available now
              </span>
            </div>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>
              Mon – Fri · 9:00 – 18:00 CET
            </p>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div
          style={{
            padding: '72px 56px 72px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#78B832',
              marginBottom: '20px',
            }}
          >
            // {t('support.label')}
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 3.5vw, 48px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            {t('support.headline')}{' '}
            <span style={{ color: '#78B832' }}>{t('support.headline_accent')}</span>
          </h2>

          {/* Sub */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '420px',
            }}
          >
            {t('support.sub')}
          </p>

          {/* Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* WhatsApp */}
            <button
              onClick={() => window.open('https://wa.me/5585998614541?text=Hi%2C%20I%20need%20support%20with%20GroundCTRL', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '14px',
                background: '#25D366',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.15s',
                textAlign: 'left',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <Phone size={20} color="#fff" strokeWidth={2} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: '#fff' }}>
                  {t('support.channels.whatsapp.title')}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
                  {t('support.channels.whatsapp.desc')}
                </div>
              </div>
              <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.7)', fontSize: '18px' }}>→</span>
            </button>

            {/* Live Chat */}
            <button
              onClick={() => show()}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                cursor: 'pointer',
                transition: 'background 0.15s',
                textAlign: 'left',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.13)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <MessageCircle size={20} color="rgba(255,255,255,0.85)" strokeWidth={2} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: '#fff' }}>
                  {t('support.channels.chat.title')}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                  {t('support.channels.chat.desc')}
                </div>
              </div>
              <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>→</span>
            </button>

            {/* Email */}
            <button
              onClick={() => window.open('mailto:support@groundctrl.io', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.14)',
                cursor: 'pointer',
                transition: 'background 0.15s',
                textAlign: 'left',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.13)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              <Mail size={20} color="rgba(255,255,255,0.85)" strokeWidth={2} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: '#fff' }}>
                  {t('support.channels.email.title')}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                  {t('support.channels.email.desc')}
                </div>
              </div>
              <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
