
/**
 * 
 * 基于数据记录生成一个与之对应的只读数据对象
 * 
 * @import define from object.property.inner.define
 * 
 * @import get from object.property.inner.get
 * 
 * @import clear from object.clear
 * 
 * @import clone from data.clone
 * 
 * @import is.function
 * 
 * @import getFields from .fields
 * 
 * @import is.defined
 * 
 * @param {data.Record} record 数据记录
 * 
 * @return {object} 数据对象
 * 
 */

 const {
    defineProperty
 } = Object ;

 function Data(record , names , cacheNames){

    let me = this ;

    define(me , {
        record,
        cache:{},
        reset(){

            clear(get(me , 'cache')) ; 
        }
    }) ;

    for(let name of names){

        defineProperty(me , name , {
            get(){

                let cache = get(me , 'cache') ;

                if((cacheNames.includes(name) && !cache.hasOwnProperty(name)) || !cacheNames.includes(name)){

                    cache[name] = clone(get(me , 'record')[name]) ;
                }

                return cache[name] ;
            },
            configurable:true,
            enumerable:true
        }) ;
    }
 }

 function main(record){

    let me = this,
    {
        fields,
        addFields
    } = me,
    additionalFields = addFields(record),
    allFields = [
        ...fields
    ];

    if(isDefined(additionalFields)){

        allFields.push(...getFields.call(me , additionalFields)) ;
    }

    let names = [],
        cacheNames = [];

    for(let {
        name,
        get
    } of allFields){

        names.push(name) ;

        if(get){

            cacheNames.push(name) ;
        }
    }

    return new Data(record , names , cacheNames) ;
 }