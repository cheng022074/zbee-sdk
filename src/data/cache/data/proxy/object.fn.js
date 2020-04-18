
/**
 * 
 * 创建对象代理
 * 
 * @import create from .create scoped
 * 
 * @import save from ....save scoped
 * 
 * @param {object} data 代理的对象
 * 
 * @return {mixed} 代理后的对象 
 * 
 */

 let keys = Object.keys(data) ;

 for(let key of keys){

    data[key] = create(data[key]) ;
 }

 return new Proxy(data , {

    set(data , name , value){

        data[name] = create(value , true) ;

        save() ;

        return true ;
    }

 }) ;