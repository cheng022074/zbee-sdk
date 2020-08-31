
/**
 * 
 * 获取节点数据字段集合
 * 
 * @import copy from object.copy
 * 
 * @import is.array
 * 
 * @param {data.Record} node 脑图节点
 * 
 * @param {mixed} fields 脑图字段
 * 
 * @return {object} 数据字段
 * 
 */

 if(isArray(fields)){

    let result = {} ;

    copy(result , node , fields) ;

    return result ;
 }

 return {} ;

