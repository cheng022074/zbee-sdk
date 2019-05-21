
/**
 * 
 * 获得最近的触发事件数据
 * 
 * @return {mixed} 如果有的话则返回一个参数数组，如果没有则返回 false 
 * 
 */

 let {
    cacheFireEventDataList
 } = this,
 {
    length
 } = cacheFireEventDataList;

 if(length){

    return cacheFireEventDataList[length - 1] ;
 }

 return false ;