
/**
 * 
 * 基于数据记录生成一个与之对应的只读数据对象
 * 
 * @import define from object.property.inner.define
 * 
 * @import get from object.property.inner.get
 * 
 * @import clone from data.clone
 * 
 * @import getNames from array.object.property
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

 function Data(record , names){

    let me = this ;

    define(me , 'record' , record) ;

    for(let name of names){

        defineProperty(me , name , {
            get(){

                return clone(get(me , 'record')[name]) ;
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
    names = getNames(fields , 'name'),
    additionalFields = addFields(record) ;

    if(isDefined(additionalFields)){

        names.push(...getNames(getFields.call(me , additionalFields) , 'name')) ;
    }

    return new Data(record , names) ;
 }