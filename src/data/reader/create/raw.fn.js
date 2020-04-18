/**
 * 
 * 读取外部数据
 * 
 * @import createReader from ..create
 * 
 * @import is.string
 * 
 * @import get from object.value.get
 * 
 * @import is.defined
 * 
 * @import define from data.record.property.define
 * 
 * @import createEmpty from data.record.empty
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @param {object} model 数据模型定义
 * 
 * @return {data.Reader} 数据模型对象 
 * 
 */

 function getRootData(data , root) {
     
    if(isString(root)){

        return from(get(data , root)) ;
    
    }else if(isFunction(root)){

        return from(root(data)) ;
    }

    return from(data) ;
 }

 function getMappingData(data , mapping) {

    if(isString(mapping)){

        return get(data , mapping) ;
    
    }else if(isFunction(mapping)){

        return mapping(data) ;
    }
 }

 function defineRecordProperty(record , name , property , raw){

    if(isString(property) || isFunction(property)){
        
        property = {
            mapping:property
        } ;
    }
    
    if(isObject(property)){

        let {
            mapping,
            defaultValue,
            mode,
            model,
            multi = true,
            set:setFn,
            get:getFn
        } = property ;

        if(mapping){

            let value = getMappingData(raw , mapping) ;

            if(!isDefined(value)){

                value = defaultValue ;
            }

            define(record , name , {
                mode,
                value
            }) ;
        
        }else if(model){

            let result = main(model).read(raw) ;
            
            if(multi === false){

                if(result.length){

                    result = result[0] ;
                
                }else{

                    result = createEmpty(model) ;
                }
            
            }

            result.__ZBEE_DATA_PARENT__ = record ;

            define(record , name , {
                mode,
                value:result
            }) ;

        }else if(setFn || getFn){

            define(record , name , {
                set:setFn,
                get:getFn
            }) ;
        }
    }
 }

 function main(model) {
    
    return createReader(model , {
        getRootData,
        defineRecordProperty
    }) ;

 }

 