
/**
 * 
 * 判断一个脑图节点是否是另外一个脑图的子孙节点
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @param {data.Record} ancestorNode 祖先节点
 * 
 * @param {data.Record} descendantNode 子孙节点
 * 
 * @return {boolean} 如果节点为叶子节点则返回 true , 否则 false
 * 
 */

 let baseNode = descendantNode,
     parentNode;

while(parentNode = getParentNode(baseNode)){

    if(parentNode === ancestorNode){

        return true ;
    }

    baseNode = parentNode ;
}

return false ;