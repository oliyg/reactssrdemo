import express from 'express'
import Home from '../container/Home'
import React from 'react'

import { renderToString } from 'react-dom/server'

const content = renderToString(<Home />)

const app = express()

app.use(express.static('public')) // 维护 public 目录下的静态文件

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>react ssr demo</title>
  </head>
  <body>
      <div id="root">${content}</div>
      <!-- root div 标签需要书写成一行，不可有空格等无用元素 -->
      <script src="/index.js"></script>
      <!-- 重新调用 index.js 文件 -->
  </body>
  </html>
  `)
})

const server = app.listen(3000)
