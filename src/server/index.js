import express from 'express'
import proxy from 'express-http-proxy'
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import Routes from '../../Routes'
import { getStore } from '../store'

const app = express()

app.use(express.static('public'))
app.use('/api', proxy('http://localhost:3001', {
  proxyReqPathResolver: function (req) {
    const url = `${req.url}`
    return url
  }
}))

app.get('*', (req, res) => {
  const store = getStore(req)
  const matchedRoutes = matchRoutes(Routes, req.path)

  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    let context = {}
    const html = render(store, Routes, req, context)
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url) // 返回 301 状态码并跳转到指定的 url
    } else if (context.NOT_FOUND) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })
})

const server = app.listen(3000)
