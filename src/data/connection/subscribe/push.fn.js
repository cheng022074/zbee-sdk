
/**
 * 
 * 订阅后进行推送
 * 
 * @import assign from object.assign
 * 
 * @import createPusher from data.pusher
 * 
 * @param {string} name 订阅名称
 * 
 * @param {object} [options = {}] 订阅配置
 * 
 * @return {Promise}
 * 
 */

 let me = this,
     subscriber ;

return createPusher(fn => subscriber = me.subscribe(name , {
    ...options,
    fn
}) , () => {

    subscriber.destroy() ;

    subscriber = null ;
}) ;