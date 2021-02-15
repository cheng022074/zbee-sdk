
/**
 * 
 * 布局缓存
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {string} cacheName 缓存名称
 * 
 * @param {function} cacheFn 缓存计算函数
 * 
 * @return {mixed} 缓存返回值
 * 
 */

 let me = this ;

 if(!me.hasOwnProperty('layoutCache')){

    me.layoutCache = new Map() ;
 }

 let {
    layoutCache
 } = me ;

 if(!layoutCache.has(node)){

    layoutCache.set(node , {}) ;
 }

 let cache = layoutCache.get(node) ;

 if(!cache.hasOwnProperty(cacheName)){

    cache[cacheName] = cacheFn.call(me , node) ;
 }

 return cache[cacheName] ;