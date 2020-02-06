
/**
 * 
 * 登记地址
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import get from function.get
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {string|object} address 地址
 * 
 * @param {mixed} fn 地址所绑定的函数
 * 
 * @param {mixed} scope 绑定函数的作用域
 * 
 * @return {data.message.Address} 消息地址
 * 
 */

 function main(address , fn , scope){

    let me = this ;

    if(isString(address)){

        return register.call(me , address , fn , scope) ;
    
    }else if(isObject(address)){

        let names = Object.keys(address),
            result = {};

        for(let name of names){

            result[name] = register.call(me , name ,address[name]) ;
        }

        return result ;
    }
 }

 function register(address , fn , scope){

    let me = this,
    {
        addresses
    } = me ;

    if(!addresses.hasOwnProperty(address)){

        let resignerConfig ;
    
        if(isObject(fn)){
    
            let config = fn ;
    
            {
                let {
                    receive,
                    reply,
                    scope
                } = config ;
    
                resignerConfig = {
                    receive:get(receive , scope),
                    reply:get(reply , scope)
                } ;
            }
    
        }else if(isFunction(fn)){
    
            resignerConfig = {
                receive:get(fn , scope),
                reply:get(fn , scope)
            } ;
        
        }else{
    
            resignerConfig = {
                receive(){
                },
                reply({
                    result
                }){
    
                    return result ;
                }
            } ;
        }
    
        addresses[address] = {
            ...resignerConfig,
            send(address , params , config = {}){
    
                return me.send(address , params , {
                    ...config,
                    fromAddress:address
                }) ;
            }
        } ;
     }

     return addresses[address] ;
}