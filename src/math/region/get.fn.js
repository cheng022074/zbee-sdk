
/**
 * 
 * 获取范围对象
 * 
 * @import is.object
 * 
 * @import from from .from
 * 
 * @param {object} data 拥有范围信息的对象
 * 
 * @return {object} 如果给定对象拥有范围对象的基本属性则直接返回该对象，否则则进行范围对象转换 
 * 
 */

 if(isObject(data) &&　'top' in data && 'bottom' in data && 'left' in data && 'right' in data && Object.keys(data).length === 4){

    return data ;
 }

 return from(data) ;