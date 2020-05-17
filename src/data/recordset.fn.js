
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

        define(me , 'observable' , createObservable()) ;

        for(let record of records){

            if(is(record)){

                get(record , 'observable').belongTo(me) ;

                push.call(me , record) ;
            }
        }
    }

    push(...raws){  

        super.push(...get(this , 'reader').read(raws)) ;
    }

    unshift(...raws){

        super.unshift(...get(this , 'reader').read(raws)) ;
    }

    splice(index , howMany , ...raws){

        super.splice(index , howMany , ...get(this , 'reader').reader(raws)) ;
    }
 }