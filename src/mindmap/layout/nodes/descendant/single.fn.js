
/**
 * 
 * 获得子节点
 * 
 * @import cache from mindmap.layout.cache scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @return {array} 子节点数组 
 * 
 */

function main(node){

    return getChildNodes(node) ;
 }

 function getChildNodes({
     expanded,
     children
 }){

    if(expanded){

        return Array.from(children) ;
    }

    return [] ;
 }