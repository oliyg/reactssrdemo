import React, { Component } from 'react'

class NotFound extends Component {
  componentWillMount () { // 这段代码只在服务端渲染可用
    const { staticContext } = this.props
    staticContext && (staticContext.NOT_FOUND = true) // 修改 context
  }
  render () {
    return (
      <div>404, not found</div>
    )
  }
}

export default NotFound
