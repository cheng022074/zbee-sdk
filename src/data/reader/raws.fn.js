
/**
 * 
 * 获取一组原始数据用来解析数据记录
 * 
 * @import is.function
 * 
 * @import from from array.from
 * 
 * @param {mixed} data 原始数据
 * 
 * @return {array} 一组原始数据 
 * 
 */

let {
    rootProperty,
    getData
} = this,
raws;

if(isFunction(rootProperty)){

    raws = rootProperty(data) ;

}else{

    raws = getData(data , rootProperty) ;
}

return from(raws) ;