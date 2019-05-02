
/**
 * 
 * 销毁数据存储器
 * 
 */

 let me = this,
 {
   records,
   recordMap
 } = me ;

 for(let record of records){

   record.destroy() ;

   delete recordMap[record.id] ;
 }

 records.length = 0 ;