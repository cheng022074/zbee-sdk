
/**
 * 
 * 实例化观察者
 * 
 * 
 * @param {Server} server 所绑定的 Web 服务
 * 
 * 
 */

const Socket = require('socket.io') ;

let me = this ;

(me.$server = Socket(server)).on('connection', client =>{

    client.on('observer:dispatch' , ({
        name,
        args
    }) =>{

        if(me.hasOwnProperty('$watchFn')){

            me.$watchFn(name , args) ;
        }
    }) ;

});
