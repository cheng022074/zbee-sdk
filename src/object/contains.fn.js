/**
 * 
 * 判断是否完全包含指定项
 * 
 * @import getKeys from object.keys
 * 
 * @param {object} target 目标对象
 * 
 * @param {object} item 被包含对象
 * 
 * @return {boolean} 被包含对象的所有数据都包含在目标对象中则返回 true , 否则返回 false
 * 
 */

let keys = getKeys(item),
    targetKeys = getKeys(target);

for(let key of keys){

    if(!targetKeys.includes(key) || get(target , key) !== get(item , key)){

        return false ;
    }
}

return true ;