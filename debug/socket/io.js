/**
 * 
 * @import Socket from socket.io value
 * 
 */

 let socket = new Socket('http://121.40.129.195:8292/message') ;

 socket.on('connect' , () => {

    console.log('连接成功') ;

 }) ;