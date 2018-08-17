
/**
 * 
 * 获取 MongoDB 数据表只有一个字段数组
 * 
 * @import find from database.mongo.find
 * 
 * @import is.array
 * 
 * @import isObject from is.object.simple
 * 
 * @async
 * 
 * @param {object} config 查询配置
 * 
 * @param {string} config.collection 查询数据库
 * 
 * @param {string} [config.database='default'] 数据库名称
 * 
 * @param {boolean} [config.single=true] 是否只选择出一条
 * 
 * @param {string} config.field 选择数据项
 * 
 * @return {mixed} 返回说明 
 * 
 */

let result = await find({
    collection,
    database,
    single,
    fields:{
        [field]:1
    }
}) ;

if(isArray(result)){

    let data = [] ;

    for(let record of result){

        data.push(record[field]) ;
    }

    return data ;
}

if(isObject(result)){

    return result[field] ;
}