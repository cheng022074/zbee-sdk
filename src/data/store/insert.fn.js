
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
 * @param {boolean} [isFireEvent = true] 是否触发插入事件
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

    if(isFireEvent){

      me.fireEvent('insert' , index , records) ;
    }
 }

 return records ;