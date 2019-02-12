
/**
 * 
 * 将路径转换成正则表达式 
 * 
 * @param {string} path 路径
 * 
 * @return {RegExp} 正则表达式 
 * 
 */

return new RegExp(path.replace(/\\/g , '\\\\').replace(/\./g , '\\.')) ;