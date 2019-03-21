/**
 * 
 * 基于 AJAX 进行数据交互存储器测试
 * 
 * @import createStore from data.connection.store.ajax
 * 
 */

let store = createStore('http://quote.cmschina.com/secuInfo/F10/OtbIllBas/SH/:id' , {
    path:{
        id:'600509'
    }
}).watch(data =>{

    console.log(data) ;

}) ;

setInterval(() =>{

    store.reload() ;

} , 1000) ;