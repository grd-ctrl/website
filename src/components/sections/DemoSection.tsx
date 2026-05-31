import { useTranslation } from 'react-i18next'
import { MessageCircle, AlertTriangle, LayoutGrid, Camera, MapPin, Monitor, RefreshCw, Moon, Radio } from 'lucide-react'

const WA_LINK = 'https://wa.me/+5585998614541?text=Hi%2C+I%27m+interested+in+a+GroundCTRL+demo'

const TD = '#1C3F41'
const T  = '#244C4E'
const TM = '#6B8A8C'
const GR = '#78B832'
const BD = '#D4DCEC'

const DEMO_TILES = [
  { label: 'Emergency',     color: '#DC2626', Icon: AlertTriangle, active: true  },
  { label: 'Ext. Cameras',  color: GR,        Icon: Camera,       active: false },
  { label: 'Incident Map',  color: '#D97706', Icon: MapPin,       active: false },
  { label: 'Default Layout',color: T,         Icon: LayoutGrid,   active: false },
  { label: 'SOC Dashboard', color: T,         Icon: Monitor,      active: false },
  { label: 'Night Mode',    color: '#4F46E5', Icon: Moon,         active: false },
  { label: 'Restore',       color: TM,        Icon: RefreshCw,    active: false },
  { label: 'Broadcast',     color: '#3D6466', Icon: Radio,        active: false },
  { label: 'Cameras 2',     color: GR,        Icon: Camera,       active: false },
]

export function DemoSection() {
  const { t } = useTranslation()

  return (
    <section id="demo" className="blueprint-grid" style={{ padding: '96px 24px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>

        {/* Text */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: '#EEF8E0', color: '#4E8A1E', borderRadius: '999px', padding: '5px 14px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '20px' }}>
            {t('demo.label')}
          </div>
          <h2 style={{ margin: '0 0 20px 0', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, color: TD, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {t('demo.title')}
          </h2>
          <p style={{ margin: '0 0 32px 0', fontSize: '16px', lineHeight: 1.65, color: TM }}>
            {t('demo.subtitle')}
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: GR, color: TD, padding: '13px 28px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', transition: 'background .15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#5E9A2C')}
            onMouseLeave={e => (e.currentTarget.style.background = GR)}
          >
            <MessageCircle size={16} />
            {t('demo.cta')}
          </a>
        </div>

        {/* Portrait tablet mockup */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: TD, borderRadius: '30px', padding: '14px 12px 20px', boxShadow: '0 32px 80px rgba(28,63,65,0.25)', width: '260px', position: 'relative' }}>
            {/* Camera */}
            <div style={{ width: '8px', height: '8px', background: '#2D5254', borderRadius: '50%', margin: '0 auto 10px' }} />

            {/* Screen */}
            <div style={{ borderRadius: '14px', overflow: 'hidden', backgroundImage: 'linear-gradient(#E6EDF8 1px, transparent 1px), linear-gradient(90deg, #E6EDF8 1px, transparent 1px)', backgroundSize: '36px 36px', backgroundColor: '#F8FAFD' }}>
              {/* Header */}
              <div style={{ padding: '10px 12px', background: '#fff', borderBottom: `1px solid ${BD}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '11px', color: TD }}>GroundCTRL</div>
                  <div style={{ fontSize: '9px', color: TM }}>Control Room A</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '5px', height: '5px', background: '#DC2626', borderRadius: '50%' }} />
                  <span style={{ fontSize: '9px', color: '#DC2626', fontWeight: 700 }}>ALERT</span>
                </div>
              </div>

              {/* Tiles 3-col */}
              <div style={{ padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                {DEMO_TILES.map((tile, i) => (
                  <div key={i} style={{ background: tile.active ? `${tile.color}14` : '#fff', border: `1px solid ${tile.active ? tile.color + '55' : BD}`, borderRadius: '8px', padding: '9px 4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', boxShadow: tile.active ? `0 0 0 1.5px ${tile.color}30` : 'none' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: `${tile.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: tile.color }}>
                      <tile.Icon size={12} />
                    </div>
                    <span style={{ fontSize: '8px', fontWeight: 600, color: tile.active ? tile.color : T, textAlign: 'center', lineHeight: 1.2 }}>
                      {tile.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home indicator */}
            <div style={{ width: '40px', height: '4px', background: '#2D5254', borderRadius: '2px', margin: '10px auto 0' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
