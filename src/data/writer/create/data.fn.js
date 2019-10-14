/**
 * 
 * 写出应用程序数据
 * 
 * @import createWriter from ....create
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import isEmpty from is.data.record.empty
 * 
 * @import is.defined
 * 
 * @return {data.Writer} 数据写出对象 
 * 
 */

 const {
    keys,
    defineProperty
 } = Object;

 function writeRecord(record , properties){

    if(isEmpty(record)){

        return {} ;
    }

    let result = {},
        names = keys(properties);
     
    for(let name of names){

        let value = record[name],
            property = properties[name];

        if(isObject(property)){
    
            let {
                private = false,
                mode,
                model
            } = property ;
    
            if(private || mode === 'writeonly'){
    
                continue ;
            }

            if(model){

                value = main(model).write(value) ;
            }
        }

        if(isDefined(value)){

            result[name] = value ;
        }
    }

    return result ;

    
 }

 function main(){

    return createWriter({
        writeRecord
    }) ;
 }