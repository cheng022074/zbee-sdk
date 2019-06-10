
/**
 * 
 * 批量取消订阅
 * 
 * @param {string[]} names 订阅名称
 * 
 */

let me = this;

for(let name of names){

   me.unsubscribe(name) ;
}