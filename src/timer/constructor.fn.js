
/**
 * 
 * 初始化计时器
 * 
 * @param {object} [config = {}] 参数
 * 
 * @param {number} [config.interval = 1000] time 触发周期时长，默认为一秒种 
 * 
 * @param {number} [config.duration = 60000] 计时时长，默认为一分钟
 * 
 * @param {boolean} [config.autoStart = true] 是否自动启动，默认为自动启动
 * 
 */

let me = this ;

me.interval = interval ;

me.defaultDuration = duration ;

if(autoStart){

    me.start() ;
}