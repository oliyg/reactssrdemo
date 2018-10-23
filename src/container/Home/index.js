import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { getHomeList } from './store/actions'
import style from './style.css'
import withStyle from '../../withStyle'

class Home extends Component {
  getList () {
    const { list } = this.props
    return list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
  }
  render () {
    return (
      <Fragment>
        <Helmet>
          <title>the testing title</title>
          <meta name="description" content="testing description" />
        </Helmet>
        <div className={style.test}>
          {this.getList()}
          <button onClick={() => { console.log('clicked') }}>click</button>
        </div>
      </Fragment>
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
