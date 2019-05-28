
/**
 * 
 * 插入节点
 * 
 * @param {number} index 插入位置
 * 
 * @param {mixed} nodes 节点数据
 * 
 * 
 */

let me = this,
{
    recordset
} = me,
insertNodes = [];

nodes = recordset.add(nodes) ;

for(let node of nodes){

    insertNodes.push(node) ;

    insertNodes.push(...node.descendantNodes) ;
}

recordset.insert(index , insertNodes) ;

me.fireEvent('insert' , insertNodes) ;