
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

        let me = this,
        {
            __ZBEE_CLASS_NAME__
        } = me;

        if(__ZBEE_CLASS_NAME__ === 'src::data.channel.client'){

            add(me , {
                data:'onData',
                scope:me
            }) ;
        }
    }

    getEventNameByParams(params){

        let target = get(this , 'target') ;

        if(target){

            return target.getEventNameByParams(params) ;
        }
    }

    onData(client , data , params){

        let me = this,
            event = get(me , 'target').callIf('getEventNameByParams' , params) ;

        if(isString(event)){

            me.fireEvent(event , data , params) ;
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