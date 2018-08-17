
/**
 * 
 * 实现针对一张表的批量操作
 * 
 * @import mongodb from database.mongo
 * 
 * @async
 * 
 * @param {object} config 操作配置
 * 
 * @param {array} [config.inserts] 插入批量设置
 * 
 * @param {string} [config.database='default'] 数据库名称
 * 
 * @param {string} config.collection 操作的数据集合
 * 
 * @param {array} [config.updates] 更新批量设置
 * 
 * @param {array} [config.deletes] 删除批量设置
 * 
 * @return {mixed} 返回说明 
 * 
 */

let operations = [] ;

if(inserts){

    for(let document of inserts){

        operations.push({
            insertOne:{
                document
            }
        }) ;
    }
}

if(updates){

    for(let {
        query:filter,
        data:update,
        single
    } of updates){

        operations.push({
            [single === false ? 'updateMany' : 'updateOne']:{
                filter,
                update
            }
        }) ;
    }
}

if(deletes){

    for(let {
        query:filter,
        single
    } of deletes){

        operations.push({
            [single === false ? 'deleteMany' : 'deleteOne']:{
                filter
            }
        }) ;
    }
}

let {
    databases
} = mongodb,
target = databases.get(database).db.collection(collection) ;

await target.bulkWrite(operations) ;

