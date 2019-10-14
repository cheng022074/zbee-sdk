
/**
 * 
 * 读取内部数据
 * 
 * @import createReader from ....create
 * 
 * @param {object} model 数据模型定义
 * 
 * @return {data.Reader} 数据模型对象 
 * 
 */

 const {
    keys,
    defineProperty
 } = Object;

 function defineRecordProperty(record , name , property , raw){

    if(isString(property)){
        
        property = {
            mapping:true
        } ;
    }
    
    if(isObject(property)){

        let {
            mapping,
            mode,
            model,
            multi = true,
            set:setFn,
            get:getFn
        } = property ;

        if(mapping){

            define(record , name , {
                mode,
                value:raw[name]
            }) ;
        
        }else if(model){

            let result = main(model).read(raw) ;
            
            if(multi === false){

                if(result.length){

                    result = result[0] ;
                
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
        defineRecordProperty
    }) ;

 }