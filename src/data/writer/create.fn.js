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
 * @param {object} plugins 插件
 * 
 * @param {function} plugins.writeRecord  输出数据
 *
 * @return {data.Writer} 数据写出对象 
 * 
 */

 function writeRecordset(writeRecord , recordset , properties) {
     
    let result = [] ;

    for(let record of recordset){

        result.push(writeRecord(record , properties)) ;
    }

    return result ;
 }

 function main({
   writeRecord
 }) {

    return {
        write(data){

           if(isRecord(data)){

              return writeRecord(data , get_properties(data)) ;

           }else if(isRecordset(data)){

              return writeRecordset(writeRecord , data , get_properties(data)) ;
           }
        }
    }
 }

 function get_properties(structure){

      let {
         properties = []
      } = structure.__ZBEE_DATA_MODEL__ ;

      return properties ;
 }