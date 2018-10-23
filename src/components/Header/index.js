import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/'
import style from './style.css'

class Header extends Component {
  componentWillMount () {
    if (this.props.staticContext) {
      // Header 组件在 App 组件内部，因此需要在 App 中对 Header 组件传入
      // staticContext 属性，该属性等于 App 组件中获取的 staticContext
      this.props.staticContext.css.push(style._getCss())
      // 如果所有组件都设置 this.props.staticContext.css 的值那么该值会被覆盖
      // 因此无法渲染所有的 css 所以应当将 css 定义为数组，并 push 进 css
    }
  }
  render () {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div className={style.test}>
        <Link to="/">首页</Link>
        {
          login
            ? <Fragment>
              <Link to="/translation">翻译列表</Link>
              <br />
              <div onClick={handleLogout}>退出</div>
            </Fragment>
            : <div onClick={handleLogin}>登陆</div>
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
