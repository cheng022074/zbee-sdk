
/**
 * 
 * 插入记录
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
   recordset
 } = me ;

 records = recordset.insert(index , records) ;

 if(records.length){

    if(isFireEvent){

      me.fireEvent('insert' , index , records) ;
    }
 }

 return records ;