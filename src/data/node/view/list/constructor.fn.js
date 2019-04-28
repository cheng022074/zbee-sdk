
/**
 * 
 * 构建节点的一维列表
 * 
 * @import fly from object.proxy.fly
 * 
 * @import insert from ..insert scoped
 * 
 * @param {mixed} node 节点
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.childNodesField = 'childNodes'] 子节点集合引用字段名称
 * 
 * @param {string} [config.expandedField = 'expanded'] 节点展开收起标识字段
 * 
 */

let me = this ;

me.nodes = [
    node
] ;

me.childNodesField = childNodesField ;

me.expandedField = expandedField ;

insert(node , fly(node).get(childNodesField)) ;
 