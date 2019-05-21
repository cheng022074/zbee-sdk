
/**
 * 
 * 查看指定事件名称上有无事件监听
 * 
 * @param {string} name 事件名称
 * 
 * @return {boolean} 如果事件上有监听则返回 true , 否则返回 false 
 * 
 */

 let {
    emitter
 } = this ;

 return emitter.listenerCount(name) !== 0 ;