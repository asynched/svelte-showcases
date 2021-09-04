import axios from 'axios'

const api = axios.create({
  baseURL: 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/',
})

export default api
