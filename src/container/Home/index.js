import React from 'react'
import Header from '../../components/Header'

const Home = () => (
  <div>
    <Header></Header>
    <div>hello there!</div>
    <button onClick={() => { console.log('clicked') }}>click</button>
  </div>
)

export default Home
