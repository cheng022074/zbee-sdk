
/**
 * 
 * 根据规则获得文件列表
 * 
 * @import includes from directory.includes
 * 
 */

 const {
    join
 } = require('path'),
 rootPath = join(process.env['ZBEE-APP-PATH'] , 'src');

  console.log(includes(rootPath , {
      includes:[
          'data/connection.fn.js'
      ],
      excludes:[
          'data'
      ]
  })) ;