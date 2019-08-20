

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
        reconnectCount = Number.MAX_VALUE,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.initialize(options) ;

        if(autoStart){

            me.start() ;
        }

        me.reconnectDelay = reconnectDelay ;

        me.reconnectCount = reconnectCount ;
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

    async start(){

        let me = this,
        {
            isConnected,
            isConnecting
        } = me ;

        if(isConnected || isConnecting){

            return;
        }

        me.state = 'connecting' ;

        if(!await me.onStart()){

            me.tryStart() ;
        }
    }

    async tryStart(count = 1){

        let me = this,
        {
            reconnectDelay,
            reconnectCount,
            isConnecting
        } = me ;

        if(isConnecting && !await me.onStart()){

            count ++ ;

            if(count <= reconnectCount){

                setTimeout(() => me.tryStart(count) , reconnectDelay) ;
            }
        }
    }

    async onStart(){

        let me = this ;

        try{

            await me.doStart() ;

        }catch(err){

            return false ;
        }

        me.state = 'connected' ;

        me.activate() ;

        return true ;
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