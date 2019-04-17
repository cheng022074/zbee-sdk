
/**
 * 
 * 创建树型节点
 * 
 * @import onAppend from .node.onAppend scoped
 * 
 * @import onRemove from .node.onRemove scoped
 * 
 * @import onDestroy from .node.onDestroy scoped
 * 
 * @param {object} config 节点配置
 * 
 */

let {
    Node
} = this,
node = new Node(config);

node.addListener('append' , onAppend) ;

node.addListener('remove' , onRemove) ;

node.addListener('destroy' , onDestroy) ;

return node;