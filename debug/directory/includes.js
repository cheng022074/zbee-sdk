
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
 rootPath ='C:\\Users\\nero.chen\\Desktop\\Code\\Company\\OK\\ENTERPRISE\\PC\\src';

  console.log(includes(rootPath , {
      includes:[
          ''
      ],
      suffixes:'.vue'
  })) ;