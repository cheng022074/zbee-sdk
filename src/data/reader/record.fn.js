
/**
 * 
 * 根据获取原始数据转换后正式数据
 * 
 * @import generate from id.generate
 * 
 * @import define from object.property.define
 * 
 * @import createObservable from ..observable
 * 
 * @import innerDefine from object.property.inner.define
 * 
 * @import innerGet from object.property.inner.get
 * 
 * @import is from is.data.item
 * 
 * @param {mixed} raw 行级原始数据
 * 
 * @param {array} raws 一组行级原始数据
 * 
 * @param {number} index 原始数据下标
 * 
 * @param {mixed} data 原始数据
 * 
 * @return {object} 正式数据
 * 
 */


let {
    fields
} = this,
record = {};

innerDefine(record , 'observable' , createObservable()) ;

for(let {
    name,
    convert,
    mode,
    equals,
    set,
    get
} of fields){

    let value = convert(raw , raws , index , data) ;

    define(record , name , {
        mode,
        equals,
        set,
        get,
        value
    }) ;

    if(is(value)){

        innerGet(value , 'observable').belongTo(record) ;   
    }
}

return record ;