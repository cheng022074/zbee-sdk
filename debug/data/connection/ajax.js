/**
 * 
 * 针对 WebSocket 进行调试
 * 
 * @import createAjax from data.connection.ajax
 * 
 */


let ajax = createAjax({
    ajax:{
        url:'http://quote.cmschina.com/secuInfo'
    }
}) ;

let subscriber = ajax.subscribe('F10/OtbIllBas/SH/:id' , {
    params:{
        path:{
            id:'600509'
        }
    }
}).bind(data => {

    console.log('xxxxxxxx' , data) ;

}) ;

setTimeout(() =>{

    subscriber.reopen() ;

} , 5000) ;