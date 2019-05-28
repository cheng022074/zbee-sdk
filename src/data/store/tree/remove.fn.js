
/**
 * 
 * 去除节点
 * 
 * @import from from array.from
 * 
 * @param {mixed} nodes 节点数据
 * 
 */

nodes = from(nodes) ;

let me = this,
    {
        recordset
    } = me,
    removeNodes = [] ;

for(let node of nodes){

    let {
        descendantNodes
    } = node ;

    removeNodes.push(...recordset.remove([
        node,
        ...descendantNodes
    ])) ;
}

me.fireEvent('remove' , removeNodes) ;