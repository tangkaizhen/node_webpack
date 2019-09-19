// 这是node中提供的方法
const path = require('path');
// 这是webpack中提供的插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

// 这是commonJs的规范
module.exports = {
/**
 * 
 * webpack主要是可以配置5大部分
 * 1，入口
 * 2，出口
 * 3，loader
 * 4，plugin
 * 5，devServer 
 * 
 * */ 
  mode:'development',   
  //用对象的方式配置多入口文件
  entry:{
      index:'./src/index.js'
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },

/**
 * plugin:扩展webpack功能
 * loader：转换一些文件
 */
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template:'./public/index.html'
    })
  ],
  //   这里主要是加载一些loader
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // webpack和babel结合必须使用babel-loader
          loader: 'babel-loader',
          options:{
            presets: [
              [
                // 注意进行es6转成es5，如果每次都要加载不同的插件时候，有点麻烦，可以一次性加载所有的插件
                //这就是通过@babel/preset-env实现
                "@babel/preset-env",
                {
                  "debug":false
                }
              ]
            ]
          }
        }
      },
      /**
       * 注意如果项目中有css，必须使用'style-loader', 'css-loader'
       * 才可以使用webpack进行打包，不适用loader，webpack只能对js进行打包
       */
      {
        test: /\.css$/,
        // 从右向左执行
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  devServer: {
       contentBase:path.join(__dirname, 'dist'),
  },
};