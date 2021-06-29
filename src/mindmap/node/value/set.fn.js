/**
 * 
 * 设置或获取节点值
 * 
 * @import fireChangeEvent from mindmap.fire.event.change scoped
 * 
 * @import from from ..from scoped
 * 
 * @import data from ..data scoped
 * 
 * @import setValue from ..sync.value.set scoped
 * 
 * @param {string} field 字段名称
 * 
 * @param {mixed} value 字段值
 * 
 * @param {mixed} [node] 节点
 * 
 */

if(setValue(field , value , node)){

    node = data(from(node)) ;

    let me = this ;

    me.fireEvent(`node${field.toLowerCase()}change` , node , value , oldValue) ;

    fireChangeEvent({
        operation:'update',
        node,
        field,
        value,
        oldValue
    }) ;

    return true ;
}

return false ;