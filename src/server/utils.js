import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

export const render = (store, Routes, req) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {
            Routes.map(route => (
              <Route {...route} />
            ))
          }
        </div>
      </StaticRouter>
    </Provider>
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
      <script>
      window.context = { state: ${JSON.stringify(store.getState())} }
      </script>
      <script src="/index.js"></script>
  </body>
  </html>
  `
}
