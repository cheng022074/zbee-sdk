

/**
 * 
 * Socket 通信
 * 
 * @import Connection from data.connection value
 * 
 * @import observable from mixin.observable
 * 
 * @class
 * 
 */

 class main extends mixins({
    extend:Connection,
    mixins:[
       observable
    ]
}){

    constructor({
        autoStart = true,
        reconnectDelay = 1000,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.initialize(options) ;

        if(autoStart){

            me.start() ;
        }

        me.reconnectDelay = reconnectDelay ;
    }

    initialize(options){

        
    }

    get isConnecting(){

        return this.state === 'connecting' ;
    }

    get isConnected(){

        return this.state === 'connected' ;
    }

    get isDisconnecting(){

        return this.state === 'disconnecting' ;
    }

    get isDisconnect(){

        return this.state === 'disconnected' ;
    }

  
    set state(state){

        let me = this,
        {
            $state
        } = me ;

        if($state !== state){

            me.$state = state ;

            me.fireEvent('statechange' , state , $state) ;
        }
    }

    get state(){

        let {
            $state
        } = this ;

        if(!$state){

            return 'disconnected' ;
        }

        return $state ;
    }

    async restart(){

        let me = this;

        await me.end() ;

        await me.start() ;

        me.fireEvent('restart') ;
    }

    async start(isTry = true){

        let me = this,
        {
            isConnected,
            isConnecting
        } = me ;

        if(isConnected || isConnecting){

            return true;
        }

        me.state = 'connecting' ;

        try{

            await me.doStart() ;
        
        }catch(err){

            if(isTry){

                me.tryStart() ;
            }

            return false;
        }

        me.state = 'connected' ;

        me.activate() ;

        return true ;
    }

    tryStart(count = 1){

        let me = this,
        {
            reconnectDelay,
            reconnectCount
        } = me ;


        if(!me.start(false)){

            count ++ ;

            if(count <= reconnectCount){

                setTimeout(() => me.tryStart(++ count) , reconnectDelay) ;
            }
        }

    }

    doStart(){


    }

    async end(){

        let me = this,
        {
            isDisconnected,
            isDisconnecting,

        } = me ;

        if(isDisconnected || isDisconnecting){

            return ;
        }

        me.state = 'disconnecting' ;

        await me.deactivate() ;

        await me.doEnd() ;

        me.state = 'disconnected' ;
    }

    doEnd(){


    }

    validateMessage({
        params:baseParams
    },{
        params:equalParams
    }){

        let names = Object.keys(equalParams) ;

        for(let name of names){

            if(baseParams[name] !== equalParams[name]){

                return false ;
            }
        }

        return true ;
    }
 }