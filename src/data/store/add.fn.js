/**
 * 
 * 插入记录
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

 records = recordset.add(records) ;

 if(records.length){

    if(isFireEvent){

      me.fireEvent('add' , records) ;
    }
 }

 return records ;