import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../../Routes'

export const render = (req) => {
  const content = renderToString((
    <StaticRouter location={req.path} context={{}}>
      {Routes}
    </StaticRouter>
  ))
  return `
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
  `
}