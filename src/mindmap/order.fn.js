
/**
 * 
 * 将指定节点的子节点进行排序，如果排序信息有变化则抛出事件
 * 
 * @import data from .data scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {data.Record} unorderNode 未排序节点
 * 
 */

 let {
    children
 } = node,
 prevOrder = - Infinity;

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

        this.fireEvent('nodeorderupdated' , orderNodes) ;

        return true ;
    }

    prevOrder = order ;
 }

 return false ;

