/**
 * 
 * 设置或获取节点值
 * 
 * @import equals from data.equals
 * 
 * @import clone from data.clone
 * 
 * @import from from ..from scoped
 * 
 * @param {string} field 字段名称
 * 
 * @param {mixed} value 字段值
 * 
 * @param {mixed} [node] 节点
 * 
 */

 node = from(node) ;

 if(node){

    let oldValue = node[field],
        newValue = node[field] = clone(value);

    return equals(newValue , oldValue) ;
 }

return false ;