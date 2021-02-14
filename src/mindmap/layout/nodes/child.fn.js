
/**
 * 
 * 获得子节点集合
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 子节点集合 
 * 
 */

 let {
    children,
    expanded
 } = node;

 if(!expanded){

    return [] ;
 }

 let result = [] ;

 for(let childNode of children){

    if(!childNode.hidden){

        result.push(childNode) ;
    }
 }

 return result ;