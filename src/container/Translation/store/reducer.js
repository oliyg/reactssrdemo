import { CHANGE_LIST } from './constants'
const defaultState = {
  translationList: [] // 定义 reducer 的默认 state
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        translationList: action.list // 根据 action.type 改变 state
      }
    default:
      return state
  }
}
