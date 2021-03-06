import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store'
import { reducer as headerReducer } from '../components/Header/store'
import { reducer as translationReducer } from '../container/Translation/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer // 合并 reducer
})

export const getStore = (req) => createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
