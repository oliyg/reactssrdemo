import Home from './src/container/Home'
import Login from './src/container/Login'
import App from './src/App'

export default [{
  path: '/',
  component: App,
  routes: [{
    path: '/',
    component: Home,
    key: 'home',
    exact: true,
    loadData: Home.loadData
  }, {
    path: '/login',
    component: Login,
    key: 'login',
    exact: true
  }]
}]
