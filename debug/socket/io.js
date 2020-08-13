/**
 * 
 * @import Socket from socket.io value
 * 
 */

 let socket = new Socket({
    url:'http://121.40.129.195:8292/message',
    reconnection:{
        delay:3000,
        max:3
    }
 }) ;

 socket.on('connect' , () => {

    console.log('连接成功') ;

 }) ;

 socket.on('reconnecting' , (socket , count) => {

    console.log('尝试重连' , count) ;

 }) ;

 socket.on('disconnect' , () => {

    console.log('已失联') ;

 }) ;