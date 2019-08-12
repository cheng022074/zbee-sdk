
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

    async reopen(){

        let me = this ;

        await me.close() ;

        await me.open() ;
    }

    open(){

    }

    close(){

        
    }

    validateMessage({
        params:baseParams
    },{
        params:equalParams
    }){

        let names = Object.keys(equalParams) ;

        for(let name of names){

            if(baseParams[name] !== equalParams[name]){

                return false ;
            }
        }

        return true ;
    }
 }