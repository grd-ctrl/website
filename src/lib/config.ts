export const DEMO_FORM_URL = (import.meta.env.VITE_DEMO_FORM_URL as string) || 'https://formspree.io/f/xojboeyg'
export const CHECKOUT_FORM_URL = (import.meta.env.VITE_CHECKOUT_FORM_URL as string) || 'https://formspree.io/f/mgoqjadw'

export const postForm = (url: string, data: Record<string, string>) => {
  if (!url) return
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
    .then(r => { if (!r.ok) console.error('Form submit failed', r.status, r.statusText) })
    .catch(err => console.error('Form submit error', err))
}
