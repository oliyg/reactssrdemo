import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'
import { createStore, applyMiddleware } from 'redux' // 引入 applyMiddleware
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' // 引入 thunk

const reducer = (state = { name: 'oli' }, action) => state
const store = createStore(reducer, applyMiddleware(thunk)) // 加载 thunk

const App = () => (
  <Provider store={store}>
    <BrowserRouter>{Routes}</BrowserRouter>
  </Provider>
)

ReactDOM.hydrate(<App />, document.getElementById('root'))
