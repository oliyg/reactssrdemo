import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => (
  <div>
    <Link to="/">首页</Link>
    <br />
    {
      props.login
        ? <Fragment>
          <Link to="/logout">翻译列表</Link>
          <br />
          <Link to="/logout">退出</Link>
        </Fragment>
        : <Link to="/login">登陆</Link>
    }
    <br />
  </div>
)

const mapStateToProps = (state) => ({
  login: state.header.login
})

export default connect(mapStateToProps, null)(Header)
