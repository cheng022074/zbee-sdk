/**
 * 
 * 在浏览器中向另一个窗口发送消息
 *
 * @param {Window} window 窗口对象
 * 
 */

window.addEventListener('message' , ({
    data
}) =>{

    callback(data) ;
}) ;