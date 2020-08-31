
/**
 * 
 * 数据过滤
 * 
 * @import is.function
 * 
 * @param {array} nodes 脑图节点
 * 
 * @param {function} filter 过滤函数
 * 
 * @return {array} 节点集合
 * 
 */

 if(isFunction(filter)){

    return nodes.filter(filter) ;
 }

 return nodes ;
 