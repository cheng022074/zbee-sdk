
/**
 * 
 * 获得拥有指定属性的祖先脑图节点
 * 
 * @import getAncestorNode from ......data.node.ancestor scoped
 * 
 * @import is.defined
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {string} name 属性名称
 * 
 * @return {mixed} 脑图节点
 * 
 */

 return getAncestorNode(node , node => isDefined(node[name])) ;

