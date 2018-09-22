/**
 * 
 * 将数据同步至磁盘存储
 * 
 * @import getSyncFilePath from database.memory.collection.sync.path
 * 
 * @import format from json.format
 * 
 * @param {string} writeName 写入器名称
 * 
 * @param {string} name 数据存储表名
 * 
 * @param {string} path 数据存储路径
 * 
 * @param {array} data 需要序列化的数据
 * 
 * @scoped
 * 
 */

let locked = false,
    isNext = false;

async function main(name , path , data){

    if(!locked){

        locked = true ;

        await include(writeName)(getSyncFilePath(name , path) , data) ;

        locked = false ;

        if(isNext){

            isNext = false ;

            await main(name , path , data) ;
        }
    
    }else{

        isNext = true ;
    }
}