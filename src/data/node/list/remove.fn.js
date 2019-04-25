
/**
 * 
 * 删除节点
 * 
 * @import remove from array.remove
 * 
 * @import getLastNode from .node.deepest.last
 * 
 * @param {mixed} parentNode 父节点
 * 
 * @param {mixed} childNode 子节点
 * 
 * @return {boolean} 删除成功后则返回 true , 否则返回 false
 * 
 */

let {
    nodes,
    nodeMap
} = this,
childNodes = nodeMap.get(parentNode);

if(childNodes){


   let result = remove(childNodes , childNode) ;

   if(result){

        let lastNode = getLastNode(childNode) ;

        if(lastNode){

            let startIndex = nodes.indexOf(childNode),
                endIndex = nodes.indexOf(lastNode);

            for(let i = startIndex ; i <= endIndex ; i ++){

                nodeMap.delete(nodes[i]) ;
            }

            nodes.splice(startIndex , endIndex - startIndex + 1) ;

        }else{

            nodeMap.delete(childNode) ;

            remove(nodes , childNode) ;
        }

        

        return true ;
   }
}

return false ;