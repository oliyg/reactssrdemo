import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/isLogin').then(d => {
      d = d.data
      console.log(d)
      dispatch(changeLogin(d.data.login))
    })
  }
}

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/login').then(d => {
      d = d.data
      dispatch(changeLogin(true))
    })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/logout').then(d => {
      d = d.data
      console.log(d)
      dispatch(changeLogin(false))
    })
  }
}
