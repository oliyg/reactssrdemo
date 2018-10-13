import express from 'express'
import Home from './container/Home'
import React from 'react' // 页面中使用了 jsx 需要引入 react

// 客户端渲染的写法
// import ReactDOM from 'react-dom'
// ReactDOM.render(<Home />, document.getElementById('root'))

// 服务端渲染的写法
import { renderToString } from 'react-dom/server'

const content = renderToString(<Home />)

const app = express()
app.get('/', (req, res) => {
  // res.send(renderToString(<Home />))
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>react ssr demo</title>
  </head>
  <body>
      ${content}
  </body>
  </html>
  `)
})

const server = app.listen(3000)
