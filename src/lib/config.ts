export const SHEETS_URL = 'https://docs.google.com/spreadsheets/d/1JCVoAUELtPJwOUso1iLPwvfhEO53G9So9FQZrMMtL6A/edit?usp=sharing'

export const postToSheet = (sheet: string, row: Record<string, string>) => {
  if (!SHEETS_URL) return
  fetch(SHEETS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ sheet, row }),
  }).catch(() => {})
}
