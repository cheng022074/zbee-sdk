/**
 * 
 * 获取对象的键值组合
 * 
 * @import is.object
 * 
 * @param {object} data 对象
 * 
 * @param {array} 键值数组
 * 
 * @scoped
 * 
 */

function main(data){

    return get_keys(data) ;
}

function get_keys(data , rootKey = ''){

    let keys = Object.keys(data),
        result = [];

    for(let key of keys){

        let value = data[key] ;

        if(isObject(value)){

            result.push(...get_keys(value , `${rootKey}${key}.`)) ;
        
        }else{

            result.push(`${rootKey}${key}`) ;
        }
    }

    return result ;
}
