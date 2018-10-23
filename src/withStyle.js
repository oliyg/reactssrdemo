// 本质上是一个函数；函数返回一个新的组件；这个组件名为高阶组件；部分参数需要外部传入；
import React, { Component } from 'react'

export default (DecoratedComponent, style) => {
  return class NewComponent extends Component {
    componentWillMount () {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(style._getCss()) // style 样式需要外部传入
      }
    }
    render () {
      // DecoratedComponent 也需要外部传入
      return <DecoratedComponent {...this.props} />
    }
  }
}
