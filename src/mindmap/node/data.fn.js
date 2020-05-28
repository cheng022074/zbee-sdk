
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @import isLeafNode from .is.leaf scoped
 * 
 * @import getRegion from ..region scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {object} 数据信息 
 * 
 */

 let {
    height,
    padding
 } = this,
 {
    hidden
 } = node,
 {
    height:regionHeight
 } = getRegion(),
 heightPadding = 0;

 if(height !== regionHeight){

    heightPadding = padding ;
 }

 if(!hidden){

    let data = Object.assign({} , node) ;

    data.x += padding ;

    data.y += heightPadding ;

    delete data.children ;

    delete data.hidden ;

    delete data.level ;

    delete data.parentNodeId ;

    delete data.leafNodes ;

    delete data.relationNodes ;

    delete data.firstChildNodes ;

    delete data.lastChildNodes ;

    data.root = isRootNode(node) ;

    data.leaf = isLeafNode(node) ;

    return data ;
 }

 