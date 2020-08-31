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
 * @import isObject from is.object.simple
 * 
 * @class
 * 
 */

 class main {

    constructor(fields = [] , addFields){

        let me = this ;

        me.fields = getFields.call(me , fields) ;

        me.addFields = addFields ;
    }

    redefine(record){

        return getRecord.call(this , record , null , null , null , null , this.addFields) ;
    }

    create(data){

        return getRecord.call(this , null , data) ;
    }

    read(data , root = '.'){

        let config = {
            root:'.',
            multi:true
        } ;

        if(isObject(root)){

            Object.assign(config , root) ;
        
        }else{

            config.root = root ;
        }

        root = config.root ;

        let {
            multi
        } = config,
        me = this,
        {
            addFields
        } = me,
        raws = getRaws.call(me , data , root),
        records = [],
        count = 0;

        if(multi === false && raws.length){

            return getRecord.call(me , null , raws[0] , raws , count , data , addFields) ;
        }

        for(let raw of raws){

            records.push(getRecord.call(me , null , raw , raws , count ++ , data , addFields)) ;
        }

        return records ;
    }
 }