
/**
 * 
 * 添加节点列表
 * 
 * @import insert from array.insert
 * 
 * @import getLastNode from .node.deepest.last
 * 
 * @import join from ..join scoped
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {data.node.List} list 节点列表
 * 
 * @return {boolean} 添加成功后则返回 true , 否则返回 false
 * 
 */

 let me = this ;

 join(list) ;

 let {
     nodes,
     nodeMap
 } = this;

 if(nodes.includes(parentNode)){

    let lastNode = getLastNode(parentNode),
        index;

    if(lastNode){

        index = nodes.indexOf(lastNode) ;
    
    }else{

        index = nodes.indexOf(parentNode) ;
    }

    let {
        startNode,
        endNode
    } = list ;

    insert(nodes , index + 1 , ...me.getNodes(startNode , endNode)) ;

    nodeMap.get(parentNode).push(startNode) ;

    return true ;
 }

 return false ;