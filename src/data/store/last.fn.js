
/**
 * 
 * 返回最后一条数据记录
 * 
 * @return {data.Record} 数据记录或者没有 
 * 
 */

 let {
    records
 } = this ;

 if(records.length){

    return records[records.length - 1] ;
 }