/**
 * 
 * 击发事件
 * 
 * @config events from event
 * 
 * @import get from .getEmitter scoped
 * 
 * @import getEvents from object.get
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

let eventList = getEvents(events , moduleName) ;

if(eventList.includes(event)){

    get(moduleName).emit(event , ...args) ;
}