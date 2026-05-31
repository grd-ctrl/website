import { useTranslation } from 'react-i18next'
import { ArrowRight, MessageCircle, CheckCircle, AlertTriangle, LayoutGrid, Camera, MapPin, Monitor, RefreshCw, Moon, Radio } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+GroundCTRL'

const TD = '#1C3F41'
const T  = '#244C4E'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

const HERO_TILES = [
  { label: 'Emergency',     color: '#DC2626', Icon: AlertTriangle, active: false },
  { label: 'Default Layout',color: T,         Icon: LayoutGrid,   active: true  },
  { label: 'Ext. Cameras',  color: GR,        Icon: Camera,       active: false },
  { label: 'Incident Map',  color: '#D97706', Icon: MapPin,       active: false },
  { label: 'SOC View',      color: T,         Icon: Monitor,      active: false },
  { label: 'Restore Config',color: TM,        Icon: RefreshCw,    active: false },
  { label: 'Night Mode',    color: '#4F46E5', Icon: Moon,         active: false },
  { label: 'Broadcast',     color: '#3D6466', Icon: Radio,        active: false },
]

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section style={{ minHeight: 'calc(100vh - 64px)', background: '#fff', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
      {/* Blueprint grid — right panel */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '46%',
        backgroundImage: 'linear-gradient(#DDE5F0 1px, transparent 1px), linear-gradient(90deg, #DDE5F0 1px, transparent 1px)',
        backgroundSize: '80px 80px', backgroundColor: '#F4F7FA',
        pointerEvents: 'none',
      }}>
        {/* Technical label in the corner */}
        <div style={{ position: 'absolute', bottom: '16px', right: '16px', fontFamily: 'monospace', fontSize: '10px', color: '#B8C8DC', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          CTRL-ROOM-A / REV.1
        </div>
        {/* Corner cross markers */}
        {[{ t: '79px', l: '79px' }, { t: '79px', r: '79px' }, { b: '79px', l: '79px' }, { b: '79px', r: '79px' }].map((pos, i) => (
          <div key={i} style={{ position: 'absolute', ...pos as any, width: '12px', height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: '1px', height: '12px', background: '#C4D0E4' }} />
            <div style={{ position: 'absolute', height: '1px', width: '12px', background: '#C4D0E4' }} />
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '64px', alignItems: 'center', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* LEFT — Text */}
        <div>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: '#EEF8E0', color: '#4E8A1E', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '28px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: GR, display: 'inline-block', animation: 'pulse 2s infinite' }} />
            {t('hero.badge')}
          </div>

          {/* Headline */}
          <h1 style={{ margin: '0 0 24px 0', padding: 0, lineHeight: 1.05 }}>
            <span style={{ display: 'block', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 900, color: TD, letterSpacing: '-0.025em' }}>
              {t('hero.headline')}
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 900, color: GR, letterSpacing: '-0.025em' }}>
              {t('hero.headline2')}
            </span>
          </h1>

          {/* Sub */}
          <p style={{ margin: '0 0 40px 0', fontSize: '17px', lineHeight: 1.65, color: TM, maxWidth: '460px' }}>
            {t('hero.sub')}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: GR, color: TD, padding: '13px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'background .15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#5E9A2C')}
              onMouseLeave={e => (e.currentTarget.style.background = GR)}
            >
              <MessageCircle size={16} />
              {t('hero.cta_primary')}
            </a>
            <a href="#features"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', border: `2px solid ${T}`, color: T, padding: '11px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'all .15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = T; (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = T }}
            >
              {t('hero.cta_secondary')}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Barco compat */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: TM }}>
            <CheckCircle size={14} style={{ color: GR, flexShrink: 0 }} />
            {t('hero.compat')}
          </div>
        </div>

        {/* RIGHT — Tablet Mockup */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: TD, borderRadius: '22px', padding: '13px', boxShadow: '0 32px 80px rgba(28,63,65,0.28), 0 8px 24px rgba(28,63,65,0.14)', width: '100%', maxWidth: '460px', position: 'relative' }}>
            {/* Camera notch */}
            <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', background: '#2D5254', borderRadius: '50%' }} />

            {/* Screen */}
            <div style={{ borderRadius: '11px', overflow: 'hidden', backgroundImage: 'linear-gradient(#E6EDF8 1px, transparent 1px), linear-gradient(90deg, #E6EDF8 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundColor: '#F8FAFD' }}>

              {/* App header */}
              <div style={{ padding: '10px 14px', background: '#fff', borderBottom: `1px solid ${BD}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: TD, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LayoutGrid size={12} style={{ color: GR }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '12px', color: TD }}>GroundCTRL</div>
                    <div style={{ fontSize: '10px', color: TM }}>Control Room A</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div style={{ width: '6px', height: '6px', background: GR, borderRadius: '50%' }} />
                  <span style={{ fontSize: '10px', color: GR, fontWeight: 700 }}>LIVE</span>
                </div>
              </div>

              {/* Tiles */}
              <div style={{ padding: '12px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '7px' }}>
                {HERO_TILES.map((tile, i) => (
                  <div key={i} style={{ background: tile.active ? `${tile.color}12` : '#fff', border: `1px solid ${tile.active ? tile.color + '50' : BD}`, borderRadius: '8px', padding: '10px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', boxShadow: tile.active ? `0 0 0 2px ${tile.color}25` : 'none' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: `${tile.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: tile.color }}>
                      <tile.Icon size={13} />
                    </div>
                    <span style={{ fontSize: '9px', fontWeight: 600, color: tile.active ? tile.color : T, textAlign: 'center', lineHeight: 1.2 }}>
                      {tile.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div style={{ padding: '8px 14px', background: '#fff', borderTop: `1px solid ${BD}`, display: 'flex', justifyContent: 'space-around' }}>
                {[LayoutGrid, Monitor, RefreshCw].map((Icon, i) => (
                  <div key={i} style={{ width: '32px', height: '32px', borderRadius: '8px', background: i === 0 ? `${GR}18` : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? GR : TM }}>
                    <Icon size={14} />
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
