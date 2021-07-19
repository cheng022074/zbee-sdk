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
 * @import setValue from ..api.value.set scoped
 * 
 * @import isObject from is.object.simple
 * 
 * @import set from .set scoped
 * 
 * @param {mixed} field 字段名称
 * 
 * @param {mixed} value 字段值
 * 
 * @param {mixed} [node] 节点
 * 
 * @return {boolean} 如果节点信息修改成功则返回 true , 否则返回 false
 * 
 */

if(isObject(field)){

    let names = Object.keys(fields),
        isUpdate = false;

    for(let name of names){

        if(set(name , fields[name] , node)){

            isUpdate = true ;
        }
    }

    return isUpdate ;
}

let updatedNode = from(node),
    oldValue = updatedNode[field];

if(setValue(field , value , node)){

    let node = data(updatedNode),
        me = this ;

    me.fireEvent(`node${field.toLowerCase()}change` , updatedNode , value , oldValue) ;

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