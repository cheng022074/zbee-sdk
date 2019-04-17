
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
 * @return {tree.node}  
 * 
 */

 let me = this,
 {
    Node
 } = me ;

 let node = new Node(config) ;

 me.emit('create' , node.data) ;

 return node ;