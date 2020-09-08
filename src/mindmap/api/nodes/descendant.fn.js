
/**
 * 
 * 获得所有的子孙节点
 * 
 * @import is.function
 * 
 * @import getDescendantNodes from ....data.nodes.descendant scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {function} [fn] 查询条件函数
 * 
 * @return {array} 节点集合 
 * 
 */

 if(isFunction(fn)){

    return getDescendantNodes(node , fn) ;
 }

 return getDescendantNodes(node , () => ({
    result:true,
    next:true
 })) ;