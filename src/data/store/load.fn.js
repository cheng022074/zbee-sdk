
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
    proxy
 } = me;

 me.clear() ;

 me.connected = false ;

 me.connecting = true ;

 proxy.read(options) ;