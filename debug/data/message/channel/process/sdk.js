
/**
 * 
 * SDK
 * 
 * @import create from promise.create
 * 
 * @import createChannel from data.message.channel.process.child
 * 
 */

let channel = createChannel({
    rootAddress:'sdk',
    addresses:{
        single(name){

            console.log('收到信息' , name) ;

            return `${name} 是一名前端工程师` ;
        },
        multi(name){

            let count = 0,
                id;

            return create(resolve => id = setInterval(() =>  resolve(`${name} - 推送${count ++}`) , 1000) , () => {

                console.log('收到取消请求' , id) ;

                clearInterval(id) ;

            }) ;
        }
    }
}) ;