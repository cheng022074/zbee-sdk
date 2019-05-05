
/**
 * 
 * 添加数据
 * 
 * @import getRecords from .private.records scoped
 * 
 * @import update from .private.records.update scoped
 * 
 * @import bind from .private.records.bind scoped
 * 
 * @import is.empty
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
    records
 } = me;

 if(!isEmpty(notExistsRecords)){

   bind(notExistsRecords) ;

   records.push(...notExistsRecords) ;

   if(isFireAddEvent){

      me.fireEvent('add' , notExistsRecords) ;
   }
 }

 

 update(existsRecords) ;

 return notExistsRecords ;