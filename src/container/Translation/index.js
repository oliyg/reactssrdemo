import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'

class Translation extends Component {
  render () {
    // 根据 login 判断登陆状态
    return this.props.login ? <div>{this.getList()}</div> : <Redirect to="/" />
  }
  getList () { // 数据渲染逻辑
    const { list } = this.props

    return list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
  }

  componentDidMount () { // 需要客户端渲染数据 调用 props 的方法
    if (!this.props.list.length) {
      this.props.getTranslationList()
    }
  }
}

Translation.loadData = (store) => { // 需要服务端获取数据使用 loadData 方法
  return store.dispatch(getTranslationList())
}

const mapStateToProps = state => ({ // 获取 state 渲染数据
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatchToProps = dispatch => ({
  getTranslationList () { // 客户端渲染数据方法
    dispatch(getTranslationList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Translation)
