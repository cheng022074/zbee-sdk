/**
 * 
 * 将路径转换成 Unix 的路径格式
 * 
 * @param {string} path 路径
 * 
 * @return {string} Unix 的路径样式
 * 
 */

return path.replace(/^[a-z]+\:/i , '').replace(/\\/g , '/') ;