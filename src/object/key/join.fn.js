
/**
 * 
 * 将多个键值连接起来
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

        key = key.replace(suffixRe , '') ;

        if(key){

            result.push(key) ;
        }
    }

    return result.join('.') ;
}

