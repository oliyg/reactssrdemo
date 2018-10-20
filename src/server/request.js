import axios from 'axios'

const createInstance = (req) => (axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { // 获得 req 并在 headers 中设置 cookie
    cookie: req.get('cookie') || ''
  }
}))

export default createInstance
