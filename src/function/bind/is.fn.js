
/**
 * 
 * 绑定当前是否已经绑定过作用域
 * 
 * @import signature from .signature
 * 
 * @param {function} fn 函数
 * 
 * @return {mixed} 如果已经绑定过作用域则返回 true , 否则返回 false
 * 
 */

return fn[signature()] === true ;
