/**
 * 
 * 调试 socket.io 连接器
 * 
 * @import Socket from data.connection.socket.io value
 * 
 * @import Manager from data.connection.socket.manager value
 * 
 */

 let socket = new Socket({
     socket:{
         url:'http://121.40.129.195:8292/message'
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