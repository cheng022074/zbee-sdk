
/**
 * 
 * 获得数据的对应的数据类型
 * 
 * @import getDataType from database.datatype
 * 
 * @param {mixed} data 数据
 * 
 * @return {string} 数据类型名称 
 * 
 */

const {
    ObjectID,
} = require('mongodb') ;

if(data instanceof ObjectID){

    return 'oid' ;
}

return getDataType(data) ;
