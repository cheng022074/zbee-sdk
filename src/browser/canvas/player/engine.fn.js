
/**
 * 
 * 播放器引擎
 * 
 * @import Observable from mixin.observable
 * 
 * @import is.number
 * 
 * @import add from event.listener.add
 * 
 * @param {browser.canvas.Player} player 播放器
 * 
 * 
 */

 class main extends mixins({
    mixins:[
       Observable
    ]
}){

    constructor({
        player,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.player = player ;

        add(player , 'add' , 'onPlayerAdd' , {
            scope:me
        }) ;
    }

    onPlayerAdd(player , user){

        this.start(user) ;
    }

    get isRunning(){

        return this.hasOwnProperty('runId') ;
    }

    start(user){

        let me = this,
        {
            isRunning,
            player
        } = me ;

        if(!isRunning){

            user = user || player.activeUser ;

            if(user){

                launch.call(me , user) ;
            }
        }
    }

    end(){

        let me = this,
        {
            runId
        }= me ;

        if(isNumber(runId)){

            clearTimeout(runId) ;
        }

        delete me.runId ;
    }
 }

 function launch(user) {
     
    let me = this,
    {
        player
    } = me,
    {
        cursor,
        records
    } = user;

    let record = records[cursor];

    if(record){
        
        let {
            api,
            params,
            delay
        } = record ;

        user.cursor = cursor + 1;

        if(isNumber(delay)){

            me.runId = setTimeout(() => {

                include(`browser.canvas.record.api.${api}`).call(player , params) ;
    
                launch.call(me , user) ;
    
            } , delay) ;
        
        }else{

            me.runId = null ;

            include(`browser.canvas.record.api.${api}`).call(player , params) ;
    
            launch.call(me , user) ;
        }
    
    }else{

        me.end() ;

        me.start() ;
    }
 }