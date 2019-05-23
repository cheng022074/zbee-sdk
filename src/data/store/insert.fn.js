
/**
 * 
 * 插入记录
 * 
 * @import getRecords from ..records scoped
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

 records = getRecords(records) ;

 if(records.length){

    insert(data , index , ...records) ;

    me.fireEvent('insert' , index , records) ;
 }