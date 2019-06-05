
/**
 * 
 * 初始化订阅器
 * 
 * @import createMap from map
 * 
 * @param {object} config 订阅器配置
 * 
 * @param {boolean} [config.accumulationMode = false] 是否启动累积模型，当启动累积模型后则所有的接收消息都会被缓存，默认为 false
 * 
 * @param {object} [config.extraParams = {}] 附加参数
 * 
 * @param {object} [config.defaultParams = {}] 默认参数
 * 
 */

let me = this ;

me.name = name ;

me.extraParams = extraParams ;

me.defaultParams = defaultParams ;

me.accumulationMode = accumulationMode ;

me.cache = [] ;

me.bindCallbacks = createMap() ;

me.closed = false ;