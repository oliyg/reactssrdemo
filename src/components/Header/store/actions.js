import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/isLogin').then(d => {
      d = d.data
      dispatch(changeLogin(d.data.login))
    })
  }
}
