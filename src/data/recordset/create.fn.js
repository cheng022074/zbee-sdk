
/**
 * 
 * 创建一个专有于数据读取器的数组
 * 
 * @import define from object.property.inner.define
 * 
 * @import get from object.property.inner.get
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

        super(...records) ;

        define(this , 'READER' , reader) ;
    }

    push(...raws){

        super.push(...get(this , 'READER').read(raws)) ;
    }

    unshift(...raws){

        super.unshift(...get(this , 'READER').read(raws)) ;
    }

    splice(index , howMany , ...raws){

        super.splice(index , howMany , ...get(this , 'READER').reader(raws)) ;
    }
 }