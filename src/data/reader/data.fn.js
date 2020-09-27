
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

    let me = this,
        cache = {};

    define(me , {
        reset(){

            clear(get(me , 'cache')) ; 
        }
    }) ;

    for(let name of names){

        defineProperty(me , name , {
            get(){

                if((cacheNames.includes(name) && !cache.hasOwnProperty(name)) || !cacheNames.includes(name)){

                    cache[name] = clone(record[name]) ;
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
        names
    } = me,
    addNames = getNames(me.getAddFields(record));

    names = [
        ...names,
        ...addNames
    ] ;

    let data = {} ;

    for(let name of names){

        defineProperty(data , name , {
            get(){

                return record[name] ;
            },
            enumerable:true,
            configurable:true
        }) ;
    }

    return data ;
 }