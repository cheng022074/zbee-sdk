
/**
 * 
 * 获得上兄弟节点
 * 
 * @import getParentNode from mindmap.node.parent scoped
 * 
 * @import cache from mindmap.layout.cache scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {data.Record} 兄弟节点引用 
 * 
 */

 function main(node){

    return cache(node , 'getPreviousSiblingNode' , getPreviousSiblingNode) ;
 }

 function getPreviousSiblingNode(node){

    let parentNode = getParentNode(node),
    {
        layoutNodes
    } = this;

    if(parentNode){

        let {
            children
        } = parentNode,
        index = children.indexOf(node) - 1;

        for(let i = index ; i >= 0 ; i --){

            let previousNode = children[i] ;

            if(layoutNodes.includes(previousNode)){

                return previousNode ;
            }
        }
    }
 }