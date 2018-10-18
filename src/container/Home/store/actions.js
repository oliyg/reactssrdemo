import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'

import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => {
  const request = server ? serverAxios : clientAxios
  return (dispatch) => {
    return request.get('/homelist.json').then(d => {
      d = d.data
      console.log(d)
      dispatch(changeList(d))
    })
  }
}
