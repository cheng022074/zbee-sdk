/**
 * 
 * 调试 socket.io 版本
 * 
 * @import Socket from data.connection.socket.io value
 * 
 * @import Subscriber from data.connection.socket.Subscriber value
 * 
 */

 class XYSocket extends Socket{

    constructor(userId){

        super({
            url:'http://121.40.129.195:8292/message'
        }) ;

        this.userId = userId ;
    }

    processSubscribeParams(topic , params , options){

        return {
            topic,
            params,
            options
        }
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

    constructor(socket , {
        topic,
        params,
        options = {}
    }){

        super(socket , {
            params,
            ...options
        }) ;

        let me = this ;

        me.topic = topic ;

    }

    validate({
        msg
    }){

        let {
            type,
            op
        } = msg ;

        let {
            type:paramType,
            op:paramOp
        } = this.params;

        return  paramType === type && paramOp === op;
    }

    get remoteParams(){

        let {
            topic,
            socket
        } = this ;

        return {
            subs:[{
                topic,
                userId:socket.userId
            }]
        }
    }
 }

let socket = new XYSocket('411') ;

socket.subscribe('ok' , {
    op:'create',
    type:'todo'
}).bind(({
    msg
}) =>{

    console.log(msg.type) ;

}) ;

socket.subscribe('ok' , {
    op:'create',
    type:'todo'
}).bind(({
    msg
}) =>{

    console.log(msg.type) ;

}) ;

socket.subscribe('ok' , {
    op:'create',
    type:'msg'
}).bind(({
    msg
}) =>{

    console.log(msg.type) ;

}) ;