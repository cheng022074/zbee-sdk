
/**
 * 
 * 注册地址
 * 
 * @import create from message.address
 * 
 * @param {string} address 消息地址
 * 
 * 
 */

let {
    addresses
} = this ;

if(!addresses.hasOwnProperty(address)){

    addresses[address] = create(address) ;
}

return addresses[address] ;