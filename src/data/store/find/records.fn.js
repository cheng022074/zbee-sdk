
/**
 * 
 * 寻找符合查询条件的记录
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @param {mixed} property 属性名称
 * 
 * @param {mixed} value 属性值
 * 
 * @return {array} 查询出来的数据记录
 * 
 */

 let {
    records
 } = this ;

if(isString(property)){

    let result = [] ;

    for(let record of records){

        if(record.get(property) === value){

            result.push(record) ;
        }
    }

    return result ;

}else if(isFunction(property)){

    let result = [] ;

    for(let record of records){

        if(property.call(value , record) === true){

            result.push(record) ;
        }
    }

    return result ;
}