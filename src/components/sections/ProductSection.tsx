import { useTranslation } from 'react-i18next'

export function ProductSection() {
  const { t } = useTranslation()
  const chips = t('product.chips', { returnObjects: true }) as string[]

  return (
    <section id="product" className="blueprint-grid-white" style={{ padding: '92px 24px' }}>
      <div className="section-shell" style={{ maxWidth: '1080px', textAlign: 'center' }}>
        <div className="mono-label" style={{ color: '#14b8a6', marginBottom: '16px' }}>
          // {t('product.label')}
        </div>
        <h2
          style={{
            margin: 0,
            color: '#1C3F41',
            fontSize: 'clamp(40px, 5vw, 58px)',
            lineHeight: 0.98,
            letterSpacing: '-0.04em',
          }}
        >
          {t('product.title')}
        </h2>
        <p
          style={{
            margin: '18px auto 0',
            maxWidth: '720px',
            color: '#6B8A8C',
            fontSize: '18px',
            lineHeight: 1.7,
          }}
        >
          {t('product.sub')}
        </p>

        <div
          style={{
            marginTop: '36px',
            borderRadius: '28px',
            padding: '18px',
            background: '#ffffff',
            border: '1px solid #D4DCEC',
            boxShadow: '0 40px 90px rgba(28,63,65,0.12)',
          }}
        >
          <img
            src="/website/img-sap-dashboard.webp"
            alt="GroundCTRL product dashboard"
            style={{
              width: '100%',
              maxWidth: '900px',
              display: 'block',
              margin: '0 auto',
              borderRadius: '16px',
              boxShadow: '0 30px 70px rgba(15, 23, 42, 0.2)',
            }}
          />
        </div>

        <div className="product-chip-row" style={{ marginTop: '22px' }}>
          {chips.map((chip) => (
            <span
              key={chip}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 18px',
                borderRadius: '999px',
                background: '#ffffff',
                border: '1px solid #D4DCEC',
                color: '#1C3F41',
                fontWeight: 700,
                boxShadow: '0 14px 28px rgba(28,63,65,0.06)',
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
