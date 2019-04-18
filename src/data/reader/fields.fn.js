
/**
 * 
 * 格式化读取字段配置
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @param {array} fields 字段配置
 * 
 * @return {array} 格式化后的字段配置 
 * 
 */

 let result = [],
    names = [];

 for(let field of fields){

    if(isString(field)){

        field = {
            name:field,
            mapping:field
        } ;

    }
    
    if(isObject(field) && field.hasOwnProperty('name')){

        let {
            name
        } = field ;

        if(!names.includes(name)){

            result.push(field) ;

            names.push(name) ;
        }
    }
 }

 return result ;
 