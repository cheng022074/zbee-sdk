
/**
 * 
 * 获得最后一个子脑图节点
 * 
 * @import from from ..from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @return {data.Reocrd} 子脑图节点引用
 * 
 */

 let {
     children
 } = from(node),
 {
    length
 } = children;

 if(length){

    return children[length - 1] ;
 }



