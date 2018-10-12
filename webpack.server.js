const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // 服务端打包代码必须配置 target 为 node 如果使用 require('path') 设置 target 为 node 则不会打包 path 模块
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // 避免打包 node_modules 模块，配合 target 属性使用
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react', 'stage-0', ['env', {
          // env 可以配置代码编译需要适配的对象
          targets: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
}
