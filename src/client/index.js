import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'
import { Provider } from 'react-redux'
import getStore from '../store' // 获取 getStore 执行该函数创建 store

const App = () => (
  <Provider store={getStore()}>
    <BrowserRouter>{Routes}</BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App />, document.getElementById('root'))
