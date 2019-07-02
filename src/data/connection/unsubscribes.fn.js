
/**
 * 
 * 批量取消订阅
 * 
 * @param {string[]} names 批量订阅配置
 * 
 */

let me = this;

for(let name of names){

    me.unsubscribe(name) ;
}