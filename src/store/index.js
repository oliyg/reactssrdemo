import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store'
import { reducer as headerReducer } from '../components/Header/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})

// 创建 store 的过程中可以使用 withExtraArguments 传递值
export const getStore = () => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
