
/**
 * 
 * 添加数据
 * 
 * @import getRecords from .private.records scoped
 * 
 * @import update from .private.records.update scoped
 * 
 * @param {mixed} addRecords 数据记录
 * 
 * @param {boolean} [isFireAddEvent = true] 是否触发添加事件
 * 
 */

 let {
    notExists:notExistsRecords,
    exists:existsRecords
 } = getRecords(addRecords),
 me = this,
 {
    records,
    recordMap
 } = me;

 records.push(...notExistsRecords) ;

 notExistsRecords.forEach(record => recordMap.set(record.id , record)) ;

 if(isFireAddEvent){

    me.fireEvent('add' , notExistsRecords) ;
 }

 update(existsRecords) ;

 return notExistsRecords ;