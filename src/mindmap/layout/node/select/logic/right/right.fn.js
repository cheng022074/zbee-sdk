
/**
 * 
 * 向右移动选择节点
 * 
 * @import select from mindmap.node.select scoped
 * 
 */

let me = this,
{
    selectedNode,
    layoutPositioner
} = me,
{
    children
} = selectedNode,
node;

if(children.length){

    node = children[0] ;

}else{

    node = layoutPositioner.getSelectRightNode(selectedNode) ;
}

if(node){

    return select(node) ;
}

 return false ;