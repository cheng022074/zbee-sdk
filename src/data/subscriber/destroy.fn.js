
/**
 * 
 * 销毁
 * 
 * @import removeAll from event.listener.remove.all
 * 
 */

let me = this ;

me.close() ;

delete me.bindFn ;

delete me.extraParams ;

delete me.defaultParams ;

me.fireEvent('destroy') ;

removeAll(me) ;