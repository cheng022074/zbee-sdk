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
 * @class
 * 
 */

 class main {

    constructor({
        root = '.',
        fields = []
    }){

        let me = this ;

        me.rootProperty = root ;

        me.fields = getFields.call(me , fields) ;
    }

    read(data){

        let me = this,
            raws = getRaws.call(me , data),
            records = [],
            count = 0;

        for(let raw of raws){

            records.push(getRecord.call(me , raw , raws , count ++ , data)) ;
        }

        return records ;
    }
 }