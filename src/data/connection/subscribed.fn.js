
/**
 * 
 * 判定是否订阅
 * 
 * @import getName from .subscribe.name
 * 
 * @param {string} name 订阅名称
 * 
 * @param {string} [connectionId] 连接编号
 * 
 * @return {boolean} 如果已订阅则返回 true ， 否则返回 false
 * 
 */

let me = this,
{
    subscribers
} = me;

return subscribers.has(getName(name , connectionId)) ;

 