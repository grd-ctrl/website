import { useTranslation } from 'react-i18next'
import { useFeaturebase } from 'featurebase-js/react'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export function SupportSection() {
  const { t } = useTranslation()
  const { show } = useFeaturebase()

  const channels = [
    {
      key: 'chat',
      icon: <MessageCircle size={28} strokeWidth={1.5} />,
      action: () => show(),
      primary: true,
    },
    {
      key: 'whatsapp',
      icon: <Phone size={28} strokeWidth={1.5} />,
      action: () =>
        window.open(
          'https://wa.me/5585998614541?text=Hi%2C%20I%20need%20support%20with%20GroundCTRL',
          '_blank'
        ),
      primary: false,
    },
    {
      key: 'email',
      icon: <Mail size={28} strokeWidth={1.5} />,
      action: () => window.open('mailto:support@groundctrl.io', '_blank'),
      primary: false,
    },
  ]

  return (
    <section className="bg-white py-28 px-6 relative overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,184,166,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Label */}
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: 'var(--font-mono)', color: '#14b8a6' }}
        >
          // {t('support.label')}
        </p>

        {/* Headline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-950"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t('support.headline')}
            <span className="block text-teal-500">{t('support.headline_accent')}</span>
          </h2>
          <p
            className="text-lg text-gray-500 leading-relaxed mt-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('support.sub')}
          </p>
        </div>

        {/* Channel cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((ch) => {
            const card = t(`support.channels.${ch.key}`, { returnObjects: true }) as {
              title: string
              desc: string
              cta: string
            }
            return (
              <button
                key={ch.key}
                onClick={ch.action}
                className={`group text-left rounded-2xl p-8 border transition-all duration-200 ${
                  ch.primary
                    ? 'bg-teal-500 border-teal-500 text-white hover:bg-teal-600 hover:border-teal-600 shadow-lg shadow-teal-200'
                    : 'bg-white border-gray-200 text-gray-900 hover:border-teal-400 hover:shadow-md'
                }`}
              >
                <div
                  className={`mb-5 ${ch.primary ? 'text-white' : 'text-teal-500'}`}
                >
                  {ch.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${ch.primary ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 ${ch.primary ? 'text-teal-100' : 'text-gray-500'}`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {card.desc}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                    ch.primary
                      ? 'text-white'
                      : 'text-teal-500 group-hover:text-teal-600'
                  }`}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {card.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
