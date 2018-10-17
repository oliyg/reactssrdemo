// import axios from 'axios'

import { CHANGE_LIST } from './constants'

const changeList = (list) => ({ // 这个就是直接参与操作 reducer 的 action
  type: CHANGE_LIST,
  list
})

const homelist = [{
  'id': '001',
  'title': 'javascript'
}, {
  'id': '002',
  'title': 'php'
}, {
  'id': '003',
  'title': 'python'
}]

export const getHomeList = () => {
  return (dispatch) => {
    // axios.get('http://127.0.0.1:8081/homelist.json').then(console.log)
    // 模拟异步获取数据
    setTimeout(() => {
      dispatch(changeList(homelist)) // 再派发一个 action
    }, 200)
  }
}
