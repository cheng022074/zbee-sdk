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

    constructor(url , userId){

        super({
            url
        }) ;

        this.userId = userId ;
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

    processSubscribeParams(id , params){

        return {
            id,
            params
        };
    }

    createSubscriber(params){

        return new XYSubscriber(this , params) ;
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

    isAcceptMessage({
        userId
    }){

        return this.userId === userId ;
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
        topic
    }){

        let {
            socket
        } = this ;

        return {
            topic,
            userId:socket.userId
        } ;
    }

    processData(message){

        return message.msg.data ;
    }

    validate({
        topic,
        msg
    }){

        let {
            type,
            op
        } = msg ;

        let {
            type:paramType,
            op:paramOp,
            topic:paramTopic
        } = this.params;

        return topic === paramTopic &&  paramType === type && paramOp === op;
    }
 }

let socket = new XYSocket('http://121.40.129.195:8292/message' , '411') ;

socket.subscribe('ok.create.todo').bind(data =>{

    console.log('todo1' , data) ;

}) ;

socket.subscribe('ok.create.todo').bind(data =>{

    console.log('todo2' , data) ;

}) ;

socket.subscribe('ok.create.msg').bind(data =>{

    console.log('消息' , data) ;

}) ;