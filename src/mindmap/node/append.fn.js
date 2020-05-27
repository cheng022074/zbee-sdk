
/**
 * 
 * 添加子节点
 * 
 * @import generate from id.generate
 * 
 * @import create from .create scoped
 * 
 * @param {data.Record} parentNode 节点
 * 
 * @param {mixed} node 节点配置
 * 
 */

 let {
    hidden
 } = parentNode ;

 if(hidden){

    return ;
 }

 let {
    children
 } = parentNode,
 childNode = create(node , parentNode) ;
 
 children.push(childNode) ;

 return childNode ;

