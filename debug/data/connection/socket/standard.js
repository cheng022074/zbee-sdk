/**
 * 
 * 调试标准 WebSocket 连接器
 * 
 * @import Socket from data.connection.socket.standard value
 * 
 */

 let socket = new Socket({
     socket:{
         url:'wss://hqservice.ghzq.com.cn/socket/echo'
     },
     listeners:{
         connect(){

            console.log('connect') ;
         },

         lostconnect(){

            console.log('lostconnect') ;
         }
     }
 }) ;