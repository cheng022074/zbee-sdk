
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


Message.subscribe('xxxxx' , {
  fn:'aaa',
  scope:A
}) ;

Message.unsubscribe('xxxxx') ;

Message.subscribe('xxxxx' , {
  fn:'ccc',
  scope:A
}) ;

let subscriber = Message.subscribe('yyyyy' , {
  fn:'bbb',
  scope:A
}) ;

subscriber.send('xxxxx' , 'Hello World') ;