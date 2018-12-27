/**
 * 
 * 去除监听事件
 * 
 * @import get from .getEmitter
 * 
 * @param {string} moduleName 模块名称
 * 
 * @param {string} event 事件名称
 * 
 * @param {function} listener 事件监听函数
 * 
 */

get(moduleName).removeListener(event , listener) ;
