
/**
 * 
 * 去除所有事件监听
 * 
 * @import listeners from ....listeners value
 * 
 * @import remove from ..native.remove
 * 
 * @param {mixed} target 事件主体
 * 
 */

 let result = listeners.find(target) ;

 for(let {
     key,
     value
 } of result){

    remove(target , key[1] , value) ;
 }