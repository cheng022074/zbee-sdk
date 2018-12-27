/**
 * 
 * 击发事件
 * 
 * @config events from event
 * 
 * @import get from .getEmitter scoped
 * 
 * @import getListeners from object.get
 * 
 * @import is.array
 * 
 * @param {string} moduleName 模块名称
 * 
 * @param {string} event 事件名称
 * 
 * @param {array} [...args] 事件参数
 * 
 * 
 */

let listeners = getListeners(events , `${moduleName}.${event}`) ;

if(isArray(listeners)){

    get(moduleName).emit(event , ...args) ;
}