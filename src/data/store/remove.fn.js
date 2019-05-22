
/**
 * 
 * 删除记录
 * 
 * @import remove from array.remove
 * 
 * @param {data.Model} record 数据记录
 * 
 */

 let me = this,
 {
    records,
    recordMap
 } = me,
 {
     id
 } = record;

 if(recordMap.has(id)){

    recordMap.delete(id) ;

    remove(records , record) ;

    me.fireEvent('remove' , record) ;
 } 


