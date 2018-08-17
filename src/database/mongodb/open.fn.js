/**
 * 
 * 打开一个明确的用户名、用户密码、数据库的 MongoDB 数据库连接
 * 
 * @import is.defined
 * 
 * @import getMap from database.properties.databases
 * 
 * @param {Map} map 数据库集合
 * 
 * @param {string} name 数据库连接名称
 * 
 * @param {object} config 连接配置
 * 
 * @async
 * 
 * @scoped
 * 
 * 
 */

const {
    MongoClient
} = require('mongodb');

async function main(map , name , {
    host,
    port,
    database,
    user,
    password
}){

    let client = await MongoClient.connect(`mongodb://${host}:${port}/${database}` , {
        auth:{
            user,
            password
        }
    });

    map.set(name , new DB(client , client.db(database))) ;
}

class DB{

    constructor(client , db){

        let me = this ;

        me.client = client,
        me.db = db ;

    }

    close(){

        return this.client.close() ;
    }
}