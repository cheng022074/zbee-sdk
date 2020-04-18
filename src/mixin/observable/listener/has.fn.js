
/**
 * 
 * 判断是否拥有事件监听
 * 
 * @param {string} event 事件
 * 
 * @return {boolean} 如果拥有事件监则返回 true , 否则返回 false
 * 
 */

let {
    emitter
} = this ;

return emitter.listenerCount(event) !== 0;