
/**
 * 
 * 适配事件主体对象的添加事件的方法
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {function} fn 事件监听函数
 * 
 * @param {object} [options] 事件参数
 * 
 */

 if('addEventListener' in target){

    target.addEventListener(name , fn , options) ;
 
 }else{

    target.on(name , fn) ;
 }