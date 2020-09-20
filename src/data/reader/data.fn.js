
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
 * @import getNames from .names
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
        addFields,
        names,
        cacheNames
    } = me,
    additionalFields = addFields(record);

    names = [
        ...names
    ] ;

    cacheNames = [
        ...cacheNames
    ] ;

    if(isDefined(additionalFields)){

        let {
            names:addNames,
            cacheNames:addCacheNames
        } = getNames(getFields.call(me , additionalFields)) ;

        names.push(...addNames) ;

        cacheNames.push(...addCacheNames) ;
    }

    return new Data(record , names , cacheNames) ;
 }