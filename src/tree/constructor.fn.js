
/**
 * 
 * 初始化树
 * 
 * @import createRead from tree.reader.json
 * 
 * @import getNodeClass from tree.node
 * 
 * @import getProxy from object.proxy
 * 
 * @import getFields from data.reader.fields
 * 
 * @param {mixed} target 树所绑定的对象
 * 
 * @param {object} [config = {}] 配置
 * 
 * @param {object} [config.reader = {}] 读取器配置
 * 
 * @param {class} [config.Node] 节点类型 
 * 
 * @param {object} [config.defaultNodeConfig = {}] 默认的节点配置
 * 
 * @param {object} [config.layoutConfig = {}] 树型图的布局信息
 * 
 * @param {array} [config.fields] 可以显示的节点字段
 * 
 */

 let me = this;
 
 Node = me.Node = Node || getNodeClass() ;

 me.proxy = getProxy(target) ;

 fields = getFields(fields || [
    'id'
 ]) ;

 me.layoutConfig = layoutConfig ;

 me.read = createRead(Object.assign({
   fields,
   create(config){

      return new Node(config) ;

   }
 } , reader , {
    childrenField:'children',
    createExtraParams:Object.assign({
       tree:me
    } , defaultNodeConfig)
 })) ;

 let fieldNames = me.fields = [] ;

 for(let {
    name
 } of fields){

   fieldNames.push(name) ;
 }

 me.loading = false ;