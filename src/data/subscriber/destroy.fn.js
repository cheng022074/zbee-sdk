
/**
 * 
 * 销毁
 * 
 */

let me = this ;

me.close() ;

delete me.bindFn ;

delete me.extraParams ;

delete me.defaultParams ;

me.fireEvent('destroy') ;

me.clearAllListeners() ;