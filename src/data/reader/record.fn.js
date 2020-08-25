
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
 * @import is.defined
 * 
 * @import getFields from .fields
 * 
 * @param {mixed} raw 行级原始数据
 * 
 * @param {array} raws 一组行级原始数据
 * 
 * @param {number} index 原始数据下标
 * 
 * @param {mixed} data 原始数据
 * 
 * @param {function} [addFields = () => {}] 自定义数据记录
 * 
 * @return {object} 正式数据
 * 
 */

 function main(raw , raws , index , data , addFields){

    let me = this,
    {
        fields
    } = me,
    record = {},
    isConvert = isDefined(raw) && isDefined(raws) && isDefined(index) && isDefined(data) ;
    
    innerDefine(record , 'observable' , createObservable()) ;

    processFields(isConvert , record , fields , raw , raws , index , data) ;

    let additionalFields = addFields() ;

    if(isDefined(additionalFields)){

        additionalFields = getFields.call(me , additionalFields) ;

        processFields(isConvert , record , additionalFields , raw , raws , index , data) ;

        fields.push(...additionalFields) ;
    }
    
    return record ;
 }

 function processFields(isConvert , record , fields , raw , raws , index , data){

    for(let {
        name,
        convert,
        mode,
        equals,
        set,
        get,
        defaultValue
    } of fields){
    
        if(isConvert){
    
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
        
        }else{
    
            let value = raw[name] ;
    
            define(record , name , {
                mode,
                equals,
                set,
                get,
                value:isDefined(value) ? value : defaultValue
            }) ;
        }
    }
 }