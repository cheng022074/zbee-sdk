
/**
 * 
 * 插入节点列表
 * 
 * @import getLastNode from .node.deepest.last scoped
 * 
 * @import insert from array.insert
 * 
 * @import array.insert.before
 * 
 * @import array.insert.after
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {data.node.List} list 子节点
 * 
 * @param {mixed} baseChildNode 基准子节点
 * 
 * @param {string} [position = 'before'] 插入在基准子节点的前后位置
 * 
 * @return {boolean} 插入成功后则返回 true , 否则返回 false
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
} = me,
childNodes = nodeMap.get(parentNode);

if(nodes.includes(parentNode) && nodes.includes(baseChildNode) && childNodes.includes(baseChildNode)){

   list.nodeMap.forEach((value , key) => nodeMap.set(key , value)) ;

   let index;

    switch(position){

        case 'before':

            index = nodes.indexOf(baseChildNode) ;

        case 'after':

            let lastNode = getLastNode(baseChildNode) ;

            if(lastNode){

                index = nodes.indexOf(lastNode) + 1;
            
            }else{
         
                index = nodes.indexOf(baseChildNode) + 1 ;
            }
    }

   insert(nodes , index , ...list.nodes) ;

   include(`array.insert.${position}`)(nodeMap.get(parentNode) , startNode , baseChildNode) ;

   return true ;
}

return false ;