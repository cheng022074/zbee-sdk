/**
 * 
 * 调试 socket.io 版本
 * 
 * @import Socket from data.connection.socket.io value
 * 
 * @import Subscriber from data.connection.socket.subscriber value
 * 
 * @import from from array.from
 * 
 */

 class XYSocket extends Socket{

    constructor(options){

        super({
          subscriber:XYSubscriber,
          ...options
        }) ;
    }

    doSubscribe(params){

        return super.doSubscribe({
            subs:from(params)
        }) ;
    }

    doUnsubscribe(params){

        return super.doUnsubscribe({
            subs:from(params)
        }) ;
    }

    processMessage({
        topic,
        userId,
        msg
    }){

        return {
            topic,
            userId,
            msg:JSON.parse(msg)
        } ;
    }

    isAcceptMessage(){

        return true ;
    }
 }

 class XYSubscriber extends Subscriber{

    processID(id){

        let [
            ,
            topic,
            op,
            type
        ] = id.match(/(\w+)\.(\w+)\.(\w+)/) ;

        return {
            topic,
            op,
            type
        } ;
    }

    generateRemoteParams({
        topic,
        userId
    }){

        return {
            topic,
            userId
        } ;
    }

    processData(message){

        return message.msg.data ;
    }

    validate({
        topic,
        userId,
        msg
    }){

        let {
            type,
            op
        } = msg ;

        let {
            type:paramType,
            op:paramOp,
            topic:paramTopic,
            userId:paramUserId
        } = this.params;

        return paramUserId === userId && topic === paramTopic &&  paramType === type && paramOp === op;
    }
 }

let socket = new XYSocket({
    url:'http://121.40.129.195:8292/message'
}) ;

socket.subscribe('ok.create.todo' , {
    userId:'411'
}).bind(data =>{

    console.log('todo1' , data) ;

}) ;

socket.subscribe('ok.create.todo' ,  {
    userId:'411'
}).bind(data =>{

    console.log('todo2' , data) ;

}) ;

socket.subscribe('ok.create.msg' ,  {
    userId:'411'
}).bind(data =>{

    console.log('消息' , data) ;

}) ;