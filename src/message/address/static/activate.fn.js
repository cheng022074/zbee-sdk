
/**
 * 
 * 激活
 * 
 * @import storage from .storage
 * 
 * @param {object} target 目标对象
 * 
 */

 let {
    listeners = {}
 } = target ;

 let addresses = Object.keys(listeners) ;

 for(let address of addresses){

    let listener = target[listeners[address]] ;

    address = storage(address) ;

    if(listener && address){

        address.activate(listener.bind(target)) ;
    }
 }
