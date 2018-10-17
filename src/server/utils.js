import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom' // 引入 Route 组件
import { matchRoutes } from 'react-router-config'
import Routes from '../../Routes'
import { Provider } from 'react-redux'
import getStore from '../store'

export const render = (req, res) => { // 该函数接收 req res
  const store = getStore()
  // 这里拿到异步数据，然后注入到 store 中即可
  // 需要获取哪些异步数据，需要根据路由判断加载哪些组件，以达到确认加载哪些异步数据
  // 在这个例子中，如果用户访问 / 路径，那么需要加载 Home 组件，也就是需要加载 Home 组件
  // 下的 getHomeList 逻辑

  // 获取匹配到路由的 matchedRoutes
  // some 方法类似 switch
  // const matchedRoutes = []
  // Routes.some(route => {
  //   const match = matchPath(req.path, route) // 根据路径匹配路由
  //   if (match) { matchedRoutes.push(route) }
  // })
  // console.log(matchedRoutes)

  // 使用 matchRoutes 组件代替 matchPath
  const matchedRoutes = matchRoutes(Routes, req.path)

  // 组件内部有 loadData 方法，因此只需要执行每个匹配到组件的 loadData 方法即可
  const promises = []
  matchedRoutes.forEach(item => {
    console.log(item)
    // 其中 item.route.loadData 就是在路由 routes.js 文件中对应的路由上指定的 loadData 函数
    // item.route.loadData 在访问 / 根页面的时候指的就是 Home.loadData
    // 因此执行 loadData 方法并将 promise push 到 promises 列表中
    if (item.route.loadData) {
      promises.push(item.route.loadData(store)) // 组件中的 loadData 函数接受了 store 并使用 store.dispatch 派发 action
    }
  })

  // 到此为止 promises 都是 promise 函数，只需使用 Promise.all 方法等待所有函数执行完毕，获取到 data 后再执行下面 render 的逻辑
  Promise.all(promises).then(() => {
    console.log(store.getState()) // { home: { newsList: [ [Object], [Object], [Object] ] } }
    // 等待全部 promise 执行完毕后 state 更新数据完毕

    // 将 content 和 return 代码放到此代码段后即可
    const content = renderToString((
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {
              Routes.map(route => ( // 返回的不再是 JSX 因此需要做循环
                <Route {...route} />
              ))
            }
          </div>
        </StaticRouter>
      </Provider>
    ))
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>react ssr demo</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
    </body>
    </html>
    `)
  })
}
