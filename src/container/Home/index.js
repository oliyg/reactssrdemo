import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'

const Home = (props) => (
  <div>
    <Header></Header>
    <div>hello there {props.name} !</div>
    <button onClick={() => { console.log('clicked') }}>click</button>
  </div>
)

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home)
