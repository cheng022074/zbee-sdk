
/**
 * 
 * 根据坐标定位节点
 * 
 * @import getData from .data scoped
 * 
 * @param {object} xy 坐标
 * 
 * @return {object} 节点信息 
 * 
 */

 let {
    visibilityNodes
 } = this ;
 
 return getData(visibilityNodes.getNearestParentNode(xy)); ;