export const SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwdF5xY1FB6f6Ula-SADui6WntoyeMtdutpn-bmIxXQz7kpKp8rKdjGvLJozQvvrCx19Q/exec'

export const postToSheet = (sheet: string, row: Record<string, string>) => {
  if (!SHEETS_URL) return
  fetch(SHEETS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ sheet, row }),
  }).catch(() => { })
}
