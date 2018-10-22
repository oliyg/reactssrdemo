import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

export const render = (store, Routes, req, context) => {
  const content = renderToString((
    <Provider store={store}>
      {/* context 上下文传入到 staticRouter */}
      <StaticRouter location={req.path} context={context}>
        <div>
          {
            renderRoutes(Routes)
          }
        </div>
      </StaticRouter>
    </Provider>
  ))

  // 1. 在 render 函数中就可以获取到 css 字符串
  const cssStr = context.css ? context.css : ''

  // 2. 在 return 的字符串中新增一个 style 标签注入 cssStr 即可
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
