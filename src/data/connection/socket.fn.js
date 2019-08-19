

/**
 * 
 * Socket 通信
 * 
 * @import createTimer from timer
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
        heartbeatInterval = 3000,
        heartbeatTimeout = 3000,
        reconnectDelay = 1000,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.initialize(options) ;

        if(autoStart){

            me.start() ;
        }

        me.heartbeatTimer = createTimer({
            duration:heartbeatInterval,
            interval:heartbeatInterval,
            listeners:{
                timeend:'onHeartbeat',
                scope:me
            }
        }) ;

        me.heartbeatTimeoutTimer = createTimer({
            duration:heartbeatTimeout,
            autoStart:false,
            listeners:{
                timeend:'onHeartbeatTimeout',
                scope:me
            }
        }) ;

        me.reconnectDelay = reconnectDelay ;
    }

    onHeartbeatTimeout(){

        let me = this ;

        me.doHeartbeatCancel(me.heartbeatCancel) ;

        delete me.heartbeatCancel ;

        me.restart() ;
    }

    onHeartbeat(){

        let me = this,
            {
                heartbeatTimer,
                heartbeatTimeoutTimer
            } = me ;

        heartbeatTimeoutTimer.start() ;

        me.heartbeatCancel = me.doHeartbeatStart(() =>{

            heartbeatTimeoutTimer.cancel() ;

            heartbeatTimer.start() ;

        }) ;
    }

    doHeartbeatStart(){


    }

    doHeartbeatCancel(cancel){


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

        let me = this ;

        await me.end() ;

        await me.start() ;

        me.fireEvent('restart') ;
    }

    async start(){

        let me = this,
        {
            isConnected,
            isConnecting
        } = me ;

        if(isConnected || isConnecting){

            return ;
        }

        me.state = 'connecting' ;

        try{

            await me.doStart() ;
        
        }catch(err){

            let {
                reconnectDelay
            } = me ;

            setTimeout(() => me.start() , reconnectDelay) ;

            return ;
        }

        me.state = 'connected' ;

        me.activate() ;
    }

    activate(){

        let me = this,
        {
            state
        } = me;

        if(state === 'disconnected'){

            super.activate() ;
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

    async deactivate(){

        let me = this,
        {
            state
        } = me;

        if(state === 'disconnected'){

           super.deactivate() ;
        }
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