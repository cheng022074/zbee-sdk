
/**
 * 
 * 处理准备增加进当前数据存储器的数据记录
 * 
 * @import from from array.from
 * 
 * @import isModel from is.data.model
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} records 数据记录
 * 
 * 
 */

 records = from(records) ;

 let me = this,
 {
   innerReader,
   recordMap
 } = me,
 result = [];

 for(let record of records){

    if(isModel(record) && record.isBindStore && record.store === me){

         me.remove(record) ;

    }else if(isObject(record)){

         record = innerReader(record)[0] ;
    
    }else{

         continue ;
    }

    record.bindStore(me) ;

    recordMap.set(record.id , record) ;

    result.push(record) ;
 }

 return result ;