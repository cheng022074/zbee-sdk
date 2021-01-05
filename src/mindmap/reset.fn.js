
/**
 * 
 * 重置脑图
 * 
 * @import getParentNode from .node.parent scoped
 * 
 */

 let me = this,
 {
    rootNode,
    nodes
 } = me ;

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


