const API_BASE = 'https://app.featurebase.app/api'
const API_KEY = import.meta.env.VITE_FEATUREBASE_API_KEY

const headers = () => ({
  'Content-Type': 'application/json',
  'X-API-Key': API_KEY as string,
  'Featurebase-Version': '2026-01-01.nova',
})

async function upsertContact(email: string, name: string, company: string): Promise<string> {
  const res = await fetch(`${API_BASE}/v2/contacts`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      email,
      name,
      companies: [{ id: company.toLowerCase().replace(/\s+/g, '-'), name: company }],
    }),
  })
  if (!res.ok) throw new Error(`upsertContact failed: ${res.status}`)
  const data = await res.json()
  return data.id as string
}

export async function sendMessage(params: {
  email: string
  name: string
  company: string
  message: string
}): Promise<void> {
  const contactId = await upsertContact(params.email, params.name, params.company)

  const res = await fetch(`${API_BASE}/v2/conversations`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      from: { type: 'contact', id: contactId },
      bodyMarkdown: params.message,
      channel: 'desktop',
    }),
  })

  if (!res.ok) throw new Error(`sendMessage failed: ${res.status}`)
}
