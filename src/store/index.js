import { createStore, applyMiddleware, combineReducers } from 'redux' // 引入 combineReducers
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store' // 引入模块下的 reducer

const reducer = combineReducers({ // 合并 reducer
  home: homeReducer
})

const getStore = () => createStore(reducer, applyMiddleware(thunk))

export default getStore
