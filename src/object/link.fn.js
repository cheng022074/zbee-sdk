/**
 * 
 * 将对象的方法或者属性进行链接
 * 
 * @import is.function
 * 
 * @param {mixed} dest 目标对象
 * 
 * @param {mixed} source 来源对象
 * 
 * @param {array} names 字段名称集合
 * 
 */

 for(let name of names){

    let value = source[name] ;

    if(isFunction(value)){

        dest[name] = (...args) => source[name](...args) ;
    
    }else{

        Object.defineProperty(dest , name , {

            set:value => source[name] = value,

            get:() => source[name]

        }) ;
    }
 }