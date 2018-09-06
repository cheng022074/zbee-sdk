/**
 * 
 * 在浏览器中向另一个窗口发送消息
 *
 * @param {Window} target 窗口对象
 * 
 * @param {object} message 消息体
 * 
 * @param {function} fn 回调函数
 * 
 */

target.postMessage(message , '*') ;

const 
callback = ({
    data
}) =>{

    if(fn(data) === true){

        window.removeEventListener('message' , callback) ;
    }
} ;

window.addEventListener('message' ,callback) ;