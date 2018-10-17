import express from 'express'
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import Routes from '../../Routes'
import { getStore } from '../store' // 仍然使用 getStore

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = getStore()
  const matchedRoutes = matchRoutes(Routes, req.path)

  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    res.send(render(store, Routes, req))
  })
})

const server = app.listen(3000)
