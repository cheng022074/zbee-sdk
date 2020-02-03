
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
 * @param {string|object} address 地址
 * 
 * @param {mixed} fn 地址所绑定的函数
 * 
 * @param {mixed} scope 绑定函数的作用域
 * 
 */

 let {
     addresses
 } = this ;

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

    addresses[address] = resignerConfig ;
 }