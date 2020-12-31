
/**
 * 
 * 获取脑图节点之间的间隔值
 * 
 * @import is.number
 * 
 * @import is.function
 * 
 * @import {string} direction 相对于脑图节点间隔所在的方向
 * 
 * @param {object} node 脑图节点数据
 * 
 * @param {number} index 脑图节点在父节点的子节点集合中的位置
 * 
 * @import {number} length 脑图节点所在的父节点的子节点集合总数
 * 
 * @return {number} 返回脑图节点之间的间隔值 
 * 
 */

 let {
    nodeVerticalSeparationDistance,
    nodeSeparationDistance
 } = this ;

 if(isFunction(nodeSeparationDistance)){

    return nodeSeparationDistance(node , index , length) ;
 }

 switch(direction){

    case 'top':
    case 'bottom':

        if(index === 0 || index === length - 1){

            return 0 ;
        }

        return nodeVerticalSeparationDistance ;
 }

 return 0 ;