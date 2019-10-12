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
 * @import generate from id.generate
 * 
 * @import createReader from data.reader.create
 * 
 * @import defineParentProperty from data.structure.define.parent
 * 
 * @import defineIdProperty from data.structure.define.id
 * 
 * @import defineInnerProperty from data.structure.define.inner
 * 
 * @import defineModelProperty from data.structure.define.model
 * 
 * @param {object} model 数据模型定义
 * 
 * @param {function} defineRecordProperty 数据字段处理函数
 * 
 * @return {data.Reader} 数据模型对象 
 * 
 */

 const {
    keys,
    defineProperty
 } = Object ;

 function getRootData(data , root) {
     
    if(isString(root)){

        return from(get(data , root)) ;
    
    }else if(isFunction(root)){

        return from(root(data)) ;
    }

    return from(data) ;
 }

 return {
     read(data){

        let items = getRootData(data , root),
            records = [];

        defineParentProperty(records) ;

        defineModelProperty(records , model) ;

        for(let item of items){

            let record = {},
                names = keys(properties);

            defineParentProperty(record , records) ;

            defineIdProperty(record , id) ;

            defineInnerProperty(record) ;

            defineModelProperty(records , model) ;

            for(let name of names){

                defineRecordProperty(record , name , properties[name] , item) ;
            }

            records.push(record) ;
        }

        return records ;
     }
 }