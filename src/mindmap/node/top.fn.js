
/**
 * 
 * 获得脑图节点顶部值
 * 
 * @import getNodeSeparationDistance from .distance.separation scoped
 * 
 * @import data from .data scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import isRootNode from .is.root scoped
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {boolean} [isBodySize = true] 是否仅计算节点本身尺寸，默认为 true
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let {
    y,
    hidden
 } = node ;

 if(!hidden){

    if(isBodySize){

        return y ;
    }

    let parentNode = getParentNode(node) ;

    if(parentNode){

      let {
         children
      } = parentNode ;
   
      return y - getNodeSeparationDistance('top' , data(node) , children.indexOf(node) , children.length) ;
    }

    return y - getNodeSeparationDistance('top' , data(node) , 0 , 1) ;
 }

 return NaN ;