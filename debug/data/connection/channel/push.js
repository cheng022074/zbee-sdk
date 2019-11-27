
/**
 * 
 * 调试通道
 * 
 * @import Channel from data.connection.channel value
 * 
 * @import MutilPromise from promise.multi value
 * 
 */

const {
    MessageChannel
} = require('worker_threads'),
{
    port1,
    port2
} = new MessageChannel();

let connection = new Channel({
    receiver:port1,
    sender:port2
}) ;

connection.function('count' , ({
    start
}) =>{

    return new MutilPromise(callback =>{

        setInterval(() => {

            callback(start ++) ;
            
        }, 1000);

    }) ;

}) ;

connection.pushOn('count' , {
    start:3
}).then(result =>{

    if(result === 10){
        
        connection.pushOff('count' , {
            start:3
        }) ;
    }

    console.log('结果1' , result) ;

}) ;

connection.pushOn('count' , {
    start:5
}).then(result =>{


    console.log('结果2' , result) ;

}) ;

