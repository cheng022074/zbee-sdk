
/**
 * 
 * 设置节点隐藏属性
 * 
 * @import isRootNode from .node.is.root
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import data from .data scoped
 * 
 * @import defer from function.defer
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} hidden 决定节点是否隐藏，隐藏为 true , 显示为 false
 * 
 * @return {boolean} 节点隐藏状态
 * 
 */

function main(node , hidden){

    let {
    id
    } = node,
    me = this,
    {
        visibilityNodes,
        leafNodes,
        unsizedNodes
    } = me;
    
    if(hidden === false){
    
        visibilityNodes.set(id , node) ;
    
    if(isRootNode(node)){
    
        me.level = 1 ;
    
    }else{
    
        let {
            id:parentNodeId,
            level
        } = getParentNode(node) ;
    
        node.level = level + 1 ;
    
        leafNodes.delete(parentNodeId) ;
    }
    
    leafNodes.set(id , node) ;
    
    let {
        width,
        height
    } = node ; 
    
    if(!(width && height)){
    
        unsizedNodes.set(id , node) ;
    
        let {
            nodeCreatedTimerId
        } = me ;
    
        if(nodeCreatedTimerId){
    
            clearTimeout(nodeCreatedTimerId) ;
        }
    
        me.nodeCreatedTimerId = defer(() => {
    
            let {
                unsizedNodes
            } = me ;
    
            me.fireEvent('nodecreated' , data(unsizedNodes.values()).nodes) ;
    
        }) ;
    }
    
    }else{
    
        visibilityNodes.delete(id) ;
        
        node.level = 0 ;
    
        leafNodes.delete(id) ;
    
        if(!isRootNode(node)){
        
            let parentNode = getParentNode(node) ;
        
            leafNodes.set(parentNode.id , parentNode) ;
        }            
    }
    
    return hidden ;
}

function resetAncestorLeafNodes(node){

    let parentNode ;

    while(parentNode = getParentNode(node)){

        delete parentNode.leafNodes ;

        node = parentNode ;
    }
}