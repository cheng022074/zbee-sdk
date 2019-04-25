
/**
 * 
 * 在数组中指定项之前添加
 * 
 * @param {array} data 目标数组
 * 
 * @param {mixed} insertItem 需要添加的项
 * 
 * @param {mixed} existItem 指定项
 * 
 */

 let index = data.indexOf(existItem) ;

 if(index !== -1){

    data.splice(index , 0 , insertItem) ;
 }