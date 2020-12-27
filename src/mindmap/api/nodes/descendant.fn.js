
/**
 * 
 * 获得所有的子孙节点
 * 
 * @import is.function
 * 
 * @import getDescendantNodes from ....data.nodes.descendant scoped
 * 
 * @import data from .data scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {function} [fn] 查询条件函数
 * 
 * @return {array} 节点集合 
 * 
 */

 if(isFunction(fn)){

    return data(getDescendantNodes(node , fn)) ;
 }

 return data(getDescendantNodes(node , () => ({
    result:true,
    next:true
 }))) ;