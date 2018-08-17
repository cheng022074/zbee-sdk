
/**
 * 
 * 获得 MongoDB 数据库所有的集合名称
 * 
 * @async
 * 
 * @param {DB} db 数据库连接对象
 * 
 * @return {array} 数据集合名称 
 * 
 */

let records = await db.db.listCollections().toArray(),
    names = [];

for(let record of records){

    let {
        name,
        type
    } = record ;

    if(type === 'collection'){

        names.push(name) ;
    }
}

return names ;