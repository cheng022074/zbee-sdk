
/**
 * 
 * 获得未隐藏的子节点
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 可视子节点集合
 * 
 */

 let {
    hidden,
    expanded
 } = node ;

 if(!hidden && expanded){

    let {
        children
    } = node,
    nodes = []; 

    for(let childNode of children){

        if(!childNode.hidden){

            nodes.push(childNode) ;
        }        
    }

    return nodes ;
 }

 return [] ;