
/**
 * 
 * 创建新节点
 * 
 * @import generate from id.generate
 * 
 * @param {mixed} node 节点信息
 * 
 * @param {data.Record} parentNode 父节点
 * 
 * @return {data.Record} 创建出来的新节点 
 * 
 */

 let {
    reader
 } = this ;

 node = reader.create({
    ...node,
    id:generate('node-'),
    children:[],
    parentNodeId:parentNode.id,
    selected:true
}) ;

node.hidden = false ;

return node ;





