
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
 ids = Object.keys(orders),
 fireNodeUnsizedNodes = [];

 for(let id of ids){

    if(nodes.has(id)){

        let node = nodes.get(id) ;

        node.order = orders[id] ;

        if(node.hidden){

            node.width = false ;

            node.height = false ;
        
        }else{

            fireNodeUnsizedNodes.push(node) ;
        }
    }
 }

 if(fireNodeUnsizedNodes.length){

    me.fireEvent('nodeunsized' , fireNodeUnsizedNodes) ;

 }