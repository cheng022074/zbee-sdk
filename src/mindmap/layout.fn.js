
/**
 * 
 * 布局
 * 
 * @import refresh from .refresh scoped
 * 
 * 
 */

 const me = this,
 {
    pattern:layout,
    getRootNode,
    getDescendantNodes
 } = me.layoutConfig ;

 let rootNode = getRootNode() ;

 me.layoutNodes = [
    rootNode,
    ...getDescendantNodes(rootNode)
 ] ;

 me.layoutData = layout(rootNode) ;

 refresh() ;

 delete me.layoutNodes ;
 
