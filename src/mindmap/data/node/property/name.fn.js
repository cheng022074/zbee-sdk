
/**
 * 
 * 获得脑图节点的内部属性名称
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {string} name 属性名称
 * 
 * @return {mixed} 返回说明 
 * 
 */

let {
    id
} = from(node) ;

return `MINDMAP_${id}_${name}` ;