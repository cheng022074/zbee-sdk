
/**
 * 
 * 调试通道
 * 
 * @import Channel from data.connection.channel value
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

connection.function('add' , ({
    value1,
    value2
}) =>{

    return new Promise(callback =>{

        let value = value1 + value2 ;

        setTimeout(() =>{
    
            callback(value) ;
    
        } , 1000) ;

    }) ;
}) ;

connection.call('add' , {
    value1:1,
    value2:5
}).then(result => console.log('结果1' , result)) ;

connection.call('add' , {
    value1:10,
    value2:5
}).then(result => console.log('结果2' , result)) ;