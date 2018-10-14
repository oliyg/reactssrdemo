import React from 'react'
import { Route } from 'react-router-dom'
import Home from './src/container/Home'

export default (
  <div>
    <Route path="/" exact component={Home}></Route>
  </div>
)
