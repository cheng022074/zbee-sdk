
/**
 * 
 * 实时获取节点深度
 * 
 * @import getParentNode from .parent scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {Number} 节点深度 
 * 
 */

if(!node.hidden){

    let level = 1,
        parentNode;

    while(parentNode = getParentNode(node)){

        if(!parentNode.hidden && !parentNode.ellipsis){

            level ++ ;

            node = parentNode ;
        
        }else{

            break ;
        }
    }

    return level ;
}

return 0 ;