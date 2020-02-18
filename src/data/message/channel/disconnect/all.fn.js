
/**
 * 
 * 断开所有连接
 * 
 * @import disconnect from ..disconnect scoped
 * 
 */

 let {
    messages
 } = this;

 messages = Object.values(messages) ;

 let results = [] ;

 for(let message of messages){

    if(message.hasOwnProperty('connectCount')){

        message.connectCount = 0 ;

        results.push(disconnect(message)) ;
    }
 }

 return Promise.all(results) ;