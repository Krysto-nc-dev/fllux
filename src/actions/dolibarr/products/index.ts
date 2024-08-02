


const DOLIBARR_URL = process.env.NEXT_PUBLIC_DOLIBARR_URL
const DOLIBARR_APIKEY = process.env.NEXT_PUBLIC_DOLIBARR_APIKEY

if (!DOLIBARR_URL || !DOLIBARR_APIKEY) {
  throw new Error('Dolibarr URL and API Key must be set in the environment variables')
}

export async function onGetDolibarrProducts(endpoint: string, params: Record<string, any> = {}) {
  const url = new URL(`${DOLIBARR_URL}${endpoint}`)
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  const headers = {
    'DOLAPIKEY': DOLIBARR_APIKEY,
    'Content-Type': 'application/json',
  }

  const response = await fetch(url.toString(), { headers })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Dolibarr API error: ${response.status} ${response.statusText} - ${errorText}`)
  }

  return response.json()
}
