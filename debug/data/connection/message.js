
/**
 * 
 * 调试消息机
 * 
 * @import Message from data.connection.message value
 * 
 */

 let A = {
    aaa({
       data
    }){

      return '哈哈' ;
    },

    bbb({
       data
    }){

      console.log('返回数据' , data) ;
    }
 } ;


Message.subscribe('xxxxx').bind('aaa' , A) ;

let subscriber = Message.subscribe('yyyyy').bind('bbb' , A) ;

console.log(subscriber.name) ;

subscriber.send('xxxxx' , 'Hello World') ;