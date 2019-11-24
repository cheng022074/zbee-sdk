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
        convert,
        defaultValue
    } of fields){

        let value = convert(row , rows , data) ;

        if(!isDefined(value)){

            value = defaultValue ;
        }

        record[name] = value ;
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
                    mapping:config
                }
            }

            if(isObject(config)){

                result.push(getField.call(me , config)) ;
            }
        }

    }else if(isArray(fields)){

        for(let field of fields){

            if(isString(field)){

                field = {
                    mapping:field
                } ;
            }

            if(isObject(config)){

                result.push(getField.call(me , config)) ;
            }
        }
    }

    return result ;
 }

 function getField({
     type,
     mapping,
     convert,
     defaultValue,
     ...options
 }) {

    let {
        getData
    } = this ;

    if(isString(mapping)){

        if(type){

            convert = data => include(`data.convert.${type}`)(getData(data , mapping) , options)
        
        }else{

            convert = data => getData(data , mapping) ;
        }
    }

    if(!isFunction(convert)){

        convert = empty ;
    }

    return {
        convert,
        defaultValue
    } ;
 }