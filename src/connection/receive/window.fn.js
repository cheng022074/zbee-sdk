/**
 * 
 * 在浏览器中向另一个窗口发送消息
 *
 */

return new Promise(callback =>{

    window.addEventListener('message' , ({
        data
    }) =>{
    
        callback(data) ;
    }) ;

}) ;

