
/**
 * 
 * 获得数据模型字段集合
 * 
 * @import getFields from data.fields
 * 
 * @import fly from object.proxy.fly
 * 
 * @return {data.Fields} 字段集合 
 * 
 */

 let me = this ;

 return me.$fields || (me.$fields = getFields(fly(me).get('fieldsConfig'))) ;