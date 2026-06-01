import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { AnimateIn, fadeUp } from '../AnimateIn'

const ease = [0.25, 0.46, 0.45, 0.94] as const

const testimonials = [
  {
    quote:
      '"I was very impressed with the ease of use for the operator and the end user. The ease of deployment and initial configuration is one of the best I have ever seen for a ProAV solution for control rooms."',
    name: 'Ray May',
    title: 'CTO, Parker Group',
  },
  {
    quote:
      '"CTRL stands out in 3 things: trivial to implement, easy to understand and the ability and flexibility to have a personalized workplace or layout with any type of source, tailored to the operator itself."',
    name: 'Afonso Duarte',
    title: 'Solutions Expert, Casa Serras',
  },
  {
    quote:
      '"What makes CTRL stand out is the ground-up development with security infrastructure in mind. From our perspective, the ability to securely mix content from multiple classification levels on the video wall or workstations, without compromising security information, is really key."',
    name: 'Chris Reeve',
    title: 'Vice President, Diversified Critical Infrastructure Group',
  },
]

export function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <section className="blueprint-grid-dark" style={{ padding: '96px 24px' }}>
      <div className="section-shell">
        <AnimateIn variants={fadeUp}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(120,184,50,0.7)',
              marginBottom: '16px',
            }}
          >
            {t('testimonials.label')}
          </div>
          <h2
            style={{
              maxWidth: '840px',
              margin: '0 0 32px',
              color: '#ffffff',
              fontSize: 'clamp(40px, 5vw, 58px)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            {t('testimonials.title')}
          </h2>
        </AnimateIn>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease }}
              whileHover={{ y: -8, scale: 1.02, background: 'rgba(255,255,255,0.09)' }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '40px',
                cursor: 'default',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  color: 'rgba(120,184,50,0.5)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '80px',
                  lineHeight: 0.8,
                  marginBottom: '22px',
                }}
              >
                "
              </motion.div>
              <p style={{ margin: '0 0 26px', color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.75, fontStyle: 'italic' }}>
                {testimonial.quote}
              </p>
              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{testimonial.name}</div>
              <div style={{ color: '#78B832', fontSize: '14px' }}>{testimonial.title}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
