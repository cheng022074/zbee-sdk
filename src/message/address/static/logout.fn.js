
/**
 * 
 * 注销一个地址
 * 
 * @import get from message.address.get
 * 
 * @import unregister from message.address.unregister
 * 
 * @param {string} address 地址
 * 
 * @return {boolean} 注销成功返回 true , 否则返回 false
 * 
 */

address = get(address) ;

if(address){

    unregister(address) ;
}