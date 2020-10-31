
/**
 * 
 * 数据通道
 * 
 * @import Observable from mixin.observable
 * 
 * @import generate from id.generate
 * 
 * @import on from event.listener.add
 * 
 * @class
 * 
 */

class main extends mixins({
    mixins:[
        Observable
    ]
}){

    constructor(receivers = {}){

        let me = this ;

        me.connected = false ;

        me.receivers = receivers ;

        on(me , {
            connect:'onConnect',
            scope:me
        }) ;
    }

    generateCallID(){

        return generate(Date.now()) ;
    }

    notifyConnect(){

        let me = this ;

        me.connected = true ;

        me.fireEvent('connect') ;
    }

    async receive(id , name , params){

        let me = this,
        {
            receivers
        } = me;

        if(receivers.hasOwnProperty(name)){

            me.reply(id , await receivers[name](params)) ;
        }
    }

    reply(id , returnValue){

        
    }

    async send(name , params , {
        returnMode = 'single'
    }){

        let me = this,
        {
            connected
        } = me ;

        if(connected){

            let id = me.generateCallID() ;

            me.doSend(id , name , params) ;

            switch(returnMode){

                case 'single':

                    return await new Promise(callback => on(me , id , data => callback(data) , {
                        once:true
                    })) ;

                case 'multi':

                    return id ;
            }

        }

        return await new Promise(callback => on(me , 'connect' , async () => callback(await call(name , params , options)) , {
            once:true
        })) ;
    }

    doSend(id , name , params){


    }
}