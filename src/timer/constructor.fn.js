
/**
 * 
 * 初始化计时器
 * 
 * @param {object} config 参数
 * 
 * @param {number} [config.interval = 1000] time 触发周期时长，默认为一秒种 
 * 
 * @param {number} [config.duration = 6000] 计时时长，默认为一分钟
 * 
 */

let me = this ;

me.interval = interval ;

me.defaultDuration = duration ;

me.onInterval = onInterval.bind(me) ;