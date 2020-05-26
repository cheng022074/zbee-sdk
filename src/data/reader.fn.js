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
 * @import isObject from is.object.simple
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

        let config = {
            root:'.',
            isRecordset:true
        } ;

        if(isObject(root)){

            Object.assign(config , root) ;
        
        }else{

            config.root = root ;
        }

        root = config.root ;

        let {
            isRecordset
        } = config,
        me = this,
            raws = getRaws.call(me , data , root),
            records = [],
            count = 0;

        for(let raw of raws){

            records.push(getRecord.call(me , raw , raws , count ++ , data)) ;
        }

        if(isRecordset){

            return createRecordset(me , records) ;
        }

        return records ;
    }
 }