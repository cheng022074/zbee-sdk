
/**
 * 
 * 获取数组项对象中的属性形成新的数组
 * 
 * @param {array} data 数组
 * 
 * @param {string} name 属性名称
 * 
 * @return {array} 数组
 * 
 */

 let result = [] ;

 for(let item of data){

    result.push(item[name]) ;
 }

 return result ;