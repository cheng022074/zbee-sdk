
/**
 * 
 * 数据读取器字段配置
 * 
 * @import is.defined
 * 
 * @import is.array
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import empty from function.empty value
 * 
 * @import is.function
 * 
 * @param {mixed} fields 字段配置
 * 
 * @return {mixed} 封装后的字段配置 
 * 
 */

 function main(fields){

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
    local = false,
    defaultValue,
    mode = 'readonly',
    ...options
}) {

   const {
       getData
   } = this;

    let field = {
        name,
        mode
    }  ;

    if(!local){

       field.convert = (data , ...args) =>{

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
        } ;
    
    }else{

        field.convert = () => defaultValue ;
    }

    return field ;
}