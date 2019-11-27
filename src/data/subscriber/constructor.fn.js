/**
 * 
 * 初始化订阅器
 * 
 * @import get from function.get
 * 
 * @import add from event.listener.add
 * 
 * @import emptyFn from function.empty value
 * 
 * @import from from array.from
 * 
 * @param {data.connection} connection 当前订阅器所在的连接对象
 * 
 * @param {string} name 订阅名称
 * 
 * @param {object} config 订阅器配置
 * 
 * @param {string} config.fullName 订阅器全称
 * 
 * @param {function} [config.processData] 处理数据方法
 *  
 * @param {object} [config.listeners = {}] 来自古地外部事件监听
 * 
 * @param {mixed} [config.params] 默认打开的订阅参数
 * 
 * @param {boolean} [config.autoOpen = true] 是否自动打开订阅器
 * 
 * @param {object} [config.extraParams = {}] 附加参数
 * 
 * @param {object} [config.defaultParams = {}] 默认参数
 * 
 * @param {function} config.fn 订阅函数
 * 
 * @param {boolean} [config.once = false] 仅订阅一次即取消
 * 
 * @param {mixed} [config.scope] 订阅函数作用域
 * 
 * @param {string} [config.namespace] 命名空间
 * 
 * @param {function} [config.processAcceptData] 处理接收数据的方法
 * 
 * @param {function} [config.cacheAcceptData] 缓存接收数据方法
 * 
 * @param {function} [config.getCacheData] 获取缓存数据 
 * 
 */


let me = this ;

me.name = name ;

me.fullName = fullName ;

me.connection = connection ;

me.$bubbleTarget = connection ;

me.processData = processData || (({
    data
}) => data) ;

me.cacheAcceptData = cacheAcceptData ||  emptyFn;

me.processAcceptData = processAcceptData || (data => data) ;

me.getCacheData = getCacheData || (data => data) ;

me.extraParams = extraParams ;

me.defaultParams = defaultParams ;

me.bindFn = get(fn , scope) || emptyFn;

add(me , {
    ...listeners,
    scope
}) ;

if(autoOpen){

    me.open(params) ;
}

if(once === true){

    add(me , 'data' , () => connection.unsubscribe(name , namespace) , {
        once:true
    }) ;
}
