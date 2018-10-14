import express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
// 不再需要渲染 Home 组件而是路由 Routes
// import Home from '../container/Home'
import Routes from '../../Routes'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  // 这里应该渲染 App 组件
  // const content = renderToString(<Home />)
  const content = renderToString((
    <StaticRouter location={req.path} context={{}}>
      {/* StaticRouter 组件上必须传入一个 context 他的值是一个对象 */}
      {/* 因为在服务端上，StaticRouter 无法获知用户所处的路径上，因此需要手动传入 location 对象 */}
      {Routes}
    </StaticRouter>
  ))

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>react ssr demo</title>
  </head>
  <body>
      <div id="root">${content}</div>
      <script src="/index.js"></script>
  </body>
  </html>
  `)
})

const server = app.listen(3000)
