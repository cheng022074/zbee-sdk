
/**
 * 
 * 插入一条数据
 * 
 * @import sync from database.memory.collection.sync
 * 
 * @param {object} doc 插入的数据
 * 
 * @async
 * 
 */

let {
    data,
    name,
    path
} = this ;

data.push(doc) ;

sync(name , path , data) ;
