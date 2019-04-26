
/**
 * 
 * 清除所有节点
 * 
 * @import from from array.from
 * 
 */

 let me = this,
 {
     proxy
 } = me ;

 let {
     rootNode
 } = me ;

 if(rootNode){

    rootNode.clearAllListeners() ;

    delete me.rootNode ;

    delete me.list ;

    proxy.callIf('remove' , 1) ;
 }