/**
 * 
 * 调试 socket.io 版本
 * 
 * @import Socket from data.connection.socket.io value
 * 
 * @import from from array.from
 * 
 */

 class XYSocket extends Socket{

    processSubscribeParams(subscriber , {
        userId,
        topic
    }){

        return [{
          subs:[{
            userId,
            topic
          }]
        }] ;
    }

    processMessage({
        topic,
        userId,
        msg
    }){

        let {
            type,
            op,
            ...data
        } = JSON.parse(msg) ;

        return {
            params:{
                topic,
                userId,
                type,
                op
            },
            data
        } ;
    }
 }

let socket = new XYSocket({
    socket:{
        url:'http://47.98.20.182:8292/message'
    },
    rules:[{
        test:'^(\\w+)\\.(\\w+)\\.(\\w+)$',
        use(id , topic , op , type){

            return {
                extraParams:{
                    topic,
                    op,
                    type
                }
            } ;
        }
    }]
}) ;

let subscriber = socket.subscribe('ok.create.todo' , {
    autoOpen:false
}).bind(data =>{

    console.log('todo1' , data) ;

}) ;

setTimeout(() =>{

    subscriber.open({
        userId:'333'
    }) ;

} , 5000) ;
