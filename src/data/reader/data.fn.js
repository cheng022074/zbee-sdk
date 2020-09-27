
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

 function main(record , ignoreNames = []){

    let me = this,
    {
        names
    } = me,
    addNames = getNames(me.getAddFields(record));

    names = [
        ...names,
        ...addNames
    ] ;

    let data = {},
        cache = {};

    for(let name of names){

        if(ignoreNames.includes(name)){

            continue ;
        }

        defineProperty(data , name , {
            get(){

                if(cache.hasOwnProperty(name)){

                    return cache[name] ;
                }

                return cache[name] = clone(record[name]) ;
            },
            enumerable:true,
            configurable:true
        }) ;
    }

    return data ;
 }