
/**
 * 
 * 连同子孙节点纵坐标移动
 * 
 * @import move from ..move
 * 
 * @import isObject from is.object.simple
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {string|object} property 坐标名称
 * 
 * @param {number} [value] 移动距离
 * 
 */

let {
    hidden
 } = node ;

 if(!hidden){

    if(isObject(property)){

        let {
            x,
            y
        } = property,
        oldX = node.x,
        oldY = node.y;

        node.x = x ;

        node.y = y ;

        property = {
            x:x - oldX,
            y:y - oldY
        } ;

    }else{

        let oldValue = node[property] ;

        node[property] = value ;

        value -= oldValue ;
    }

    let {
        expanded
    } = node ;

    if(expanded){

        let {
            children
        } = node ;

        for(let childNode of children){

            move(childNode , property , value) ;
        }
    }
 }