/**
 * 
 * 数据读取器
 * 
 * @import is.defined
 * 
 * @import is.array
 * 
 * @import isObject from is.object.simple
 * 
 * @import from from array.from
 * 
 * @import is.string
 * 
 * @import empty from function.empty value
 * 
 * @import is.function
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
            rows = getRows.call(me , data),
            records = [];

        for(let row of rows){

            records.push(getRecord.call(me , row , rows , data)) ;
        }

        return records ;
    }
 }

 function getRows(data){

    let {
        rootProperty,
        getData
    } = this ;

    return from(getData(data , rootProperty)) ;
 }

 function getRecord(row , rows , data){

    let {
        fields
    } = this,
    record = {};

    for(let {
        name,
        convert
    } of fields){

        record[name] = convert(row , rows , data) ;
    }

    return record ;
 }

 function getFields(fields) {

    let result = [],
        me = this;
     
    if(isObject(fields)){

        let names = Object.keys(fields) ;

        for(let name of names){

            let config = fields[name] ;

            if(isString(config)){

                config = {
                    name,
                    mapping:config
                }
            }

            if(isObject(config)){

                result.push(getField.call(me , {
                    ...config,
                    name
                })) ;
            }
        }

    }else if(isArray(fields)){

        for(let field of fields){

            if(isString(field)){

                field = {
                    name:field,
                    mapping:field
                } ;
            }

            if(isObject(field)){

                result.push(getField.call(me , field)) ;
            }
        }
    }

    return result ;
 }

 function getField({
     name,
     type,
     mapping,
     convert,
     defaultValue,
     ...options
 }) {

    let {
        getData
    } = this ;

    return {
        name,
        convert(data , ...args){

            if(isFunction(convert)){

                data = convert(data , ...args) ;
            
            }else{

                if(isString(mapping)){

                    data = getData(data , mapping) ;
                
                }else{
    
                    data = getData(data , name) ;
                }
    
                if(isString(type)){
    
                    data = include(`data.convert.${type}`)(data , options) ;
                }
    
            }

            return isDefined(data) ? data : defaultValue ;
        }
    } ;
 }