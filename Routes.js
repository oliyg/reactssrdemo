import Home from './src/container/Home'
import Translation from './src/container/Translation'
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
    loadData: Translation.loadData // 需要异步获取数据
  }]
}]
