import { useTranslation } from 'react-i18next'
import {
  AlertTriangle,
  Bell,
  Camera,
  CheckCircle,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Monitor,
  Moon,
  Radio,
  RefreshCw,
  Settings2,
  SlidersHorizontal,
} from 'lucide-react'
import { WalkieTalkieIcon } from '../WalkieTalkieIcon'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL'

const COLORS = {
  white: '#ffffff',
  alt: '#F4F7FA',
  tealDark: '#1C3F41',
  teal: '#244C4E',
  tealMid: '#3D6466',
  tealMuted: '#6B8A8C',
  green: '#78B832',
  greenDark: '#5E9A2C',
  greenBg: '#EEF8E0',
  border: '#D4DCEC',
}

const tiles = [
  {
    title: 'Emergency',
    subtitle: 'Active route',
    Icon: AlertTriangle,
    background: 'linear-gradient(180deg, rgba(220,38,38,0.28), rgba(127,29,29,0.92))',
    border: '1px solid rgba(248, 113, 113, 0.7)',
    accent: '#F87171',
    glow: '0 0 0 1px rgba(248,113,113,0.55), 0 0 24px rgba(220,38,38,0.35)',
    active: true,
  },
  {
    title: 'Ext. Cameras',
    subtitle: '12 feeds',
    Icon: Camera,
    background: 'linear-gradient(180deg, rgba(120,184,50,0.18), rgba(18,39,31,0.95))',
    border: '1px solid rgba(120, 184, 50, 0.38)',
    accent: '#78B832',
  },
  {
    title: 'Incident Map',
    subtitle: 'Zone B-12',
    Icon: MapPin,
    background: 'linear-gradient(180deg, rgba(217,119,6,0.2), rgba(36,25,11,0.94))',
    border: '1px solid rgba(245, 158, 11, 0.38)',
    accent: '#F59E0B',
  },
  {
    title: 'Default Layout',
    subtitle: 'Restore wall',
    Icon: LayoutGrid,
    background: 'linear-gradient(180deg, rgba(61,100,102,0.18), rgba(14,31,33,0.95))',
    border: '1px solid rgba(107, 138, 140, 0.34)',
    accent: '#8CB8BA',
  },
  {
    title: 'SOC Dashboard',
    subtitle: 'KPIs live',
    Icon: Monitor,
    background: 'linear-gradient(180deg, rgba(59,130,246,0.16), rgba(12,25,42,0.94))',
    border: '1px solid rgba(96, 165, 250, 0.34)',
    accent: '#60A5FA',
  },
  {
    title: 'Night Mode',
    subtitle: 'Low glare',
    Icon: Moon,
    background: 'linear-gradient(180deg, rgba(139,92,246,0.18), rgba(28,17,50,0.94))',
    border: '1px solid rgba(167, 139, 250, 0.34)',
    accent: '#A78BFA',
  },
  {
    title: 'Restore Config',
    subtitle: 'Snapshot 04',
    Icon: RefreshCw,
    background: 'linear-gradient(180deg, rgba(148,163,184,0.16), rgba(29,37,46,0.94))',
    border: '1px solid rgba(148, 163, 184, 0.28)',
    accent: '#CBD5E1',
  },
  {
    title: 'Broadcast',
    subtitle: 'Wall + desks',
    Icon: Radio,
    background: 'linear-gradient(180deg, rgba(61,100,102,0.22), rgba(10,24,25,0.98))',
    border: '1px solid rgba(61, 100, 102, 0.45)',
    accent: '#6EC5C7',
  },
]

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="blueprint-grid-white"
      style={{ minHeight: '100vh', padding: '32px 24px 40px', position: 'relative', overflow: 'hidden' }}
    >
      <div className="section-shell hero-layout" style={{ minHeight: 'calc(100vh - 72px)' }}>
        <div style={{ padding: '28px 0', position: 'relative' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: COLORS.greenBg,
              color: '#4E8A1E',
              borderRadius: '999px',
              padding: '10px 18px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '28px',
            }}
          >
            <span style={{ fontSize: '14px' }}>●</span>
            {t('hero.badge')}
          </div>

          <h1
            style={{
              margin: '0 0 24px',
              color: COLORS.tealDark,
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(52px, 6vw, 84px)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              maxWidth: '640px',
            }}
          >
            <span style={{ display: 'block' }}>{t('hero.headline')}</span>
            <span style={{ display: 'block', color: COLORS.green }}>{t('hero.headline2')}</span>
          </h1>

          <p
            style={{
              margin: '0 0 36px',
              maxWidth: '480px',
              color: COLORS.tealMuted,
              fontSize: '18px',
              lineHeight: 1.7,
            }}
          >
            {t('hero.sub')}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '28px' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: COLORS.green,
                color: COLORS.tealDark,
                textDecoration: 'none',
                fontWeight: 800,
                padding: '16px 24px',
                borderRadius: '999px',
                boxShadow: '0 18px 40px rgba(120, 184, 50, 0.28)',
              }}
            >
              <MessageCircle size={18} />
              {t('hero.cta_primary')}
            </a>
            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1.5px solid ${COLORS.teal}`,
                color: COLORS.teal,
                textDecoration: 'none',
                fontWeight: 700,
                padding: '16px 24px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.78)',
              }}
            >
              {t('hero.cta_secondary')}
            </a>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: COLORS.tealMuted,
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
            }}
          >
            <CheckCircle size={16} style={{ color: COLORS.green }} />
            {t('hero.compat')}
          </div>
        </div>

        <div style={{ position: 'relative', padding: '36px 0' }}>
          <span
            className="blueprint-cross"
            style={{ top: '8px', left: '14px', color: 'rgba(28, 63, 65, 0.18)' }}
          />
          <span
            className="blueprint-cross"
            style={{ top: '8px', right: '14px', color: 'rgba(28, 63, 65, 0.18)' }}
          />
          <span
            className="blueprint-cross"
            style={{ bottom: '8px', left: '14px', color: 'rgba(28, 63, 65, 0.18)' }}
          />
          <span
            className="blueprint-cross"
            style={{ bottom: '8px', right: '14px', color: 'rgba(28, 63, 65, 0.18)' }}
          />

          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              transform: 'translate(12%, -10%)',
              background: '#B91C1C',
              color: COLORS.white,
              borderRadius: '999px',
              padding: '10px 16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              boxShadow: '0 18px 40px rgba(185, 28, 28, 0.28)',
            }}
            className="pulse-red"
          >
            ALERT ACTIVE
          </div>

          <div
            style={{
              position: 'absolute',
              left: '-12px',
              bottom: '18px',
              background: COLORS.tealDark,
              color: COLORS.green,
              border: '1px solid rgba(120, 184, 50, 0.28)',
              borderRadius: '999px',
              padding: '12px 16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              boxShadow: '0 18px 40px rgba(28, 63, 65, 0.2)',
            }}
          >
            12 FEEDS LIVE
          </div>

          <div
            style={{
              background: COLORS.tealDark,
              borderRadius: '24px',
              padding: '14px',
              maxWidth: '560px',
              margin: '0 auto',
              position: 'relative',
              boxShadow:
                '0 48px 120px rgba(28,63,65,0.35), 0 16px 40px rgba(28,63,65,0.2)',
            }}
          >
            <div
              style={{
                width: '86px',
                height: '8px',
                background: '#2D5254',
                borderRadius: '999px',
                margin: '0 auto 12px',
              }}
            />

            <div
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                background:
                  'radial-gradient(circle at top right, rgba(120,184,50,0.14), transparent 24%), linear-gradient(180deg, #102628 0%, #132B2E 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                style={{
                  background: COLORS.white,
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      background: COLORS.tealDark,
                      display: 'grid',
                      placeItems: 'center',
                      color: COLORS.green,
                    }}
                  >
                    <WalkieTalkieIcon size={15} color="#78B832" />
                  </div>
                  <div>
                    <div style={{ color: COLORS.tealDark, fontWeight: 800, fontSize: '15px' }}>GroundCTRL</div>
                    <div style={{ color: COLORS.tealMuted, fontSize: '12px' }}>Control Room A</div>
                  </div>
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: COLORS.green,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}
                >
                  <span
                    className="pulse-green"
                    style={{ width: '9px', height: '9px', borderRadius: '999px', background: COLORS.green }}
                  />
                  LIVE
                </div>
              </div>

              <div
                style={{
                  padding: '14px 18px',
                  background: '#153638',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: '#9AC8C9', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                    CTRL-ROOM-A
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px' }}>
                    Scenario: Emergency evacuation flow
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[Bell, SlidersHorizontal, Settings2].map((Icon, index) => (
                    <div
                      key={index}
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'grid',
                        placeItems: 'center',
                        color: '#BBD0D1',
                      }}
                    >
                      <Icon size={16} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '18px', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '12px' }}>
                {tiles.map((tile) => (
                  <div
                    key={tile.title}
                    style={{
                      minHeight: '126px',
                      borderRadius: '18px',
                      padding: '14px',
                      background: tile.background,
                      border: tile.border,
                      boxShadow: tile.active ? tile.glow : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '14px',
                          background: 'rgba(255,255,255,0.08)',
                          display: 'grid',
                          placeItems: 'center',
                          color: tile.accent,
                        }}
                      >
                        <tile.Icon size={18} />
                      </div>
                      {tile.active ? (
                        <span
                          className="pulse-red"
                          style={{ width: '10px', height: '10px', borderRadius: '999px', background: '#F87171' }}
                        />
                      ) : (
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '999px',
                            background: 'rgba(255,255,255,0.28)',
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <div style={{ color: COLORS.white, fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>
                        {tile.title}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.66)', fontSize: '11px', letterSpacing: '0.04em' }}>
                        {tile.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: '14px 18px 18px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {[LayoutGrid, Monitor, Settings2].map((Icon, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      marginRight: index < 2 ? '10px' : 0,
                      borderRadius: '14px',
                      height: '44px',
                      display: 'grid',
                      placeItems: 'center',
                      background: index === 0 ? 'rgba(120,184,50,0.16)' : 'rgba(255,255,255,0.04)',
                      color: index === 0 ? COLORS.green : '#8AA6A7',
                      border: index === 0 ? '1px solid rgba(120,184,50,0.34)' : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
