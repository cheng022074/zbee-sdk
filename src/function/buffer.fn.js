
/**
 * 
 * 实现懒执行模式函数
 * 
 * @import get from function.get
 * 
 * @param {mixed} fn 函数
 * 
 * @param {object} [config = {}] 函数配置
 * 
 * @param {mixed} [config.scope] 函数作用域
 * 
 * @param {mixed} [config.buffer = 0] 缓存时间
 * 
 */

let bufferId ;

return () =>{

    if(bufferId){

        clearTimeout(bufferId) ;
    }

    bufferId = setTimeout(() => {

        get(fn , scope)() ;

        bufferId = null ;

    } , buffer) ;
} ;