
/**
 * 
 * 适配事件主体对象的移除事件的方法
 * 
 * @param {mixed} target 事件主体
 * 
 * @param {string} name 事件名称
 * 
 * @param {function} fn 事件监听函数
 * 
 * @param {object} [options] 事件监听函数配置
 * 
 */

 if('removeEventListener' in target){

    target.removeEventListener(name , fn , options) ;
 
 }else{

    const remove = target.off || target.un;

    remove.call(target , name , fn) ;
 }

