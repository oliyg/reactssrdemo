import React from 'react'
import Header from './components/Header/'
// 因为需要渲染二级路由，因此仍然需要使用 renderRoutes 模块
import Routes from '../Routes'
import { renderRoutes } from 'react-router-config'

const App = (props) => (
  <div>
    <Header />
    {/* {renderRoutes(Routes[0].routes)} */}
    {/* 只需要渲染二级路由因此，调用路由表中定义的 routes 即可 */}

    {/* 因为 props 包含一个 route 对象，该对象就是 Routes[0].routes */}
    {renderRoutes(props.route.routes)}
  </div>
)

export default App
