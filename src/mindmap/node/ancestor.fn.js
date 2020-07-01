
/**
 * 
 * 获得祖先节点
 * 
 * @import getParentNode from .parent scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {number} [level = Number.MAX_VALUE] 祖先所在层次
 * 
 * @return {data.Record} 祖先节点
 * 
 */

if(!node.hidden){

    for(let i = 0 ; i < level ; i ++){

        let parentNode = getParentNode(node) ;

        if(parentNode && !parentNode.hidden){

            node = parentNode ;
        
        }else{

            return ;
        }
    }

    return node ;
}

 