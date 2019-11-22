
/**
 * 
 * 订阅后获取数据后立即取消订阅，并返回获得数据
 * 
 * @import assign from object.assign
 * 
 * @import getName from .subscribe.name
 * 
 * @param {string} name 订阅名称
 * 
 * @param {object} [options = {}] 订阅配置
 * 
 * @return {Promise}
 * 
 */

 let me = this ;

 return new Promise(fn =>  me.subscribe(name , {
    ...options,
    fn,
    once:true
})) ;