/**
 * 
 * 将对象进行冻结
 * 
 * @param {object} data 作用对象
 * 
 * @param {boolean} [deep = false] 是否深层遍历
 * 
 * @return {object} 冻结后的对象
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 */

function main(data , deep){

    if((isObject(data) || isArray(data)) && !Object.isFrozen(data)){

        if(deep){

            let names = Object.keys(data) ;

            for(let name of names){

                main(data[name] , keep) ;
            }
        }
    }

    return data ;
}

