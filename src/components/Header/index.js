import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/'

class Header extends Component {
  render () {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div>
        <Link to="/">首页</Link>
        {
          login
            ? <Fragment>
              <Link to="/translation">翻译列表</Link>
              <br />
              <div onClick={handleLogout}>退出</div>
            </Fragment>
            : <div onClick={handleLogin}>登陆</div>
            // onClick 事件不会在服务端执行，因此登陆逻辑是在客户端被执行的
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  login: state.header.login
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin () {
    dispatch(actions.login())
  },
  handleLogout () {
    dispatch(actions.logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
