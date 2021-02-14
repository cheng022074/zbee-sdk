
/**
 * 
 * 获得上兄弟节点
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 兄弟节点引用 
 * 
 */

 let parentNode = getParentNode(node) ;

 if(parentNode){

    let {
        children
    } = parentNode,
    index = children.indexOf(node) - 1;

    for(let i = index ; i >= 0 ; i --){

        let previousNode = children[i] ;

        if(!previousNode.hidden){

            return previousNode ;
        }
    }
 }