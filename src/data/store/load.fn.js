
/**
 * 
 * 载入数据
 * 
 * @import from from array.from
 * 
 * @param {mixed} options 数据
 * 
 */

 let me = this,
 {
    proxy,
    $data:data
 } = me;

 data.clear() ;

 me.loading = false ;

 proxy.read(options) ;