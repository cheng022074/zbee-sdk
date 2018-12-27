/**
 * 
 * 去除监听事件
 * 
 * @import is.function
 * 
 * @import get from .getEmitter scoped
 * 
 * @param {string} moduleName 模块名称
 * 
 * @param {string} event 事件名称
 * 
 * @param {string} listener 事件监听函数名称
 * 
 * @param {object} scope 事件监听函数作用域
 * 
 */

listener =  scope[listener] ;

if(isFunction(listener)){

    get(moduleName).removeListener(event , scope[listener]) ;
}