
/**
 * 
 * 延时执行函数
 * 
 * @import get from function.get
 * 
 * @param {mixed} fn 函数
 * 
 * @param {object} [config = {}] 函数配置
 * 
 * @param {mixed} [config.scope] 函数作用域
 * 
 * @param {mixed} [config.defer = 0] 延时时间
 * 
 */

 return setTimeout(() => get(fn , scope)() , defer) ;