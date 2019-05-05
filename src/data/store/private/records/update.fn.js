
/**
 * 
 * 更新数据记录
 * 
 * @param {array} updateRecords 数据记录集合
 * 
 * 
 */

 let me = this ;

 for(let {
     id,
     data
 } of updateRecords){

    me.getById(id).set(data) ;
 }