
/**
 * 
 * 持续消息断开
 * 
 * @param {string} id 消息编号
 * 
 */

let {
    messages
 } = this ;

 if(messages.hasOwnProperty(id)){

    let {
        connectCount
    } = message ;

    if(connectCount > 0){

        message.connectCount -- ;
    }
 }