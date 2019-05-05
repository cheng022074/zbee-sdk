
/**
 * 
 * 处理数据记录
 * 
 * @import from from array.from
 * 
 * @import isModel from is.data.model
 * 
 * @param {mixed} records 数据记录
 * 
 * @return {array} 经过处理后的可添加的数据记录
 * 
 */

 let me = this,
 {
    model:Model
 } = me ;
 
 records = from(records).map(record =>{

    if(!isModel(record)){

       return new Model(record) ;
    }

    return record ;

 }) ;

 let exists = [],
     notExists = [];

 for(let record of records){

    if(me.indexOfId(record.id) !== -1){

        exists.push(record) ;
    
    }else{

        notExists.push(record) ;
    }
 }

 return {
    exists,
    notExists
 } ;

