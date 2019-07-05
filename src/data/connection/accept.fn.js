
/**
 * 
 * 接收消息数据
 * 
 * @param {mixed} [...args] 可选参数
 * 
 * @return {object} 消息体 
 * 
 */

let me = this,
    message = me.processMessage(...args),
    {
        subscribers
    } = me,
    results = [];

subscribers.forEach(subscriber => {

    if(!subscriber.closed && me.validateMessage(subscriber , message)){

        subscriber.accept(me.processData(subscriber , message)) ;

        results.push(subscriber) ;
    }

}) ;

return results ;