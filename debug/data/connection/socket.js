/**
 * 
 * 针对 WebSocket 进行调试
 * 
 * @import createSocket from data.connection.socket.io
 * 
 */

let socket = createSocket('http://118.31.105.13:83/message') ;

socket.on('msg' , ({
    msg
}) => console.log('接收消息' , JSON.parse(msg))) ;

socket.emit('sub' , {
    subs:[{
        appId:"OK!",
        userId:"陈治文"
    }]
}) ;