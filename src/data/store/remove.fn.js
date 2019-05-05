
/**
 * 
 * 删除记录
 * 
 * @import getRecords from .private.records scoped
 * 
 * @import unbind from .private.records.unbind scoped
 * 
 * @import remove from array.remove
 * 
 * @param {mixed} removeRecords 数据记录
 * 
 * @param {boolean} [isFireRemoveEvent = true] 是否触发删除事件
 * 
 */

let {
    exists:existsRecords
 } = getRecords(removeRecords),
 me = this,
 {
     records
 } = me;

 unbind(existsRecords) ;

 remove(records , ...existsRecords) ;

 if(isFireRemoveEvent){

    me.fireEvent('remove' , existsRecords) ;
 }

 return existsRecords ;