import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/translations').then(d => {
      d = d.data // 服务端自身判断用户是否登陆
      if (d.success) {
        const list = d.data
        dispatch(changeList(list))
      } else {
        const list = []
        dispatch(changeList(list))
      }
    })
  }
}
