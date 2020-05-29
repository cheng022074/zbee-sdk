
/**
 * 
 * 添加子节点
 * 
 * @import generate from id.generate
 * 
 * @import create from .create scoped
 * 
 * @import is from .is.visibility
 * 
 * @param {data.Record} parentNode 节点
 * 
 * @param {mixed} node 节点配置
 * 
 */

 if(!is(parentNode)){

    return ;
 }

 let {
    children
 } = parentNode ;

 node = create(node , parentNode) ;
 
 children.push(node) ;

 return node ;

