
/**
 * 
 * 接收消息数据
 * 
 * @import is.defined
 * 
 * @param {mixed} [...args] 可选参数
 * 
 * @return {object} 消息体 
 * 
 */

let me = this,
    message = me.processMessage(...args),
    {
        subscribers,
        data
    } = me,
    isAccept = false;

if(isDefined(message)){

    subscribers.forEach(subscriber => {

        if(!subscriber.closed && me.validateMessage(subscriber , message)){

            subscriber.accept(me.processData(subscriber , message)) ;
    
            isAccept = true ;
        }
    
    }) ;
}

return isAccept;