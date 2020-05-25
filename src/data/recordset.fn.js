
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

        return super.push(...createRecords.call(this , raws)) ;
    }

    unshift(...raws){

        return super.unshift(...createRecords.call(this , raws)) ;
    }

    splice(index , howMany , ...raws){

        let me = this,
        {
            length
        } = me;

        for(let i = 0 ; i < howMany ; i ++){

            let itemIndex = index + i ;

            if(itemIndex < length){

                me[itemIndex].independent() ;
            }
        }

        return super.splice(index , howMany , ...createRecords.call(me , raws)) ;
    }

    pop(){

        let me = this,
        {
            length
        } = me;

        if(length){

            me[length - 1].independent() ;
        }

        return super.pop() ;
    }

    shift(){

        let me = this,
        {
            length
        } = me;

        if(length){

            me[0].independent() ;
        }

        return super.shift() ;
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

            processRaws.push(raw) ;
        }
    }

    let recordset = get(me , 'reader').read(readRaws) ;

    for(let record of recordset){

        recordset.splice(recordset.indexOf(record) , 1) ;

        get(record , 'observable').belongTo(me) ;

        records.push(record) ;

    }

    return records ;
 }