
/**
 * 
 * 返回子节点集合
 * 
 * @import query from ..node.query scoped
 * 
 * @import data from ..node.data scoped
 * 
 * @param {string} id 节点编号
 * 
 * @return {array} 节点信息集合
 * 
 */

 let node = query(id) ;

 if(node){

    let {
        children
    } = node,
    result = [];

    for(let childNode of children){

        result.push(data(childNode)) ;
    }

    return result ;
 }

 return [] ;