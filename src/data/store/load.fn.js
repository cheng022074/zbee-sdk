
/**
 * 
 * 载入数据
 * 
 * @import from from array.from
 * 
 * @param {mixed} [options] 数据
 * 
 * @param {boolean} [isClearData = true] 是否清除已有的数据
 * 
 */

 let me = this,
 {
    proxy,
    defaultLoadOptions
 } = me;

 if(isClearData){

   me.clear() ;
 }

 proxy.read(options || defaultLoadOptions) ;