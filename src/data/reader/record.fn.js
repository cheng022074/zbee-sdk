
/**
 * 
 * 根据获取原始数据转换后正式数据
 * 
 * @import generate from id.generate
 * 
 * @import define from object.property.define
 * 
 * @import innerDefine from object.property.inner.define
 * 
 * @import is from is.data.item
 * 
 * @import is.defined
 * 
 * @import is.array
 * 
 * @import getFields from .fields
 * 
 * @param {mixed} record 数据记录 
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

 function main(record , raw , raws , index , data , addFields){

    let me = this,
    {
        fields
    } = me,
    isConvert = isDefined(raw) && isDefined(raws) && isDefined(index) && isDefined(data) ;

    record = record || {} ;

    innerDefine(record , 'DATA_RECORD' , true) ;

    processFields(isConvert , record , fields , raw , raws , index , data) ;

    let additionalFields = addFields(record) ;

    if(isDefined(additionalFields)){

        additionalFields = getFields.call(me , additionalFields) ;

        processFields(isConvert , record , additionalFields , raw , raws , index , data) ;
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
        afterSet,
        get,
        defaultValue
    } of fields){

        if(record.hasOwnProperty(name)){

            continue ;
        }
    
        if(isConvert){
    
            let value = convert(raw , raws , index , data) ;
    
            define(record , name , {
                mode,
                equals,
                set,
                afterSet,
                get,
                value
            }) ;
        
        }else{

            let config = {
                mode,
                equals,
                set,
                afterSet,
                get
            } ;

            if(raw){

                let value = raw[name] ;

                config.value = isDefined(value) ? value : defaultValue() ;
            
            }else{

                config.value = defaultValue() ;
            }
    
            define(record , name , config) ;
        }
    }
 }