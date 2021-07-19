
/**
 * 
 * 同步添加子节点
 * 
 * @import append from ..api.append scoped
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} node 节点配置
 * 
 * @param {mixed} parentNode 节点
 * 
 * @return {boolean} 如果同步添加子节点成功则返回 true , 否则返回 false
 * 
 */

node = append(node , parentNode) ;

return node && !from(node).hidden ;