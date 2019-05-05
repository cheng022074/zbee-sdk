
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
 * @param {mixed} records 数据记录
 * 
 */

let {
    exists:existsRecords
 } = getRecords(insertRecords),
 me = this,
 {
     records
 } = me;

 unbind(existsRecords) ;

 remove(records , ...existsRecords) ;

 me.fireEvent('remove' , existsRecords) ;