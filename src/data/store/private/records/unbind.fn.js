
/**
 * 
 * 解绑数据记录
 * 
 * @param {array} records 数据记录
 * 
 */

let me = this,
{
    recordMap
} = me ;

for(let record of records){

    recordMap.delete(record.id) ;

    record.unbindStore(me) ;
}