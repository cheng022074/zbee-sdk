
/**
 * 
 * 标准推送
 * 
 * @import Connection from data.connection.socket value
 * 
 * 
 */

 class main extends Connection{

    send(message){
        
    }

    doSubscriberOpen(message){

        this.send(message) ;
    }

    doSubscriberClose(message){

        this.send(message) ;
    }
 }