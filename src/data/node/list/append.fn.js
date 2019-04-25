
/**
 * 
 * 添加节点列表
 * 
 * @import insert from array.insert
 * 
 * @import getLastNode from .node.deepest.last scoped
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {data.node.List} list 节点列表
 * 
 * @return {boolean} 添加成功后则返回 true , 否则返回 false
 * 
 */

let me = this,
{
    startNode,
    endNode
} = list,
{
    nodes,
    nodeMap
} = me;

if(!nodes.includes(startNode) && !nodes.includes(endNode)){

    list.nodeMap.forEach((value , key) => nodeMap.set(key , value)) ;

    if(nodes.includes(parentNode)){
   
       let lastNode = getLastNode(parentNode),
           index;
   
       if(lastNode){
   
           index = nodes.indexOf(lastNode) ;
       
       }else{
   
           index = nodes.indexOf(parentNode) ;
       }
   
       insert(nodes , index + 1 , ...list.nodes) ;
   
       nodeMap.get(parentNode).push(startNode) ;
   
       return true ;
    }
}

return false ;