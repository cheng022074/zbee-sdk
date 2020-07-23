
/**
 * 
 * 数据通道客户端基本实现
 * 
 * @import get from object.property.inner.get
 * 
 * @import define from object.property.inner.define
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

        let me = this,
        {
            __ZBEE_CLASS_NAME__
        } = me;

        if(__ZBEE_CLASS_NAME__ === 'src::data.channel.client'){

            add(me , {
                data:'onData',
                dataerror:'onErrorData',
                scope:me
            }) ;

            define(me , 'defaultEventName' , `${__ZBEE_CLASS_NAME__}-${Date.now()}`) ;
        }
    }

    getEventNameByParams(params){

        let target = get(this , 'target') ;

        if(target){

            return target.getEventNameByParams(params) ;
        }
    }

    onErrorData(client , data , params){

        let me = this ;

        me.fireEvent(`${getEventName.call(me , params)}error` , data , params) ;
    }

    onData(client , data , params){

        let me = this ;

        me.fireEvent(getEventName.call(me , params) , data , params) ;
    }

    async send(params , isReturnData = false){

        let me = this,
            target = get(me , 'target'),
            data;

        if(isReturnData){

            data = new Promise(callback => add(me , getEventName.call(me , params) , (client , data) => callback(data) , {
                once:true
            }) ) ;
            
        }

        let state = await target.call('send' , params) ;

        if(isReturnData){

            return data ;
        }

        return state ;

    }

    async cancel(params){

        let target = get(this , 'target') ;

        return await target.call('cancel' , params) ;
    }
 }

 function getEventName(params){

    let me = this ;

    return get(me , 'target').callIf('getEventNameByParams' , params) || get(me , 'defaultEventName');

 }