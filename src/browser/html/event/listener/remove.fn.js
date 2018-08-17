
/**
 * 
 * 去除监听一个事件
 * 
 * @import getMap from map.event.listener
 * 
 * @param {mixed} target 作用对象
 * 
 * @param {string} event 事件名称
 * 
 * @param {function} fn 监听函数
 *   
 * @param {mixed} [scope] 监听函数作用域
 * 
 */

let map = getMap() ;

target.removeEventListener(event , map.get(fn , scope)) ;

map.remove(fn , scope) ;