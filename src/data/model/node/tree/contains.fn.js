
/**
 * 
 * 判断指定节点是否被当前节点所包含
 * 
 * @param {data.model.node.Tree} node  节点
 * 
 * @return {boolean} 如果指定节点为当前节点所包含则返回 true , 否则返回 false  
 * 
 */

 return this.descendantNodes.includes(node) ;