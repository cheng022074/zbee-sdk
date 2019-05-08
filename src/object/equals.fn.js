/**
 * 
 * 匹配两个对象数据是否匹配
 * 
 * @import keys from object.keys
 * 
 * @import get from object.value.get
 * 
 * @param {object} value1 第一个对象数据
 * 
 * @param {object} value2 第二个对象数据
 * 
 * @return {boolean} 如果对象数据匹配则返回 true ， 否则返回 false
 * 
 */

let keys1 = keys(value1),
    keys2 = keys(value2) ;

if(keys1.length !== keys2.length){

    return false ;
}

for(let key of keys1){

    if(!keys2.includes(key) || get(value1 , key) !== get(value2 , key)){

        return false ;
    }
}

return true ;