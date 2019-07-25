
/**
 * 
 * 返回指定项目对应的下标
 * 
 * @import equals from data.equals
 * 
 * @param {mixed} data 数组
 * 
 * @param {mixed} checkItem 检测项
 * 
 * @return {Number} 数组下标
 * 
 */

 let {
     length
 } = data ;

for(let i = 0 ; i < length ; i ++){

    if(equals(data[i] , checkItem)){

        return i ;
    }
 }

 return -1 ;