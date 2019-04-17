
/**
 * 
 * 构建一个树型节点
 * 
 * @import generate from id.generate
 * 
 * @param {object} config 节点配置
 * 
 * @param {string} [config.id] 节点编号
 * 
 * @param {Tree} [config.tree] 树型结构引用
 * 
 */

 let me = this ;

 me.id = id || generate('tree-node-') ;

 me.$children = [] ;

 me.tree = tree ;