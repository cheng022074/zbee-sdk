/**
 * 
 * 针对 WebSocket 进行调试
 * 
 * @import createAjax from data.connection.ajax
 * 
 */


let ajax = createAjax({
    url:'http://quote.cmschina.com/secuInfo'
}) ;

let loader = ajax.load('F10/OtbIllBas/SH/:id' , {
    path:{
        id:'600509'
    }
}).bind(data => {

    console.log(data) ;

}) ;

setTimeout(() =>{

    loader.reload() ;

} , 2000) ;