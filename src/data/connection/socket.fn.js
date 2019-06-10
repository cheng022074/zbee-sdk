
/**
 * 
 * Socket 通信
 * 
 * @import Connection from data.connection value
 * 
 * @import isObject from is.object.simple
 * 
 * @import getKeys from object.keys
 * 
 * @import getValue from object.value.get
 * 
 * @class
 * 
 */

 class main extends Connection{

    validateMessage({
        params:baseParams
    },{
        params:equalParams
    }){

        if(isObject(baseParams) && isObject(equalParams)){

            let keys = getKeys(baseParams),
                equalKeys = getKeys(equalParams);

            for(let key of keys){

                if(!equalKeys.includes(key)){

                    continue ;
                }

                if(getValue(baseParams , key) !== getValue(equalParams , key)){

                    return false ;
                }
            }

            return true ;
        }

        return false ;
    }
 }