
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
 * @param {object} [options = {}] 配置
 * 
 * @return {object} 数据对象
 * 
 */

 const {
    defineProperty
 } = Object ;

 function main(record , {
    ignoreFields = [],
    fields = {}
 }){

    let me = this,
    {
        names
    } = me;

    names = [
        ...names,
        ...Object.keys(fields)
    ] ;

    names = Array.from(new Set(names)) ;

    let data = {},
        cache = {};

    for(let name of names){

        if(ignoreFields.includes(name)){

            continue ;
        }

        defineProperty(data , name , {
            get(){

                if(cache.hasOwnProperty(name)){

                    return cache[name] ;
                }

                if(fields.hasOwnProperty(name)){

                    return cache[name] = clone(fields[name](record)) ;
                }

                return cache[name] = clone(record[name]) ;
            },
            enumerable:true
        }) ;
    }

    return data ;
 }