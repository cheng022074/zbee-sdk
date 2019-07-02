
/**
 * 
 * 初始化订阅器
 * 
 * @import get from function.get
 * 
 * @param {string} name 订阅名称
 * 
 * @param {object} config 订阅器配置
 * 
 * @param {object} [config.innerListeners = {}] 来自于内部事件监听
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
 * @param {mixed} [config.scope] 订阅函数作用域
 * 
 */

let me = this ;

me.name = name ;

me.extraParams = extraParams ;

me.defaultParams = defaultParams ;

me.bindFn = get(fn , scope) ;

me.addListeners(innerListeners) ;

me.addListeners({
    ...listeners,
    scope
}) ;

if(autoOpen){

    me.open(params) ;
}
