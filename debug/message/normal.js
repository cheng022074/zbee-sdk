/**
 * 
 * @import getCenter from message.center
 * 
 */

let center = getCenter() ;

center.register('sender').send({
    to:'receiver::receive',
    payload:'Hello World'
}) ;

center.register('receiver').bind({
    receive(payload){

        console.log('接收负荷' , payload) ;
    }
}) ;

