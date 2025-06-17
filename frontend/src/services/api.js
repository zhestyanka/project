import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Company API
export const companyApi = {
  getAll: () => api.get('/company'),
  create: (data) => api.post('/company', data),
}

// Programs API
export const programsApi = {
  getAll: () => api.get('/programs'),
  create: (data) => api.post('/programs', data),
}

// Audience API
export const audienceApi = {
  getAll: () => api.get('/audience'),
  create: (data) => api.post('/audience', data),
}

// Reviews API
export const reviewsApi = {
  getAll: () => api.get('/reviews'),
  create: (data) => api.post('/reviews', data),
}

// Contacts API
export const contactsApi = {
  getAll: () => api.get('/contacts'),
  create: (data) => api.post('/contacts', data),
}

// Advantages API
export const advantagesApi = {
  getAll: () => api.get('/advantages'),
  create: (data) => api.post('/advantages', data),
}

export default api 