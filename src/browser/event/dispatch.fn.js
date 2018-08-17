
/**
 * 
 * 触发一个自定义事件
 * 
 * @param {mixed} target 目标对象
 * 
 * @param {string} name 自定义事件名称
 * 
 * @param {mixed} detail 基于自定义事件传递的数据
 * 
 */

target.dispatchEvent(new CustomEvent(name , {
    bubbles:false,
    detail
})) ;
