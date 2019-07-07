
/**
 * 
 * 调试消息机
 * 
 * @import Message from data.connection.message value
 * 
 * @import deploy from data.connection.deploy.module
 * 
 */

 deploy({
   message:Message
 } , {

    message_subscribers:{
      'test':'test'
    },

    test(){

      console.log('此方法被调用') ;
    }

 }) ;

 Message.send('test') ;
