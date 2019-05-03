
/**
 * 
 * 处理添加的数据记录
 * 
 * @import from from array.from
 * 
 * @import Model from data.model value
 * 
 * @param {mixed} insertRecords 数据记录
 * 
 * @return {array} 经过处理后的可添加的数据记录
 * 
 */

 insertRecords = from(insertRecords) ;

 let {
    records,
    recordMap
 } = this,
 insertedRecords = [];

 for(let record of insertRecords){

    if(record instanceof Model){

        let {
            id
        } = record ;

        if(!recordMap.has(id)){

            records.push(record) ;

            recordMap.set(id , record) ;

            insertedRecords.push(record) ;
        }
    }
 }

 return insertedRecords ;