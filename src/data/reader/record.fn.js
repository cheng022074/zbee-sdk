
/**
 * 
 * 根据获取原始数据转换后正式数据
 * 
 * @import generate from id.generate
 * 
 * @import define from object.property.define
 * 
 * @import defines from object.properties.define
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

function main(raw , raws , index , data){

    let {
        fields
    } = this,
    record = {};
    
    for(let {
        name,
        convert,
        mode = 'readonly'
    } of fields){

        let dataRecordPropertyName = getDataRecordPropertyName(name) ;
    
        switch(mode){
    
            case 'readonly':
    
                Object.defineProperty(record , name , {
                    value:convert(raw , raws , index , data),
                    enumerable:true
                }) ;
    
                break ;
    
            case 'writeonly':
    
                Object.defineProperties(record , {
                    [name]:{
                        set(value){
    
                            this[dataRecordPropertyName] = value ;
                        }
                    },
                    [dataRecordPropertyName]:{
                        value:convert(raw , raws , index , data)
                    }
                }) ;
    
                break ;
    
            case 'readwrite':
    
                Object.defineProperties(record , {
                    [name]:{
                        set(value){
    
                            this[dataRecordPropertyName] = value ;
                        },
    
                        get(){
    
                            return this[dataRecordPropertyName] ;
                        }
                    },
                    [dataRecordPropertyName]:{
                        value:convert(raw , raws , index , data)
                    }
                }) ;
    
        }
    }
    
    return record ;
}

function getDataRecordPropertyName(name){

    return generate(`__ZBEE_DATA_RECORD_PROPERTY_${name}__`) ;
}