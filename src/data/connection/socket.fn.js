
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
 * @import equals from object.equals
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

            let names = Object.keys(equalParams) ;

            for(let name of names){

                if(baseParams[name] !== equalParams[name]){

                    return false ;
                }
            }

            return true ;
        }

        return false ;
    }
 }