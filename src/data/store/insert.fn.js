
/**
 * 
 * 插入记录
 * 
 * @import getRecords from .private.records scoped
 * 
 * @import insert from array.insert
 * 
 * @import update from .private.records.update scoped
 * 
 * @import bind from .private.records.bind scoped
 * 
 * @import is.empty
 * 
 * @param {number} index 插入位置
 * 
 * @param {mixed} insertRecords 数据记录
 * 
 * @param {boolean} [isFireInsertEvent = true] 是否触发插入事件
 * 
 */

 
 let {
    notExists:notExistsRecords,
    exists:existsRecords
 } = getRecords(insertRecords),
 me = this,
 {
    records
 } = me;

 if(!isEmpty(notExistsRecords)){

   bind(notExistsRecords) ;

   insert(records , index , ...notExistsRecords) ;

   if(isFireInsertEvent){

      me.fireEvent('insert' , index , notExistsRecords) ;
   }
 }

 update(existsRecords) ;

 return notExistsRecords ;