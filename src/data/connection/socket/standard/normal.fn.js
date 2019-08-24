/**
 * 
 * 基于标准 WebSocket 进行开发
 * 
 * @import Connection from data.connection.socket.standard value
 * 
 * @require ws
 * 
 * @class
 * 
 */

 const WebSocket = require('ws') ;

 class main extends Connection{

    get WebSocket(){

        return WebSocket ;
    }

    
 }