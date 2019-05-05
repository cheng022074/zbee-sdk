
/**
 * 
 * 绑定数据记录
 * 
 * @param {array} records 数据记录
 * 
 */

let me = this,
{
    recordMap
} = me ;

for(let record of records){

    recordMap.set(record.id , record) ;

    record.bindStore(me) ;
}