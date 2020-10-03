
/**
 * 
 * 单页面 Webpack 基本配置
 * 
 * @require clean-webpack-plugin
 * 
 * @require file-loader
 * 
 * @param {object} options 配置
 * 
 * @param {string} options.context 工程目录
 * 
 * @return {object} Webpack 配置 
 * 
 */

const {
    join
} = require('path'),
{
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

return {
  entry: './src/index.js',
  context,
  output: {
    filename: 'main.js',
    path: join(__dirname , '../dist'),
  },
  plugins:[
    new CleanWebpackPlugin()
  ],
  module:{

    rules:[{
      test: /\.(png|svg|jpg|gif)$/,
      use:[{
        loader: 'file-loader',
        options: {
          name: 'images/[hash].[ext]',
        }
      }]
    }]

  }
};