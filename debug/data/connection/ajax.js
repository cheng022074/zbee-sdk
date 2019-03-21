/**
 * 
 * 针对 WebSocket 进行调试
 * 
 * @import ajax from data.connection.ajax
 * 
 */

ajax('http://quote.cmschina.com/secuInfo/F10/OtbIllBas/SH/:id' , {
    path:{
        id:'600509'
    }
}).then(data =>{

    console.log(data) ;

}) ;