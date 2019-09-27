/**
 * 
 * 获取对象的键值组合
 * 
 * @import isObject from is.object.simple
 * 
 * @import join from object.key.join
 * 
 * @param {object} data 对象
 * 
 * @return {array} 键值数组
 * 
 * @scoped
 * 
 */

function main(data){

   return get_keys(data) ;
}

function get_keys(data , rootKey){

    let result = [] ;

    if(isObject(data)){

        let keys = Object.keys(data) ;

        for(let key of keys){

            result.push(...get_keys(data[key] , join(rootKey , key))) ;
        }
    
    }else if(rootKey){

        result.push(rootKey) ;
    }

    return result ;
}
