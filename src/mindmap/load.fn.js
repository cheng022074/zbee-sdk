
/**
 * 
 * 初始化脑图数据
 * 
 * @import initVisibilityNodes from .load.visibility scoped
 * 
 * @import initNodes from .load.nodes scoped
 * 
 * @import tryLayout from .layout.try scoped
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

    let rootNode = me.rootNode = result[0] ;

    rootNode.selected = true ;

    initNodes() ;

    initVisibilityNodes() ;

    await tryLayout() ;
 }
