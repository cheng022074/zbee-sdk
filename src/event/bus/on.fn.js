/**
 * 
 * 监听事件
 * 
 * @import get from .getEmitter scoped
 * 
 * @import is.function
 * 
 * @import bind from function.bind
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

listener = scope[listener] ;

if(isFunction(listener)){

    get(moduleName).addListener(event , scope[listener] = bind(listener , scope)) ;
}


