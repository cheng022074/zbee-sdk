
/**
 * 
 * 获取节点实际的数据信息
 * 
 * @import from from .from scoped
 * 
 * @param {mixed} node 节点
 * 
 * @param {object} fields 字段信息
 * 
 * @return {object} 数据信息 
 * 
 */

return this.reader.data(node , {
    ignoreFields:[
    'children'
    ],
    fields
}) ;