
/**
 * 
 * 判断指定组合键是否存在
 * 
 * @param {array} keys 组合键
 * 
 * @return {object} 返回查询结果 
 * 
 */

let me = this,
{
    map
} = me,
currentKeys = map.keys(),
{
    length
} = keys;

for(let groupKeys  of currentKeys){

   if(length === groupKeys.length){

       let isMatch = true ;

       for(let i = 0 ; i < length ; i ++){

           if(groupKeys[i] !== keys[i]){

               isMatch = false ;

               break ;
           }
       }

       if(isMatch){

           return {
               match:true,
               key:groupKeys
           } ;
       }
   }
}

return {
    match:false
} ;