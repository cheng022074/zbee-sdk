/**
 * 
 * 将数据同步至磁盘存储
 * 
 * @import getSyncFilePath from database.memory.collection.syncFilePath
 * 
 * @import format from json.format
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

const {
    write
} = require('fs') ;

let locked = false,
    isNext = false;

function main(name , path , data){

    if(!locked){

        locked = true ;

        write(getSyncFilePath(name , path) , data , () =>{

            locked = false ;

            if(isNext){

                isNext = false ;

                main(name , path , data) ;
            }

        }) ;
    
    }else{

        isNext = true ;
    }
}