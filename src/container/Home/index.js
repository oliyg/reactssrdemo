import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import style from './style.css'
import withStyle from '../../withStyle' // 引入 withStyle 函数

class Home extends Component {
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

const mapStateToProps = state => ({
  list: state.home.newsList
})
const mapDispatchToProps = dispatch => ({
  getHomeList () {
    dispatch(getHomeList())
  }
})

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, style)) // 直接使用该函数即可

ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
}

export default ExportHome
