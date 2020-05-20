
/**
 * 
 * 初始化脑图数据
 * 
 * @import initVisibilityNodes from .load.visibility scoped
 * 
 * @import initLayoutNodes from .load.layout scoped
 * 
 * @import clone from array.clone
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

    let {
      visibilityNodes
    } = me ;

    me.fireEvent('load' , clone(visibilityNodes.values())) ;

    add(me , 'nodesized' , initLayoutNodes , {
       once:true
    }) ;
 }
