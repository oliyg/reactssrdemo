import React from 'react'
import { Route } from 'react-router-dom'
import Home from './src/container/Home'
import Login from './src/container/Login'

export default (
  <div>
    <Route path="/" exact component={Home}></Route>
    <Route path="/login" exact component={Login}></Route>
  </div>
)
