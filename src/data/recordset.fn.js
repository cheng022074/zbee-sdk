
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
 * @import is.array
 * 
 * @import is.class
 * 
 * @param {data.Reader} reader 数据读取器
 * 
 * @param {array} records 数据记录数组
 * 
 * @return {array} 数组
 * 
 */

class main extends Array{

    constructor(reader , records){

        let me = this ;

        me.data = [] ;

        define(me , 'reader' , reader) ;

        define(me , 'observable' , createObservable()) ;

        for(let record of records){

            if(is(record)){

                get(record , 'observable').belongTo(me) ;

                me.push(record) ;
            }
        }
    }

    push(...raws){

        let me = this ;
        
        return me.data.push(...createRecords.call(me , raws)) ;
    }

    unshift(...raws){

        let me = this ;

        return me.data.unshift(...createRecords.call(me , raws)) ;
    }

    splice(index , howMany , ...raws){

        let me = this,
        {
            data
        } = me;

        for(let i = 0 ; i < howMany ; i ++){

            let itemIndex = index + i ;

            if(itemIndex < data.length){

                get(me[itemIndex] , 'observable').independent() ;
            }
        }

        return data.splice(index , howMany , ...createRecords.call(me , raws)) ;
    }

    pop(){

        let me = this,
        {
            data
        } = me,
        {
            length
        } = data;

        if(length){

            get(data[length - 1] , 'observable').independent() ;
        }

        return data.pop() ;
    }

    shift(){

        let {
            data
        } = this,
        {
            length
        } = data;

        if(length){

            get(data[0] , 'observable').independent() ;
        }

        return data.shift() ;
    }

    [Symbol.iterator](){

        return this.data[Symbol.iterator]() ;
    }
 }

 function createRecords(raws){

    let records = [],
        readRaws = [],
        me = this;

    for(let raw of raws){

        if(is(raw)){

            let observable = get(raw , 'observable');

            if(observable.isIndependent){

                observable.belongTo(me) ;

                records.push(raw) ;
            }

        }else{

            readRaws.push(raw) ;
        }
    }

    let recordset = get(me , 'reader').read(readRaws , {
        isRecordset:false
    }) ;

    for(let record of recordset){

        get(record , 'observable').belongTo(me) ;

        records.push(record) ;

    }

    return records ;
 }