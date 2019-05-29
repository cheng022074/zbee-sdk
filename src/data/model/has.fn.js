
/**
 * 
 * 判断是否拥有此字段
 * 
 * @param {string} name 字段名称
 * 
 * @return {boolean} 如果拥有指定字段则返回 true , 否则返回 false
 * 
 */

let {
    fields
} = this.ZBEE_CURRENT_CLASS ;

return fields.hasField(name) ;