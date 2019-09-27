
/**
 * 
 * 将多个键值连接起来
 * 
 * @import is.string
 * 
 * @param {array} [...keys] 一组键值
 * 
 * @return {string} 连接后的键值 
 * 
 */

const suffixRe = /(?:^\.+)|(?:\.+$)/g ;

function main(...keys){

    let result = [] ;

    for(let key of keys){

        if(isString(key)){

            key = key.replace(suffixRe , '') ;

            if(key){

                result.push(key) ;
            }
        }
    }

    return result.join('.').trim() ;
}

