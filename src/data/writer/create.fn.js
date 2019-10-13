/**
 * 
 * 生成数据写出器
 * 
 * @import isRecord from is.data.record
 * 
 * @import isRecordset from is.data.recordset
 * 
 * @import is.defined
 * 
 * @param {object} model 数据模型定义
 * 
 * @param {object} plugins 插件
 * 
 * @param {function} plugins.getPropertyValue  获得数据
 *
 * @return {data.Writer} 数据写出对象 
 * 
 */

const {
    keys,
    defineProperty
 } = Object;

 function writeRecord(record , properties) {

    let result = {},
        names = keys(properties);
     
    for(let name of names){

        let value = getPropertyValue(record[value] , property[name]) ;

        if(isDefined(value)){

            result[name] = value ;
        }
    }

    return result ;
 }

 function writeRecordset(recordset , properties) {
     
    let result = [] ;

    for(let record of recordset){

        result.push(writeRecord(record , properties)) ;
    }

    return result ;
 }

 function main(model) {

    let {
        properties = []
    } = model ;
     
    return {
        write(data){
   
           if(isRecord(data)){

              return writeRecord(data , properties) ;

           }else if(isRecordset(data)){

              return writeRecordset(data , properties) ;
           }
        }
    }
 }