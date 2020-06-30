
/**
 * 
 * 获取所有祖先节点
 * 
 * @import getParentNode from ....node.parent scoped
 * 
 * @param {data.Recorder} node 节点
 * 
 * @return {array} 祖先节点集合
 * 
 */

let {
    ancestorNodes
} = node ;

if(ancestorNodes){

    return ancestorNodes ;
}

let parentNode;

ancestorNodes = node.ancestorNodes = [] ;

while(parentNode = getParentNode(node)){

    if(!parentNode.hidden){

        ancestorNodes.push(parentNode) ;

        node = parentNode ;
    
    }else{

        break ;
    }
}

return ancestorNodes ;