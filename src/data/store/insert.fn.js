
/**
 * 
 * 插入记录
 * 
 * @import from from array.from
 * 
 * @import insert from array.insert
 * 
 * @param {number} index 插入位置
 * 
 * @param {mixed} records 数据记录
 * 
 */

 let me = this,
 {
   records:data,
   recordMap
 } = me ;

 records = from(records) ;

 let insertRecords = [] ;

 for(let record of records){

   let {
      id,
      store
   } = record ;

   if(recordMap.has(id)){

      continue ;
   }

   if(store){

      store.remove(record) ;
   }

   record.bindStore(store) ;

   recordMap.set(id , record) ;

   insert(data , index , record) ;

   insertRecords.push(record) ;
 }

 me.fireEvent('insert' , index , insertRecords) ;