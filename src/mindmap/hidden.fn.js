
/**
 * 
 * 设置节点隐藏属性
 * 
 * @import isRootNode from .node.is.root
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import reset from .hidden.reset scoped
 * 
 * @import level from .hidden.level scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
 * 
 * @return {boolean} 节点隐藏状态
 * 
 */

let {
    id
} = node,
me = this,
{
    visibilityNodes,
    leafNodes,
    unsizedNodes
} = me;

reset(node) ;

level(node , hidden) ;

if(hidden === false){

    visibilityNodes.set(id , node) ;

    if(!isRootNode(node)){

        let {
            id:parentNodeId
        } = getParentNode(node) ;

        leafNodes.delete(parentNodeId) ;
    }

    leafNodes.set(id , node) ;

    let {
        width,
        height
    } = node ; 

    if(!(width && height)){

        unsizedNodes.set(id , node) ;

        me.fireNodeCreatedEvent() ;
    }

}else{

    visibilityNodes.delete(id) ;

    node.selected = false ;

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

return hidden ;