
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

 let parentNode = getParentNode(node),
 {
    layoutNodes
 } = this;

 if(parentNode){

    let {
        children
    } = parentNode,
    {
        length
    } = children,
    index = children.indexOf(node) + 1;

    for(let i = index ; i < length ; i ++){

        let nextNode = children[i] ;

        if(layoutNodes.includes(nextNode)){

            return nextNode ;
        }
    }
 }