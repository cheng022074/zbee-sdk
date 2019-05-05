
/**
 * 
 * 插入记录
 * 
 * @import getRecords from .private.records scoped
 * 
 * @import insert from array.insert
 * 
 * @param {number} index 插入位置
 * 
 * @param {mixed} insertRecords 数据记录
 * 
 * @param {boolean} [isFireInsertEvent = true] 是否触发插入事件
 * 
 */

 
 let {
    notExists:notExistsRecords
 } = getRecords(insertRecords),
 me = this,
 {
    records,
    recordMap
 } = me;

 insert(records , index , ...notExistsRecords) ;

 notExistsRecords.forEach(record => recordMap.set(record.id , record)) ;

 if(isFireInsertEvent){

    me.fireEvent('insert' , index , notExistsRecords) ;
 }

 return notExistsRecords ;