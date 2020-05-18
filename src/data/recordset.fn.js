
/**
 * 
 * 创建一个专有于数据读取器的数组
 * 
 * @import define from object.property.inner.define
 * 
 * @import get from object.property.inner.get
 * 
 * @import createObservable from .observable
 * 
 * @import is from is.data.record
 * 
 * @param {data.Reader} reader 数据读取器
 * 
 * @param {array} records 数据记录数组
 * 
 * @return {array} 数组
 * 
 */

const {
    push
} = Array.prototype ;

class main extends Array{

    constructor(reader , records){

        super() ;

        let me = this ;

        define(me , 'reader' , reader) ;

        define(me , 'observable' , createObservable(me)) ;

        for(let record of records){

            if(is(record)){

                get(record , 'observable').belongTo(me , me.length) ;

                push.call(me , record) ;
            }
        }
    }

    push(...raws){  

        super.push(...createRecords.call(this , raws)) ;
    }

    unshift(...raws){

        super.unshift(...createRecords.call(this , raws)) ;
    }

    splice(index , howMany , ...raws){

        super.splice(index , howMany , ...createRecords.call(this , raws)) ;
    }
 }

 function createRecords(raws){

    let records = [],
        readRaws = [];

    for(let raw of raws){

        if(is(raw)){

            get(raw , 'observable').independent() ;

            records.push(raw) ;
        
        }else{

            processRaws.push(raw) ;
        }
    }

    return [
        ...records,
        ...get(this , 'reader').read(readRaws)
    ] ;
 }