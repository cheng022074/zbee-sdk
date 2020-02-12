
/**
 * 
 * 去除所有事件监听
 * 
 * @import listeners from ....listeners value
 * 
 * @import remove from ..remove
 * 
 * @param {mixed} target 事件主体
 * 
 */

 let result = listeners.find(target) ;

 for(let {
     key
 } of result){

    remove(target , key[1] , key[2] , key[3]) ;
 }