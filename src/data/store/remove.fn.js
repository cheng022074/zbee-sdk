
/**
 * 
 * 删除记录
 * 
 * @import remove from array.remove
 * 
 * @import from from array.from
 * 
 * @param {mixed} records 数据记录
 * 
 */

 records = from(records) ;
 
 let me = this,
 {
    records:data,
    recordMap
 } = me,
 removeRecords = [];

 for(let record of records){

   let {
      id
   } = record ;

   if(recordMap.has(id)){

      recordMap.delete(id) ;
  
      remove(data , record) ;
  
      record.unbindStore() ;
  
      removeRecords.push(record) ;
   }
 }

 if(removeRecords.length){

   me.fireEvent('remove' , removeRecords) ;
 }




