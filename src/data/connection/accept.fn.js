
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
    acceptedSubscribers = [] ;

if(isDefined(message)){

    subscribers.forEach(subscriber => {

        if(!subscriber.closed && me.validateMessage(subscriber , message)){

            let processedData = me.processData(subscriber , message) ;

            if(processedData){

                subscriber.accept(processedData) ;

                acceptedSubscribers.push(subscriber) ;
            }
        }
    
    }) ;
}

return acceptedSubscribers;