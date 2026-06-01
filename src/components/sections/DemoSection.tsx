import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimateIn, fadeUp, scaleBlurIn } from '../AnimateIn'

export function DemoSection() {
  const { t } = useTranslation()

  return (
    <section
      id="demo"
      style={{
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/website/img-cta.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 30, 30, 0.85)' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <span className="blueprint-cross" style={{ left: '5%', top: '50%', color: 'rgba(255,255,255,0.12)' }} />
      <span className="blueprint-cross" style={{ right: '5%', top: '50%', color: 'rgba(255,255,255,0.12)' }} />

      <div className="section-shell" style={{ textAlign: 'center', maxWidth: '860px' }}>
        <AnimateIn variants={scaleBlurIn}>
          <h2
            style={{
              margin: '0 0 14px',
              color: '#ffffff',
              fontSize: 'clamp(46px, 6vw, 74px)',
              lineHeight: 0.98,
              letterSpacing: '-0.04em',
            }}
          >
            {t('demo.title')}
          </h2>
          <p style={{ margin: '0 auto 30px', maxWidth: '660px', color: 'rgba(255,255,255,0.68)', fontSize: '18px', lineHeight: 1.7 }}>
            {t('demo.subtitle')}
          </p>
        </AnimateIn>

        <AnimateIn variants={fadeUp} delay={0.2}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
            <Link
              to="/demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#78B832',
                color: '#1C3F41',
                textDecoration: 'none',
                padding: '18px 28px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '16px',
                boxShadow: '0 24px 42px rgba(120,184,50,0.22)',
              }}
            >
              <Send size={18} />
              {t('demo.cta')}
            </Link>
          </motion.div>
        </AnimateIn>

        <AnimateIn variants={fadeUp} delay={0.35}>
          <div
            style={{
              marginTop: '18px',
              color: 'rgba(255,255,255,0.68)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.12em',
            }}
          >
            No setup fee. Deploy in minutes.
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
