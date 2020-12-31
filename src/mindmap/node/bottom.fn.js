
/**
 * 
 * 获得脑图节点顶部值
 * 
 * @import getNodeSeparationDistance from .distance.separation scoped
 * 
 * @import data from .data scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} [isBodySize = true] 是否仅计算节点本身尺寸，默认为 true
 * 
 * @return {mixed} 返回说明 
 * 
 */

let {
    y,
    height,
    hidden
 } = node ;

 if(!hidden){

    if(isBodySize){

        return y + height;
    }

    return y + height + getNodeSeparationDistance(data(node) , getParentNode(node).children.indexOf(node)) ;
 }

 return NaN ;