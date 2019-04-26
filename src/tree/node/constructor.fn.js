
/**
 * 
 * 构建一个树型节点
 * 
 * @import createRelationship from data.node.relationship
 * 
 * @import createView from data.node.view
 * 
 * 
 * @import generate from id.generate
 * 
 * @param {object} config 节点配置
 * 
 */

 let me = this ;

 Object.assign(me , config) ;

 me.expanded = me.expanded || true ;

 me.id = generate('tree-node-') ;

 me.$children = [] ;

 createRelationship(me , {
    childNodesField:'children'
 }) ;

 createView(me , {
   childNodesField:'children'
 }) ;