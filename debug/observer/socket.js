
/**
 * 
 * @import Socket from observer.socket
 * 
 * 观察者 Socket 版调试
 * 
 */

const {
    createServer
} = require('http') ;

let server = createServer(),
    socket = new Socket(server) ;

socket.watch((name , args) =>{

    console.log(name , args) ;
}) ;

server.listen(3000) ;
