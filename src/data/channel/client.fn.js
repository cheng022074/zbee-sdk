
/**
 * 
 * 数据通道客户端基本实现
 * 
 * @import get from object.property.inner.get
 * 
 * @import add from event.listener.add
 * 
 * @import is.string
 * 
 * @import Channel from ..channel value
 * 
 * @class
 * 
 */

class main extends Channel{

    constructor(target){

        super(target) ;

        let me = this ;

        add(me , {
            data:'onData',
            scope:me
        }) ;
    }

    getEventNameByParams(params){

        return this.target.getEventNameByParams(params) ;
    }

    onData(client , data , params){

        let event = target.callIf('getEventNameByParams' , params) ;

        if(isString(event)){

            this.fireEvent(event , data , params) ;
        }
    }

    async send(params){

        let target = get(this , 'target') ;

        return await target.call('send' , params) ;
    }

    async cancel(params){

        let target = get(this , 'target') ;

        return await target.call('cancel' , params) ;
    }
 }