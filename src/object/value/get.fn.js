
/**
 * 
 * 获得一个对象的键值
 * 
 * @import split from string.split
 * 
 * @import isObject from is.object.simple
 * 
 * @param {object} data 对象数据
 * 
 * @param {string} [key = '.'] 对象键值
 * 
 * @return {mixed} 对应对象数据的键值的数据 
 * 
 * @scoped
 * 
 */

if(key === '.'){

    return data ;
}

if(isObject(data)){

    let keys = split(key , /\./),
        result;

    for(let key of keys){

        result = data[key] ;

        if(isObject(result)){

            data = result ;
        
        }else{

            break ;
        }
    }

    return result ;
}