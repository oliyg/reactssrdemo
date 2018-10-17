import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

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
    this.props.getHomeList()
  }
}

Home.loadData = (store) => {
  // 此处应为异步获取数据逻辑 接收 store 并派发 action
  // 与 componentDidMount 类似
  return store.dispatch(getHomeList()) // 将返回的 promise return 回去
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
