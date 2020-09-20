
/**
 * 
 * 根据字段定义获取相关字段名称信息
 * 
 * @import is.function
 * 
 * @param {array} fields 字段集合
 * 
 * @return {object} 名称集合
 * 
 */

 let names = [],
     cacheNames = [] ;

for(let {
    name,
    get
} of fields){

    names.push(name) ;

    if(isFunction(get)){

        cacheNames.push(name) ;
    }
}

return {
    names,
    cacheNames
} ;