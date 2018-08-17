
/**
 * 
 * @import Socket from observer.socket.client
 * 
 * 观察者 Socket 版客户端调试
 * 
 */


let socket = new Socket('http://localhost:3000') ;

for(let i = 0 ; i < 100 ; i ++){

    socket.dispatchEvent('debug' , i) ;
}
