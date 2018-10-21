import Home from './src/container/Home'
import Translation from './src/container/Translation'
import NotFound from './src/container/NotFound'
import App from './src/App'

export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [{
    path: '/',
    component: Home,
    key: 'home',
    exact: true,
    loadData: Home.loadData
  }, {
    path: '/translation',
    component: Translation,
    key: 'translation',
    exact: true,
    loadData: Translation.loadData
  }, {
    component: NotFound // 挂载 NotFound 页面
  }]
}]
