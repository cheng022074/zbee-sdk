/**
 * 
 * 写出存储数据
 * 
 * @import createWriter from ....create
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import isEmpty from is.data.record.empty
 * 
 * @return {data.Writer} 数据写出对象 
 * 
 */

function writeRecord(record){

    if(!isEmpty(record)){

        return {
            __ZBEE_DATA_INNER__:record.__ZBEE_DATA_INNER__
        } ;
    }
 }

 function main(){

    return createWriter({
        writeRecord
    }) ;
 }