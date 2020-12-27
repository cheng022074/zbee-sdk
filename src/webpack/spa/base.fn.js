
/**
 * 
 * 单页面 Webpack 基本配置
 * 
 * @require clean-webpack-plugin
 * 
 * @require file-loader
 * 
 * @require babel-loader
 * 
 * @require @babel/core
 * 
 * @require @babel/preset-env
 * 
 * @require @babel/preset-react
 * 
 * @param {object} options 配置
 * 
 * @param {string} options.context 工程目录
 * 
 * @param {string} options.bootstrapPath 引导脚本路径
 * 
 * @param {boolean} [options.scriptCompatibilityMode = false] 是否启用脚本兼容模式
 * 
 * @param {boolean} [options.framework] 框架名称
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

let rules = [{
  test: /\.(png|svg|jpg|gif)$/,
  use:[{
    loader: 'file-loader',
    options: {
      name: 'images/[hash].[ext]',
    }
  }]
}],
scriptRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets:[
      ]
    }
  }
};

if(scriptCompatibilityMode){

  scriptRule.use.options.presets.push('@babel/preset-env') ;
}

switch(framework){

    case 'react':

      scriptRule.use.options.presets.push('@babel/preset-react') ;
}

rules.push(scriptRule) ;

return {
  entry: join(context , bootstrapPath),
  context,
  output: {
    filename: 'main.js',
    path: join(context , 'dist'),
  },
  plugins:[
    new CleanWebpackPlugin()
  ],
  module:{
    rules
  }
};