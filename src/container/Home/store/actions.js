import axios from 'axios'

import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => {
  let url = ''
  if (server) { // 根据服务端或客户端环境分别设定 url
    url = 'http://localhost:3000/homelist.json'
  } else {
    url = '/api/homelist.json'
  }
  return (dispatch) => {
    return axios.get(url).then(d => {
      console.log(d)
      d = d.data
      dispatch(changeList(d))
    })
  }
}
