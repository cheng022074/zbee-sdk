
/**
 * 
 * 获取属性
 * 
 * @param {mixed} name 属性名称
 * 
 * @return {mixed} 返回说明 
 * 
 */

let me = this,
{
    data,
    ZBEE_CURRENT_CLASS
} = me,
{
    fields
} = ZBEE_CURRENT_CLASS,
field = fields.getField(name);

if(field){

    return field.get.call(me , data[name]) ;
}