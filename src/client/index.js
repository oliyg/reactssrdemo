import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// 分别创建 reducer 和 store 并通过 Provider 挂载到根组件
const reducer = (state = { name: 'oli' }, action) => state
const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>{Routes}</BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App />, document.getElementById('root'))
