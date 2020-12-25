
/**
 * 
 * 对于数组进行拷贝
 * 
 * @import clone from data.clone
 * 
 * @param {array} data 数组
 * 
 * 
 */

 let result = [] ;

 for(let item of data){

    result.push(clone(item)) ;
 }

 return result ;