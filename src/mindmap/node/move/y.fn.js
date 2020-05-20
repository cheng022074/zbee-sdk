
/**
 * 
 * 连同子孙节点纵坐标移动
 * 
 * @import move from ..y
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {number} distance 移动距离
 * 
 */

 if(!node.hidden){

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