/**
 * 
 * 生成数据读取器
 * 
 * @import get from object.value.get
 * 
 * @import from from array.from
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import emptyFn from function.empty value
 * 
 * @import is.function
 * 
 * @import is.defined
 * 
 * @import generate from id.generate
 * 
 * @import createReader from data.reader.create
 * 
 * @import define from data.record.property.define
 * 
 * @param {object} model 数据模型定义
 * 
 * @return {data.Reader} 数据模型对象 
 * 
 */

 const {
    keys,
    defineProperty
 } = Object ;

 function defineParentProperty(record , value){

    defineProperty(record , '__ZBEE_DATA_PARENT__' , {
        value,
        writable:true
    }) ;
 }

 function defineIdProperty(record , id) {
     
    if(isFunction(id)){

        id = id(record) ;

    }else{

        id = generate('data-') ;
    }

    if(!isString(id)){

        id = generate('data-')
    }


    defineProperty(record , '__ZBEE_DATA_ID__' , {
        value:id
    }) ;
 }

 function getRootData(data , root) {
     
    if(isString(root)){

        return from(get(data , root)) ;
    
    }else if(isFunction(root)){

        return from(root(data)) ;
    }

    return from(data) ;
 }

 function defineInnerProperty(record) {
     
    defineProperty(record , '__ZBEE_DATA_INNER__' , {
        value:{}
    }) ;
 }

 function main({
     root,
     id,
     properties = {}
 }) {

    return {
        read(data){
    
            let items = getRootData(data , root),
                records = [];
        
            defineParentProperty(records) ;
        
            for(let item of items){
        
                let record = {},
                    names = keys(properties);
        
                defineParentProperty(record , records) ;

                defineIdProperty(record , id) ;

                defineInnerProperty(record) ;
        
                for(let name of names){
        
                    let property = properties[name] ;
        
                    if(isString(property)){
        
                        define(record , name , {
                            value:get(item , property)
                        }) ;
                    
                    }else if(isObject(property)){
        
                        let {
                            mapping,
                            mode,
                            model,
                            multi = true,
                            set,
                            get
                        } = property ;
        
                        if(mapping){
        
                            record[name] = get(item , mapping) ;

                            define(record , name , {
                                mode,
                                value:get(item , mapping)
                            }) ;
                        
                        }else if(model){
        
                            let result = createReader(model).read(item) ;
                            
                            if(multi === false && result.length){
        
                                result = result[0] ;
        
                            }
        
                            result.__ZBEE_DATA_PARENT__ = record ;
        
                            define(record , name , {
                                mode:'readonly',
                                value:result
                            }) ;
        
                        }else if(set || get){
        
                            define(record , name , {
                                set,
                                get
                            }) ;
                        }
                    }
                }
        
                records.push(record) ;
            }
        
            return records ;
        }
     } ;
     
 }