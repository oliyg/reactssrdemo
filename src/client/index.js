import React from 'react'
import ReactDOM from 'react-dom'

import Home from '../container/Home'

// ReactDOM.render(<Home />, document.getElementById('root'))
// 同构不可使用 render 函数，会报错：
// Warning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.

// 因此这里需要使用`混合`方法:
ReactDOM.hydrate(<Home />, document.getElementById('root'))
