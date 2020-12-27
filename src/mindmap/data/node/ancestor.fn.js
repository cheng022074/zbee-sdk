
/**
 * 
 * 获得祖先节点
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * @param {function} fn 查询条件函数
 * 
 * @param {boolean} [fromCurrentNode = false] 是否从当前脑图节点进行遍历
 * 
 * @return {object} 祖先脑图节点
 * 
 */

 let target ;

 if(fromCurrentNode){

    target = node ;
 
 }else{

    target = getParentNode(node) ;
 }

 while(target){

    if(fn(target)){

        return target ;
    }

    target = getParentNode(target) ;

 }

 