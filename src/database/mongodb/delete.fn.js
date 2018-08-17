
/**
 * 
 * 删除集合中的一条或者多个数据
 * 
 * @async
 * 
 * @param {object} config 查询配置
 * 
 * @param {string} config.collection 查询数据集合
 * 
 * @param {string} [config.database='default'] 数据库名称
 * 
 * @param {boolean} [config.single=true] 是否只更新一条
 * 
 * @param {object} [config.query] 用于删除的查询
 * 
 * @param {boolean} [config.returned = false] 是否返回删除后的数据
 * 
 * @return {object|array} 删除后的数据
 * 
 */

async function main({
    collection,
    database,
    single,
    query,
    returned
}){

    let {
        databases
    } = mongodb,
    target = databases.get(database).db.collection(collection),
    result;

    if(returned && !single){

        result = await target.find(query).toArray() ; 
    }

    if(!returned){

        await target[single ? 'deleteOne' : 'deleteMany'](query) ;
    
    }else if(single){

        return (await target.findOneAndDelete(query)).value ;
    
    }else{

        return result ;
    }
}
