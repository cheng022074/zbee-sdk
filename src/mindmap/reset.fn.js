
/**
 * 
 * 重置脑图
 * 
 * @import getRootNode from .node.root scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @param {number} [level] 显示层数
 * 
 */

 let me = this,
 {
    nodes
 } = me,
 rootNode = getRootNode() ;



 me.select(rootNode) ;

 nodes.forEach(node => {

    if(node.selected){

        return ;
    
    }else if(getParentNode(node) === rootNode){

        node.expanded = false ;
    
    }else{

        node.hidden = true ;

        node.expanded = false ;
    }
 }) ;

 me.layout() ;


