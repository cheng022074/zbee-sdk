/**
 * 
 * 重置选中节点
 * 
 * @import select from mindmap.node.select scoped
 * 
 * @import from from mindmap.node.from scoped
 * 
 * @param {object} options 节点配置
 * 
 * @param {object} options.node 原选定节点
 * 
 * @param {array} options.ancestorNodes 原选定节点的祖先节点集合
 * 
 * @param {array} options.nextSiblingNodes 原选定节点的上兄弟节点集合
 * 
 * @param {array} options.previousSiblingNodes 原选定节点的下兄弟节点集合
 * 
 */

node = from(node) ;

if(node && !node.hidden){

    node.selected = true ;

}else{

    selectNode(previousSiblingNodes) ||
    selectNode(nextSiblingNodes) ||
    selectNode(ancestorNodes) ;

}

function selectNode(nodes){

    for(let node of nodes){

        node = from(node) ;

        if(node && !node.hidden){

            select(node) ;

            return true ;
        }
    }

    return false ;
}