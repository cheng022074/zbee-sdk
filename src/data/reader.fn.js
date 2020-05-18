/**
 * 
 * 数据读取器
 * 
 * @import getFields from .reader.fields
 * 
 * @import getRecord from .reader.record
 * 
 * @import getRaws from .reader.raws
 * 
 * @import createRecordset from .recordset
 * 
 * @class
 * 
 */

 class main {

    constructor(fields = []){

        let me = this ;

        me.fields = getFields.call(me , fields) ;
    }

    read(data , root = '.'){

        let me = this,
            raws = getRaws.call(me , data , root),
            records = [],
            count = 0;

        for(let raw of raws){

            records.push(getRecord.call(me , raw , raws , count ++ , data)) ;
        }

        return createRecordset(me , records) ;
    }
 }