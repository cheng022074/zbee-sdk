/**
 * 
 * 调试标准 WebSocket 连接器
 * 
 * @import Socket from data.connection.socket.standard value
 * 
 * @import Manager from data.connection.socket.manager value
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

         disconnect(){

            console.log('disconnect') ;

         },

         lostconnect(){

            console.log('lostconnect') ;
         }
     }
 }) ;