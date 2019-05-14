
/**
 * 
 * 调试消息机
 * 
 * @import Message from data.connection.message value
 * 
 */

 let A = {
    aaa(){

      return '哈哈' ;
    },

    ccc(){

     return '嘿嘿' ;
   },

    bbb({
       data
    }){

      console.log('返回数据' , data) ;
    }
 } ;


Message.subscribe('xxxxx').bind('aaa' , A) ;

Message.subscribe('xxxxx').bind('ccc' , A) ;

let subscriber = Message.subscribe('yyyyy').bind('bbb' , A) ;

subscriber.send('xxxxx' , 'Hello World') ;