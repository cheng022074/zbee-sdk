
/**
 * 
 * 脑图节点序列化
 * 
 * @import getData from ..data.node.data scoped
 * 
 * @import getChildNodes from ..data.nodes.child scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {object} 序列化后的数据 
 * 
 */

 function main(node){

    return serialize(node) ;
 }

 function serialize(node){

    let data = getData(node),
        children = [],
        childNodes = getChildNodes(node);

    for(let childNode of childNodes){

        children.push(serialize(childNode)) ;
    }

    data.children = children ;

    return data ;
 }