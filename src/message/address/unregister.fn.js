
/**
 * 
 * 注销地址
 * 
 * @import removeAddress from message.address.storage
 * 
 * @param {message.Address} address 地址
 * 
 */

 let {
    id
 } = address ;

 removeAddress(id , false) ;

 address.destroy() ;