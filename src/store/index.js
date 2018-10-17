import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store'

const reducer = combineReducers({
  home: homeReducer
})

export const getStore = () => createStore(reducer, applyMiddleware(thunk))
export const getClientStore = () => {
  const defaultState = window.context.state // window 下的 context 可以获得 store 中服务端更新后的 store
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
