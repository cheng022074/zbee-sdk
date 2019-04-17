
/**
 * 
 * 移除树型节点
 *
 * @param {tree.Node} node 节点配置
 * 
 */

 let me = this,
 {
    nodes,
    proxy
 } = me,
 index = me.indexOf(node);

 remove(nodes , node) ;

 proxy.call('remove' , index) ;