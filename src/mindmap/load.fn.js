
/**
 * 
 * 初始化脑图数据
 * 
 * @import initVisibilityNodes from .load.visibility scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import add from event.listener.add
 * 
 * @param {mixed} data 数据
 * 
 */

 let me = this,
 {
    reader,
    readerAsRoot
 } = me,
 result = reader.read(data , readerAsRoot) ;

 if(result.length === 1){

    me.rootNode = result[0] ;

    initVisibilityNodes() ;

    add(me , 'nodesized' , layout , {
       once:true
    }) ;
 }
