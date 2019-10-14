
/**
 * 
 * 获得一个对象的键值
 * 
 * @import split from string.split
 * 
 * @import is.object
 * 
 * @import is.array
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

const arrayItemRe = /(\w+)\[(\d+)\]/ ;

if(isObject(data)){

    let keys = split(key , /\./),
        result;

    for(let key of keys){

        let keyMatch = key.match(arrayItemRe) ;

        if(keyMatch){

            result = data[keyMatch[1]][Number(keyMatch[2])] ;
        
        }else{

            result = data[key] ;
        }

        if(isObject(result) || isArray(result)){

            data = result ;
        
        }else{

            break ;
        }
    }

    return result ;
}