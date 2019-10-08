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
 * @import createReader from data.reader.create
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

 function generatePropertyFn(fn , record , name) {
     
    if(isFunction(fn)){

        return fn.bind(record , name) ;
    }

    return emptyFn ;
 }

 function defineParentProperty(target , value){

    defineProperty(target , '__ZBEE_PARENT__' , {
        value,
        writable:true
    }) ;
 }

 function main({
     root,
     properties = {}
 }) {

    return {
        read(data){
    
            let items = from(get(data , root)),
                records = [];
        
            defineParentProperty(records) ;
        
            for(let item of items){
        
                let record = {},
                    names = keys(properties);
        
                defineParentProperty(record , records) ;
        
                for(let name of names){
        
                    let property = properties[name] ;
        
                    if(isString(property)){
        
                        record[name] = get(item , property) ;
                    
                    }else if(isObject(property)){
        
                        let {
                            mapping,
                            model,
                            multi = true,
                            set,
                            get
                        } = property ;
        
                        if(mapping){
        
                            record[name] = get(item , mapping) ;
                        
                        }else if(model){
        
                            let result = createReader(model).read(item) ;
                            
                            if(multi === false && result.length){
        
                                result = result[0] ;
        
                            }
        
                            result.__ZBEE_PARENT__ = record ;
        
                            record[name] = result;
        
                        }else if(set || get){
        
                            defineProperty(record , name , {
                                enumerable:true,
                                set:generatePropertyFn(set , record , name),
                                get:generatePropertyFn(get , record , name)
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