const API_BASE_URL = 'http://localhost:5001'

// process.env.REACT_APP_DATABASE_URL_DEVELOPMENT ||

const headers = new Headers()
headers.append('Content-Type', 'application/json')

async function fetchJson (url, options, onCancel) {
  try {
    const response = await fetch(url, options)

    if (response.status === 204) {
      return null
    }

    const contentType = response.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      // Handle non-JSON response
      console.error('Non-JSON response:', await response.text())
      throw new Error('Response is not in JSON format')
    }

    const payload = await response.json()

    if (payload.error) {
      return Promise.reject({ message: payload.error })
    }

    return payload.data
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error(error.stack)
      throw error
    }

    return Promise.resolve(onCancel)
  }
}

export async function listCards (signal) {
  const url = `${API_BASE_URL}/tickets`

  return await fetchJson(url, { headers, signal }, [])
}

export async function createTicket (ticket, signal) {
  const url = `${API_BASE_URL}/tickets`

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({data: ticket}),
    signal,
  }
  
  return await fetchJson(url, options)
}