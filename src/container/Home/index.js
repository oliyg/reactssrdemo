import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import style from './style.css'

class Home extends Component {
  componentWillMount () {
    // 1. 需要用到 _getCss 方法
    // console.log(style) // 可以使用打印出来的 _getCss 方法获取 style
    // { test: 'style_test_2kLXD',
    // _getContent: [Function],
    // _getCss: [Function],
    // _insertCss: [Function] }

    // 2. 方法会打印出引入的 css 的样式字符串
    // console.log(style._getCss())
    // body {
    //   background: orange;
    // }
    // .style_test_2kLXD {
    //   background: orangered;
    // }

    // 3. 只能在服务端上使用因为该方法是 style-loader 提供的
    // 在客户端浏览器中会报错 因为在客户端上是无法使用 style._getCss 这个方法的
    // if (style._getCss) {
    //   console.log(style._getCss())
    // }

    // 4. 设置 staticContext 上下文变量
    // 如果要在 server/index.js 中获取到 css 则需要给 context 上下文动态的设置变量
    if (this.props.staticContext) {
      this.props.staticContext.css = style._getCss()
    }
  }

  getList () {
    const { list } = this.props
    return list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
  }
  render () {
    return (
      <div className={style.test}>
        {this.getList()}
        <button onClick={() => { console.log('clicked') }}>click</button>
      </div>
    )
  }

  componentDidMount () {
    if (!this.props.list.length) {
      this.props.getHomeList()
    }
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}

const mapStateToProps = state => ({
  list: state.home.newsList
})
const mapDispatchToProps = dispatch => ({
  getHomeList () {
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
