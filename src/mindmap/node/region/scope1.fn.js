
/**
 * 
 * 获得当前节点作用区域
 * 
 * @import isSized from ..sized scoped
 * 
 * @import getDescendantNodes from ....nodes.relation.descendant scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {object}  节点作用区域信息
 * 
 */

const {
    min,
    max
 } = Math ;

let {
    x,
    y,
    hidden
} = node ;

 if(isSized(node) && !hidden){ 

    let nodes = getDescendantNodes(node),
        tops = [],
        rights = [],
        bottoms = [];

    for(let {
        x,
        width,
        y,
        height
    } of nodes){

        tops.push(y) ;

        bottoms.push(y + height) ;

        rights.push(x + width) ;
    }

    y = min(y , ...tops) ;

    return {
        x,
        y,
        width:max(...rights) - x,
        height:max(...bottoms) - y
    };
 }

 return {
    x,
    y,
    width:0,
    height:0
} ;
