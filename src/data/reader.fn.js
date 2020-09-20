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
 * @import createData from .reader.data
 * 
 * @import getNames from .reader.names
 * 
 * @class
 * 
 */

 class main {

    constructor(fields = [] , addFields){

        let me = this ;

        fields = getFields.call(me , fields) ;

        me.addFields = addFields ;

        let {
            names,
            cacheNames
        } = getNames(fields) ;

        me.names = names ;

        me.cacheNames = cacheNames ;

        me.fields = fields ;
    }

    data(record){

        return createData.call(this , record) ;
    }

    create(data){

        let me = this,
        {
            addFields
        } = me ;

        return getRecord.call(me , undefined , data , undefined , undefined , undefined , addFields) ;
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