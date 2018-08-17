
/**
 * 
 * 通过一个 Excel 文件路径构建
 * 
 * 
 * @param {string} path Excel 文件路径
 * 
 * 
 */

 const 
 {
    readFile
 } = require('xlsx');

this.data = readFile(path , {
    cellDates:true
}) ;

