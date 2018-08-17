
/**
 * 
 * MongoDB 数据备份
 * 
 * @import database from database.mongodb
 * 
 * @import collections from database.mongodb.collectionNames
 * 
 * @import find from database.mongodb.find
 * 
 * @import stringify from database.mongodb.json.stringify
 * 
 * @import write from file.write
 * 
 * @async
 * 
 * @param {string} name 数据库连接名称
 * 
 * @return {mixed} 返回说明 
 * 
 */

await database.open(name) ;

let names = await collections({
    database:name
}) ;

const {
    join
} = require('path') ;

let path = join(env['ZBEE-APPLICATION-ROOT-PATH'] , 'backup' , 'mongodb') ;

for(let name of names){

    let backupPath = join(path , `${name}.js`) ;

    write(backupPath , stringify(await find({
        collection:name,
        database:name
    }))) ;

    console.log('已备份' , backupPath) ;
}

await database.close() ;
