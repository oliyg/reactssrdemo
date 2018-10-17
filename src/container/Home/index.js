import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions' // 复杂的逻辑都在 getHomeList

class Home extends Component {
  getList () {
    const { list } = this.props
    return list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
  }
  render () {
    return (
      <div>
        <Header></Header>
        {this.getList()}
        <button onClick={() => { console.log('clicked') }}>click</button>
      </div>
    )
  }

  componentDidMount () {
    // 该生命周期函数只会在客户端触发，因此不会在服务端执行里面的异步获取数据的函数
    this.props.getHomeList()
  }
}

// 定义获取 store 中返回 state 和 dispatch 的函数
const mapStateToProps = state => ({
  list: state.home.newsList
})
const mapDispatchToProps = dispatch => ({
  getHomeList () {
    dispatch(getHomeList()) // 复杂的逻辑放在名为 getHomeList 的 action 中，然后 dispatch
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
