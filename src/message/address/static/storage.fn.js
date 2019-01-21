
/**
 * 
 * 存储与获取消息地址
 * 
 * @import is.defined
 * 
 * @param {string} address 消息地址
 * 
 * @param {message.Address} target 消息地址实例
 * 
 * @return {message.Address | undefined} 当 target 为空时，返回 address 对应的消息地址实例 
 * 
 */

const storage = {} ;

function main(address , target){

    if(target){

        stroage[address] = target ;
    
    }else{

        return storage[address] ;
    }
}