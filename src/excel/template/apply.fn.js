
/**
 * 
 * 应用 EJS-Excel 模板
 * 
 * @import read from file.read
 * 
 * @param {string} path 模板路径
 * 
 * @param {mixed} [data = {}] 应用的模板数据
 * 
 * @return {string} 模板合并数据后的字符串
 * 
 */

const {
    renderExcel
} = require('ejsExcel'),
template = read(path);

if(template){

    return renderExcel(template , data) ;
}