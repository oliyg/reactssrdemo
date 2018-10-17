import axios from 'axios'

import { CHANGE_LIST } from './constants'

const changeList = (list) => ({ // 这个就是直接参与操作 reducer 的 action
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://localhost:3000/homelist.json').then(d => {
      d = d.data
      dispatch(changeList(d))
    })
  }
}
