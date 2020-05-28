
/**
 * 
 * 有关叶子节点识别
 * 
 * @import isRootNode from ..node.is.root
 * 
 * @import getParentNode from ..node.parent scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
 * 
 */

let {
    id
} = node,
me = this,
{
    leafNodes
} = me;

if(hidden === false){

    if(!isRootNode(node)){

        let {
            id:parentNodeId
        } = getParentNode(node) ;

        leafNodes.delete(parentNodeId) ;
    }

    leafNodes.set(id , node) ;

}else{

    leafNodes.delete(id) ;

    if(!isRootNode(node)){
    
        let parentNode = getParentNode(node),
        {
            children
        } = parentNode,
        childrenHidden = true;

        for(let childNode of children){

            if(childNode !== node && !childNode.hidden){

                childrenHidden = false ;

                break ;
            }
        }

        if(childrenHidden){

            leafNodes.set(parentNode.id , parentNode) ;
        }
    }            
}