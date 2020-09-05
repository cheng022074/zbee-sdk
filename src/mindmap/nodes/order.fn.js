
/**
 * 
 * 修改一组节点的排序序号
 * 
 * @param {object} orders 排序序号集合
 * 
 */

 let me = this,
 {
     nodes
 } = me,
 ids = Object.keys(orders);

 for(let id of ids){

    if(nodes.has(id)){

        let node = nodes.get(id) ;

        node.order = orders[id] ;
    }
 }