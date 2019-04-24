
/**
 * 
 * 构建一个树型节点
 * 
 * @import createRelationship from data.node.relationship
 * 
 * 
 * @import generate from id.generate
 * 
 * @param {object} config 节点配置
 * 
 */

 let me = this ;

 Object.assign(me , config) ;

 me.id = generate('tree-node-') ;

 me.$children = [] ;

 createRelationship(me , {
    childNodesField:'children'
 }) ;