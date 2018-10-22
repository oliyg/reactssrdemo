import express from 'express'
import proxy from 'express-http-proxy'
import { render } from './utils'
import { matchRoutes } from 'react-router-config'
import Routes from '../../Routes'
import { getStore } from '../store'

const app = express()

app.use(express.static('public'))
app.use('/api', proxy('http://localhost:3001', {
  proxyReqPathResolver: function (req) {
    const url = `${req.url}`
    return url
  }
}))

app.get('*', (req, res) => {
  const store = getStore(req)
  const matchedRoutes = matchRoutes(Routes, req.path)

  const promises = []
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      /*
      解决办法：
      then 和 catch 都最终 resolve
      也就是无论异步接口如调用的最终情况如何，都 resolve 这个 promise
      promises 数组中的 promise 全部为 resolve
      因此 promises.all 方法一定会执行
      */
      const promise = new Promise(resolve => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  /*
  问题：
  假设要加载 a b c d 四个组件
  如果 a 组件的接口加载数据错误
  1. b c d 数据都已经加载完毕了：那么会进入到 catch() 逻辑渲染 b c d
  2. b c d 数据接口比较缓慢，导致加载不成功；那么会直接进入到 catch() 逻辑但渲染不了任何组件
  */
  Promise.all(promises).then(() => {
    let context = {}
    const html = render(store, Routes, req, context)
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NOT_FOUND) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })
})

const server = app.listen(3000)
