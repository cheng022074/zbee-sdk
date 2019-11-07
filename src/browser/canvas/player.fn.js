/**
 * 
 * 画板播放机
 * 
 * @import isObject from is.object.simple
 * 
 * @import Observable from mixin.observable
 * 
 * @import from from array.from
 * 
 * @param {canvas.Context} context 画板的上下文对象
 * 
 */

 
class main extends mixins({
    mixins:[
       Observable
    ]
}){

    constructor({
        context,
        user,
        autoPlay = true,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.context = context ;

        me.records = [] ;

        me.user = user ;

        if(autoPlay){

            me.play() ;
        }
    }

    set paused(isPaused){

        let me = this,
        {
            paused
        } = me;

        if(paused === isPaused){

            return ;
        }

        if(isPaused){

            clearTimeout(me.playerId) ;

            delete me.playerId ;

            me.fireEvent('pause') ;
        
        }else{

            launch.call(me , true) ;

            me.fireEvent('play') ;
        }
    }

    get paused(){

        return !this.hasOwnProperty('playerId') ;
    }

    put(record){

        let me = this,
        {
            records,
            user,
            isNeutral
        } = me;

        if(record.user === user){

            return ;
        }

        record = from(record) ;

        records.push(...record) ;

        me.fireEvent('recordput' , record) ;

        if(isNeutral){

            launch.call(me) ;
        }
    }

    get isNeutral(){

        return this.playerId === null ;
    }

    /**
     * 
     * 播放
     * 
     */
    play(){

        this.paused = false ;
    }

    /**
     * 
     * 暂停
     * 
     */
    pause(){

        this.paused = true ;
    }
 }

 function launch(isBegin = false){

    let me = this,
    {
        records,
        cursor = 0,
        context
    } = me,
    record = records[cursor];

    if(isObject(record)){

        let {
            api,
            params,
            delay
        } = record ;

        if(isBegin){

            if(api === 'browser.canvas.brush.move'){

                api = 'browser.canvas.brush.start' ;

                delay = 0 ;
            }

        }

        me.playerId = setTimeout(() => {

            include(api)(context , params) ;

            records[cursor] = null ;

            me.cursor = cursor + 1 ;

            launch.call(me) ;

            me.fireEvent('recordplayed' , api , params , delay) ;

        } , delay) ;
    
    }else{

        me.playerId = null ;
    }
 }