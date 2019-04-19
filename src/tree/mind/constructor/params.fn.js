
/**
 * 
 * 附加脑图节点类型实现
 * 
 * @import getNode from tree.node.mind
 * 
 * @param {array} args 脑图配置
 * 
 * @return {array} 参数 
 * 
 */

 let [
     target,
     config
 ] = args,
 {
    fields = []
 } = config;

 config.fields = [
    'id',
    'x',
    'y',
    'width',
    'height',
    'selected',
    ...fields
 ] ;

 config.Node = getNode() ;

 return [
     target,
     config
 ] ;