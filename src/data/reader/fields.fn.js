
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
 * @import is.defined
 * 
 * @import isObject from is.object.simple
 * 
 * @import createReader from data.reader
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
    equals,
    set,
    get,
    defaultValue,
    reader,
    mode = 'readonly',
    ...options
}) {

   const me = this,
   {
       getData
   } = me;

    let field = {
        name,
        mode,
        equals,
        set,
        get
    }  ;

    if(!local){

       field.convert = (raw , raws , index , data) =>{

            if(isDefined(reader)){

                if(isFunction(reader)){

                    return me.read(data , data => reader(data , raw , raws , index)) ;
                
                }else if(isString(reader)){

                    return me.read(data , reader) ;
                
                }else if(isObject(reader)){

                    let {
                        fields,
                        root
                    } = reader,
                    rootProperty;

                    if(isFunction(root)){

                        rootProperty = data => root(data , raw , raws , index) ;
                    
                    }else{

                        rootProperty = root ;
                    }

                    return createReader(fields).read(data , rootProperty) ;
                }

                return [] ;

            }else if(isFunction(convert)){

                raw = convert(raw , raws , index , data) ;
            
            }else{

                if(isString(mapping)){

                    raw = getData(raw , mapping) ;
                
                }else{

                    raw = getData(raw , name) ;
                }

                if(isString(type)){

                    raw = include(`data.convert.${type}`)(raw , options) ;
                }

            }

            return isDefined(raw) ? raw : defaultValue ;
        } ;
    
    }else{

        field.convert = () => defaultValue ;
    }

    return field ;
}