
/**
 * 
 * 初始化订阅器
 * 
 * @import createMap from map
 * 
 * @param {string} name 订阅名称
 * 
 * @param {object} config 订阅器配置
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

me.recentData = null ;

me.bindCallbacks = createMap() ;

me.closed = true ;