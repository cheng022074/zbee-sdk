
/**
 * 
 * 销毁节点
 *
 * 
 */

 me = this ;

 me.emit('destroy' , me) ;

 me.removeAllListeners() ;