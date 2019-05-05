
/**
 * 
 * 载入数据
 * 
 * @import from from array.from
 * 
 * @param {mixed} [options] 数据
 * 
 */

 let me = this,
 {
    proxy,
    defaultLoadOptions
 } = me;

 me.clear() ;

 proxy.read(options || defaultLoadOptions) ;