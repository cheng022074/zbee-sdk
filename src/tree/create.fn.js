
/**
 * 
 * 创建树型节点
 * 
 * @import onAppend from ..onAppend scoped
 * 
 * @import onRemove from ..onRemove scoped
 * 
 * @param {object} config 节点配置
 * 
 * @return {tree.Node}  
 * 
 */

 let me = this,
 {
    Node,
    nodes
 } = me ;

 let node = new Node(config) ;

 me.nodes.push(node) ;

 return node ;