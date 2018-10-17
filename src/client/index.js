import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../../Routes'
import { Provider } from 'react-redux'
import getStore from '../store' // 获取 getStore 执行该函数创建 store

const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        <div>
          {
            Routes.map(route => ( // 返回的不再是 JSX 因此需要做循环
              <Route {...route} />
            ))
          }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('root'))
