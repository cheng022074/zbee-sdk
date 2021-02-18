
/**
 * 
 * 将指定节点的子节点进行排序，如果排序信息有变化则抛出事件
 * 
 * @import data from ..data scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @return {array} 排序信息
 * 
 */

 let {
    children
 } = node,
 prevOrder = - Number.MAX_VALUE;

 for(let node of children){

    let {
        order
    } = node ;

    if(order <= prevOrder){

        let {
            length
        } = children,
        orderNodes = [];

        for(let i = 0 ; i < length ; i ++){

            let node = children[i] ;

            if(node.order !== i){

                node.order = i ;

                orderNodes.push(data(node)) ;
            }
        }

        return orderNodes ;
    }

    prevOrder = order ;
 }

 return [] ;

