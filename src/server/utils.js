import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../../Routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export const render = (req) => {
  const reducer = (state = { name: 'oli' }, action) => state
  const store = createStore(reducer)

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
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
      <script src="/index.js"></script>
  </body>
  </html>
  `
}
