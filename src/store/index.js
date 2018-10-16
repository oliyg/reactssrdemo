import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'oli' }, action) => state

// export default store // 不可直接导出 store 否则就是单例的 store 而要创建一个函数

const getStore = () => createStore(reducer, applyMiddleware(thunk))

export default getStore
