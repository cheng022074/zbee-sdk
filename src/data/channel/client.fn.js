
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
 * @import remove from event.listener.remove
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

        fireEvent.call(this , data , params , 'error') ;
    }

    onData(client , data , params){

        fireEvent.call(this , data , params) ;
    }

    async send(params , isReturnData = false){

        let me = this,
            target = get(me , 'target'),
            data;

        if(isReturnData){

            data = new Promise(callback => {

                let event = getEventName.call(me , params),
                    listener = (client , data , currentParams) => {

                        if(params === currentParams){

                            remove(me , event , listener) ;

                            callback(data) ;
    
                        }

                    } ;

                add(me , event , listener) ;

            }) ;
            
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

 function fireEvent(data , params , eventSuffix = ''){

    let me = this ;

    me.fireEvent(`${getEventName.call(me , params)}${eventSuffix}` , data , params) ;
 }