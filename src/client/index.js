import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store' // 需要使用 getClientStore

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          {
            Routes.map(route => (
              <Route {...route} />
            ))
          }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
