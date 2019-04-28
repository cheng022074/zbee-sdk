
/**
 * 
 * 构建一个可视化节点
 * 
 * @import getProxy from object.proxy
 * 
 * @param {mixed} node 数据节点
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {string} [config.expandedField = 'expanded'] 展开收起控制字段
 * 
 * @param {string} [config.viewField = 'view'] 描述节点关系字段名称
 * 
 */

 let me = this,
     proxy = me.proxy = getProxy(node) ;

 me.expandedField = expandedField ;

 if(proxy.get(expandedField) === true){

    me.expand() ;
 }else{

    me.collapse() ;
 }

 node[viewField] = me ;