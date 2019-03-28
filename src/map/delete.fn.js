

/**
 * 
 * 删除指定组合键
 * 
 * @import find from .find scoped
 * 
 * @param {array} [...keys] 组合键
 * 
 * @return {boolean} 如果组合键存在，则返回 true , 否则返回 false 
 * 
 */

let me = this,
{
    map
} = me ;

let {
    match,
    key
} = find(keys) ;

if(match){

    return map.delete(key) ;
}

return false ;