
/**
 * 
 * 添加节点
 * 
 * @import insert from array.insert
 * 
 * @import getLastNode from .node.deepest.last
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {mixed} childNode 子节点
 * 
 * @return {boolean} 添加成功后则返回 true , 否则返回 false
 * 
 */

 let {
     nodes,
     nodeMap
 } = this,
 childNodes = nodeMap.get(parentNode);

 if(childNodes){

    let {
        length
    } = childNodes,
    index;

    if(length){

        index = nodes.indexOf(childNodes[length - 1]) ;
    
    }else{

        index = nodes.indexOf(parentNode) ;
    }

    let lastNode = getLastNode(childNode) ;

    if(!nodeMap.has(childNode) || !lastNode){

        insert(nodes , index + 1 , childNode) ;

        nodeMap.set(childNode , []) ;
    
    }else{

        insert(nodes , index + 1 , ...nodes.slice(nodes.indexOf(childNode) , nodes.indexOf(lastNode) + 1)) ;
    }

    childNodes.push(childNode) ;

    return true ;
 }

 return false ;