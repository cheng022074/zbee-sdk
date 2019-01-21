import { isString, isObject } from "util";

/**
 * 
 * 从配置中初始化所有地址
 * 
 * @import config from config::message.address
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

let addresses = Object.keys(config) ;

for(let address of addresses){

    let addressConfig = config[address],
        plugin = 'STANDARD',
        relistenMode = 'ALL';

    if(isString(addressConfig)){

        plugin = addressConfig ;

        include(`message.plugin.${addressConfig}`)() ;
    
    }else if(isObject(addressConfig)){

        if(addressConfig.hasOwnProperty('mode')){

            relistenMode = addressConfig.mode ;
        
        }else if(addressConfig.hasOwnProperty('plugin')){

            plugin = addressConfig.plugin ;
        }
    }

    storage(address , getAddress(address , include(`message.plugin.${plugin.toLowerCase()}`)() , relistenMode)) ;
}