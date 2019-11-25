
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
        data,
        matchOnlyOnce
    } = me ;

if(isDefined(message)){

    subscribers = subscribers.values() ;

    for(let subscriber of subscribers){

        if(!subscriber.closed && me.validateMessage(subscriber , message)){

            let processedData = me.processData(subscriber , message) ;

            if(isDefined(processedData)){

                if(matchOnlyOnce){

                    break ;
                }
            }
        }
    }
        
}