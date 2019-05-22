
/**
 * 
 * 遍历所有记录
 * 
 * @param {function} fn
 * 
 * @param {mixed} scope
 * 
 */

 let {
    records
 } = this ;

 for(let record of records){

    fn.call(scope , record) ;
 }