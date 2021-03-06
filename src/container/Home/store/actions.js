import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/homelist.json').then(d => {
      d = d.data
      dispatch(changeList(d))
    })
  }
}
