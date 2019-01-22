/**
 * 
 * 从配置中初始化所有地址
 * 
 * @import config::message.address
 * 
 * @import getAddress from message.address
 * 
 * @import is.string
 * 
 * @import is.object
 * 
 * @import storage from .storage
 * 
 * @once
 * 
 */

let myConfig = config('message.address'),
    addresses = Object.keys(myConfig) ;

for(let address of addresses){

    let addressConfig = myConfig[address],
        plugin = 'NORMAL',
        relistenMode = 'ALL';

    if(isString(addressConfig)){

        plugin = addressConfig ;

    }else if(isObject(addressConfig)){

        let {
            mode,
            plugin:myPlugin
        } = addressConfig ;

        if(mode){

            relistenMode = mode ;
        
        }else if(myPlugin){

            plugin = myPlugin ;
        }
    }

    storage(address , getAddress(address , include(`message.plugin.${plugin.toLowerCase()}`)() , relistenMode)) ;
}