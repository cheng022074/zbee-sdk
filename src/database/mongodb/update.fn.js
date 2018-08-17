
/**
 * 
 * 更新集合中一条或者多个数据
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
 * @param {object} [config.query] 用于修改的查询
 * 
 * @param {object|array} [config.data] 需要修改的数据
 * 
 * @param {boolean} [config.returned = false] 是否返回修改后的数据
 * 
 * @return {mixed} 修改后的数据，由 returned 配置决定
 * 
 */


async function main({
    collection,
    database,
    data,
    single,
    query,
    returned
}){

    let {
        databases
    } = mongodb,
    target = databases.get(database).db.collection(collection);

    data = process_data(data) ;

    if(!returned){

        await target[single ? 'updateOne' : 'updateMany'](query , data) ;
    
    }else{

        if(single){

            return (await target.findOneAndUpdate(query , data)).value ;
        
        }else{

            return await target.find(query).toArray() ; 
        }
    }
}

const keywordRe = /^\$/ ;

function process_data(data){

    let keys = Object.keys(data) ;

    for(let key of keys){

        if(keywordRe.test(key)){

            return data ;
        }
    }

    return {
        $set:data
    } ;
}