const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

export async function fetchJSON(path: string) {
  const res = await fetch(API_BASE + path)
  if (!res.ok) throw new Error('Fetch error')
  return res.json()
}

export async function postJSON(path: string, data: any) {
  const res = await fetch(API_BASE + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(()=>({message:res.statusText}))
    throw new Error(err.message || 'Request failed')
  }
  return res.json()
}
