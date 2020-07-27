/**
 * 
 * @import Socket from socket.io value
 * 
 */

 let socket = new Socket({
    url:'http://121.40.129.195:8292/message'
 }) ;

 socket.on('connect' , () => {

    console.log('连接成功') ;

 }) ;

 socket.on('disconnect' , () => {

    console.log('已失联') ;

 }) ;