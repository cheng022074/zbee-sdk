
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

    if(!nodeMap.has(childNode)){

        insert(nodes , index + 1 , childNode) ;

        childNodes.push(childNode) ;

        nodeMap.set(parentNode , childNodes) ;

        nodeMap.set(childNode , []) ;
    
    }else{

        let lastNode = getLastNode(childNode) ;

        if(lastNode){

            insert(nodes , index + 1 , ...nodes.slice(nodes.indexOf(childNode) , nodes.indexOf(lastNode) + 1)) ;
        
        }else{

            insert(nodes , index + 1 , childNode) ;
        }
    }

    return true ;
 }

 return false ;