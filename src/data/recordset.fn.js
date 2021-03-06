
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

const {
    push
} = Array.prototype ;

function main(reader , records){

    let recordset = new Recordset() ;

    define(recordset , 'reader' , reader) ;

    define(recordset , 'observable' , createObservable()) ;

    push.call(recordset , ...createRecords.call(recordset , records)) ;

    return recordset ;

}

class Recordset extends Array{

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

                get(me[itemIndex] , 'observable').independent() ;
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

            get(me[length - 1] , 'observable').independent() ;
        }

        return super.pop() ;
    }

    shift(){

        let me = this,
        {
            length
        } = me;

        if(length){

            get(me[0] , 'observable').independent() ;
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