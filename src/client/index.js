import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store' // 需要使用 getClientStore
import { renderRoutes } from 'react-router-config'

const App = (props) => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          {
            // Routes.map(route => (
            //   <Route {...route} />
            // ))
            renderRoutes(Routes)
          }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
