import Home from './src/container/Home'
import Login from './src/container/Login'

// export default (
//   <div>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/login" exact component={Login}></Route>
//   </div>
// )

export default [{
  path: '/',
  component: Home,
  key: 'home',
  exact: true, // 精确匹配
  loadData: Home.loadData // 在加载路由之前执行的方法就是 Home 组件内部定义的 loadData 方法
  // 使用 Home.loadData 方法即可在服务端渲染之前也就是匹配到路由时首先执行 loadData 方法获取异步数据
}, {
  path: '/login',
  component: Login,
  key: 'login',
  exact: true
  // Login 组件匹配后直接渲染，不需要加载异步数据
}]
