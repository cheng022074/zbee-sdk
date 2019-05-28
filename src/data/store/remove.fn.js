
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
 * @param {boolean} [isFireEvent = true] 是否触发删除事件
 * 
 */

 let me = this,
 {
    recordset
 } = me;

 records = recordset.remove(records) ;

 if(records.length && isFireEvent){

   me.fireEvent('remove' , records) ;
 }

 return records ;




