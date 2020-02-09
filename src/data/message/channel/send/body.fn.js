
/**
 * 
 * 发送消息主体
 * 
 * @param {object} body 消息主体
 * 
 */

let me = this,
{
    proxy,
    addresses
} = me,{
    to
} = body;

if(addresses.hasOwnProperty(to)){

   me.receive(body) ;

}else{

   proxy.call('doSend' , body) ;
}