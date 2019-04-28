
/**
 * 
 * 构建节点方向识别器
 * 
 * @import getProxy from object.proxy
 * 
 * @param {mixed} node 节点引用
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.parentNodeField = 'parentNode'] 父节点引用字段名称
 * 
 * @param {string} [config.childNodesField = 'childNodes'] 子节点集合引用字段名称 
 * 
 * @param {string} [config.relationshipField = 'relationship'] 描述节点关系字段名称
 * 
 */

 let me = this ;

 me.proxy = getProxy(node) ;

 me.node = node ;

 me.parentNodeField = parentNodeField ;

 me.childNodesField = childNodesField ;

 node[me.relationshipField = relationshipField] = me ;