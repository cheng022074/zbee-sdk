
/**
 * 
 * 向集合中插入一条或者多个数据
 * 
 * @import mongodb from database.mongo
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import getCount from database.mongo.count
 * 
 * @param {object} config 查询配置
 * 
 * @param {string} config.collection 查询数据集合
 * 
 * @param {string} [config.database='default'] 数据库名称
 * 
 * @param {object|array} [config.data] 需要插入的数据
 * 
 * @return {object|array} 插入后的数据
 * 
 * @scoped
 * 
 * @async
 * 
 */

async function main({
    collection,
    database,
    data
}){

    let {
        databases
    } = mongodb,
    target = databases.get(database).db.collection(collection),
    ids = get_ids(data);

    if(ids.length){

        let count = await getCount({
            collection,
            database,
            query:{
                _id:{
                    $in:ids
                }
            }
        }) ;

        if(count !== 0){

            return [] ;
        }
    }

    if(isArray(data)){

        return process_single_result(await target.insertMany(data) , data) ;

    }else if(isObject(data)){

        return process_multi_result(await target.insertOne(data) , data) ;
    }

    return [] ;
}

function get_ids(data){

    if(isArray(data)){

        let ids = [] ;

        for(let record of data){

            if(record.hasOwnProperty('_id')){

                ids.push(record._id) ;
            }
        }

        return ids ;

    }else if(isObject(data) && data.hasOwnProperty('_id')){

        return [
            data._id
        ] ;
    }

    return [] ;
}

const {
    assign
} = Object ;

function process_single_result({
    insertedId
} , record){

    return assign({
        _id:insertedId
    } , record) ;
}

function process_multi_result({
    insertedIds
} , records){

    let result = [],
        len = records.length;

    for(let i = 0 ; i < len ; i ++){

        result.push(assign({
            _id:insertedIds[i]
        } , records[i])) ;
    }

    return result ;
}