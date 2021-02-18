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
 * @import data from ..data scoped
 * 
 * @param {string} field 字段名称
 * 
 * @param {mixed} value 字段值
 * 
 * @param {mixed} [node] 节点
 * 
 */

 node = from(node) ;

let newValue = node[field] = clone(value),
{
    id
} = node ;

if(!equals(newValue , oldValue)){

    node = data(node) ;

    me.fireEvent(`node${field.toLowerCase()}change` , node , value , oldValue) ;

    me.fireEvent('nodechange' , node , field , value , oldValue) ;

    return true ;
}

return false ;