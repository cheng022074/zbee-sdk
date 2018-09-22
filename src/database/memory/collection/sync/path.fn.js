/**
 * 
 * 获得当前存储模型同步文件地址
 * 
 * @param {string} name 数据存储表名
 * 
 * @param {string} path 数据存储路径
 * 
 */

const {
    join
} = require('path') ;

return join(path , `${name}.json`) ;
