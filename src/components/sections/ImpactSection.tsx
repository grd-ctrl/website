import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

const DEMO_LINK = 'https://wa.me/5585998614541?text=Hi%2C%20I%20want%20to%20request%20a%20GroundCTRL%20demo'

export function ImpactSection() {
  const { t } = useTranslation()

  const chips = [
    { label: 'Ops latency', value: '< 2s', top: '10%', right: '-2%' },
    { label: 'Alerts routed', value: '148', bottom: '16%', left: '-4%' },
    { label: 'Rooms online', value: '24 / 24', top: '54%', right: '2%' },
  ]

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '70vh',
        padding: 'clamp(80px, 10vw, 112px) 24px',
        backgroundImage: "url('/website/thisisengineering.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 20, 20, 0.65)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          mixBlendMode: 'screen',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 78% 22%, rgba(20,184,166,0.28), transparent 34%), radial-gradient(circle at 20% 78%, rgba(120,184,50,0.2), transparent 28%)',
        }}
      />

      <div className="section-shell impact-layout" style={{ minHeight: 'min(820px, 70vh)', alignItems: 'center' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <div
            className="mono-label"
            style={{ color: 'rgba(255,255,255,0.74)', marginBottom: '18px' }}
          >
            // {t('impact.label')}
          </div>
          <h2
            style={{
              margin: 0,
              color: '#ffffff',
              fontSize: 'clamp(56px, 6vw, 72px)',
              lineHeight: 0.94,
              letterSpacing: '-0.05em',
              maxWidth: '780px',
            }}
          >
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>{t('impact.headline')}</span>
            <span style={{ display: 'block', color: '#14b8a6' }}>{t('impact.headline2')}</span>
          </h2>
          <p
            style={{
              margin: '24px 0 0',
              maxWidth: '640px',
              color: 'rgba(255,255,255,0.72)',
              fontSize: 'clamp(18px, 2vw, 21px)',
              lineHeight: 1.65,
            }}
          >
            {t('impact.sub')}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginTop: '34px',
            }}
          >
            <Link
              to="/checkout"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '180px',
                padding: '15px 26px',
                borderRadius: '999px',
                background: '#ffffff',
                color: '#0a0a0a',
                textDecoration: 'none',
                fontWeight: 800,
                boxShadow: '0 16px 44px rgba(0,0,0,0.22)',
              }}
            >
              {t('impact.cta_primary')}
            </Link>
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '180px',
                padding: '15px 26px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.34)',
                background: 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                backdropFilter: 'blur(10px)',
              }}
            >
              {t('impact.cta_secondary')}
            </a>
          </div>
        </div>

        <div className="impact-tablet-stage" style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              position: 'absolute',
              inset: '10% 8% 6%',
              borderRadius: '48px',
              background: 'radial-gradient(circle at center, rgba(20,184,166,0.22), transparent 56%)',
              filter: 'blur(32px)',
            }}
          />
          {chips.map((chip) => (
            <div
              key={chip.label}
              className="impact-chip"
              style={{
                position: 'absolute',
                ...chip,
                padding: '12px 14px',
                borderRadius: '18px',
                background: 'rgba(10,18,20,0.82)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 18px 36px rgba(0,0,0,0.28)',
                backdropFilter: 'blur(18px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.56)',
                  marginBottom: '6px',
                }}
              >
                {chip.label}
              </div>
              <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 800 }}>{chip.value}</div>
            </div>
          ))}

          <div
            style={{
              position: 'relative',
              margin: '0 auto',
              width: 'min(100%, 430px)',
              aspectRatio: '0.78',
              borderRadius: '40px',
              padding: '18px',
              background: 'linear-gradient(180deg, rgba(22,34,36,0.94), rgba(8,16,18,0.96))',
              border: '1px solid rgba(255,255,255,0.14)',
              boxShadow: '0 34px 90px rgba(0,0,0,0.42)',
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'linear-gradient(180deg, rgba(11,23,26,0.98), rgba(11,23,26,0.84))',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage:
                    'linear-gradient(rgba(20,184,166,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.12) 1px, transparent 1px)',
                  backgroundSize: '42px 42px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '0 auto auto 0',
                  width: '100%',
                  height: '72px',
                  padding: '22px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.16em',
                      color: 'rgba(255,255,255,0.42)',
                    }}
                  >
                    GroundCTRL live
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 800 }}>Control surface</div>
                </div>
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '999px',
                    background: '#78B832',
                    boxShadow: '0 0 0 8px rgba(120,184,50,0.14)',
                  }}
                />
              </div>

              <div style={{ position: 'absolute', inset: '92px 22px 22px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.25fr 0.75fr',
                    gap: '14px',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '24px',
                      padding: '18px',
                      border: '1px solid rgba(20,184,166,0.18)',
                      background: 'linear-gradient(180deg, rgba(20,184,166,0.12), rgba(20,184,166,0.03))',
                      display: 'grid',
                      gridTemplateRows: 'repeat(3, 1fr)',
                      gap: '12px',
                    }}
                  >
                    {[78, 56, 92].map((value, index) => (
                      <div
                        key={value}
                        style={{
                          borderRadius: '18px',
                          padding: '12px 14px',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: 'rgba(255,255,255,0.66)',
                            fontSize: '11px',
                            marginBottom: '10px',
                          }}
                        >
                          <span>Scenario {index + 1}</span>
                          <span>{value}%</span>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: '8px',
                            borderRadius: '999px',
                            background: 'rgba(255,255,255,0.08)',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${value}%`,
                              height: '100%',
                              borderRadius: '999px',
                              background: index === 2 ? '#78B832' : '#14b8a6',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gap: '14px', gridTemplateRows: '0.7fr 1.3fr' }}>
                    <div
                      style={{
                        borderRadius: '22px',
                        padding: '16px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.5)',
                        }}
                      >
                        active rooms
                      </div>
                      <div style={{ color: '#ffffff', fontSize: '38px', lineHeight: 1, fontWeight: 900, marginTop: '10px' }}>
                        18
                      </div>
                    </div>
                    <div
                      style={{
                        borderRadius: '22px',
                        padding: '18px 16px',
                        background: 'linear-gradient(180deg, rgba(12,34,36,0.94), rgba(6,14,15,0.92))',
                        border: '1px solid rgba(20,184,166,0.18)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '10px',
                      }}
                    >
                      {['Video wall', 'Alarms', 'Cameras', 'Layouts'].map((item, index) => (
                        <div
                          key={item}
                          style={{
                            borderRadius: '16px',
                            padding: '12px',
                            background: index === 1 ? 'rgba(20,184,166,0.14)' : 'rgba(255,255,255,0.04)',
                            border: `1px solid ${index === 1 ? 'rgba(20,184,166,0.32)' : 'rgba(255,255,255,0.08)'}`,
                            display: 'grid',
                            placeItems: 'end start',
                          }}
                        >
                          <div
                            style={{
                              width: '100%',
                              height: '52px',
                              borderRadius: '12px',
                              background:
                                index === 1
                                  ? 'linear-gradient(135deg, rgba(20,184,166,0.8), rgba(20,184,166,0.12))'
                                  : 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
                              marginBottom: '10px',
                            }}
                          />
                          <div style={{ color: '#ffffff', fontSize: '12px', fontWeight: 700 }}>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
