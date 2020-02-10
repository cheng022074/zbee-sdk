
/**
 * 
 * 调试消息通道子进程
 * 
 * @import create from promise.create
 * 
 * @import createChannel from data.message.channel.process.child
 * 
 */

let channel = createChannel({
    addresses:{
        single(name){

            console.log('收到信息' , name) ;

            return `${name} 是一名前端工程师` ;
        },
        multi(){

            return create(resolve =>{

                setInterval(() =>  resolve('推送') , 1000) ;

            } , () =>{}) ;
        }
    }
}) ;