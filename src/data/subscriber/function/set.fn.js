
/**
 * 
 * 设置绑定函数
 * 
 * @import is.defined
 * 
 * @param {function} binFn 绑定函数
 * 
 */

 let me = this,
 {
     cache,
     closed
 } = me ;

 me.$bindFn = bindFn;

 if(!closed){

    if(isDefined(cache)){

        binFn(cache) ;
    }
 }