
/**
 * 
 * 连同子孙节点纵坐标移动
 * 
 * @import move from ..move.y
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {number} distance 移动距离
 * 
 */

 let {
    hidden
 } = node ;

 if(!hidden){

    node.y -= distance ;

    let {
        expanded
    } = node ;

    if(expanded){

        let {
            children
        } = node ;

        for(let childNode of children){

            move(childNode , distance) ;
        }
    }
 }