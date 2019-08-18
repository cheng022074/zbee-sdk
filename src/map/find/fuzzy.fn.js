
/**
 * 
 * 以模糊寻找方式匹配键值
 * 
 * @import is.defined
 * 
 * @param {array} [...keys] 匹配键值
 * 
 * @return {array} 搜索结果 
 * 
 */

let me = this,
{
    map
} = me,
currentKeys = map.keys(),
{
    length
} = keys,
result = [];

for(let groupKeys  of currentKeys){

    let isMatch = true ;

    for(let i = 0 ; i < length ; i ++){

        let key = keys[i] ;

        if(!isDefined(key)){

            continue ;
        }

        if(groupKeys[i] !== key){

            isMatch = false ;

            break ;
        }
    }

    if(isMatch){

        result.push({
            key:groupKeys,
            value:map.get(groupKeys)
        }) ;
    }
}

return result ;