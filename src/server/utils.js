import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

export const render = (store, Routes, req, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {
            renderRoutes(Routes)
          }
        </div>
      </StaticRouter>
    </Provider>
  ))

  // 将 css 数组转换为字符串
  const cssStr = context.css.length ? context.css.join('\n') : ''

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>react ssr demo</title>
      <style>${cssStr}</style>
  </head>
  <body>
      <div id="root">${content}</div>
      <script>
      window.context = { state: ${JSON.stringify(store.getState())} }
      </script>
      <script src="/index.js"></script>
  </body>
  </html>
  `
}
