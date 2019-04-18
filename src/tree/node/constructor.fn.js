
/**
 * 
 * 构建一个树型节点
 * 
 * @import generate from id.generate
 * 
 * @param {object} config 节点配置
 * 
 */

 let me = this ;

 Object.assign(me , config) ;

 me.id = me.id || generate('tree-node-') ;

 me.$children = [] ;