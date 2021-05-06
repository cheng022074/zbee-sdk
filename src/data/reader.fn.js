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
 * @import is.defined
 * 
 * @class
 * 
 */

 class main {

    constructor(fields = []){

        let me = this ;

        fields = getFields.call(me , fields) ;

        let names = getNames(fields) ;

        me.names = names ;

        me.fields = fields ;
    }

    data(record , options){

        return createData.call(this , record , options) ;
    }


    create(data){

        return getRecord.call(this , undefined , data) ;
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
        raws = getRaws.call(me , data , root),
        records = [],
        count = 0;

        if(multi === false && raws.length){

            return getRecord.call(me , null , raws[0] , raws , count , data ) ;
        }

        for(let raw of raws){

            records.push(getRecord.call(me , null , raw , raws , count ++ , data)) ;
        }

        return records ;
    }
 }