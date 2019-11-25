
/**
 * 
 * 销毁
 * 
 * @import removeAll from event.listener.remove.all
 * 
 * @import doSubscribers from .subscribers.relation scoped
 * 
 */

let me = this,
{
    connection
} = me;

me.close() ;

delete me.bindFn ;

delete me.extraParams ;

delete me.defaultParams ;

me.fireEvent('destroy') ;

removeAll(me) ;

connection.subscribers.delete(me.fullName) ;

delete me.fullName ;

doSubscribers('destroy') ;