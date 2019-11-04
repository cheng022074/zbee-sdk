
/**
 * 
 * 画板录制机
 * 
 * @import Observable from mixin.observable
 * 
 * @import array.clear
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
        ...options
    }){

        super(options) ;

        let me = this ;

        me.context = context ;

        me.records = [] ;

        me.paused = false ;

        me.startPlayIndex = 0 ;
    }

    async play(){

        let me = this,
        {
            context,
            records,
            startPlayIndex
        } = me,
        len = records.length;

        me.paused = false ;

        if(startPlayIndex !== 0){

            let {
                api,
                params
            } = records[startPlayIndex - 1] ;

            if(api === 'browser.canvas.brush.move'){

                include('browser.canvas.brush.start')(context , params) ;
            }
        }

        for(let i = startPlayIndex ; i < len ; i ++){

            if(me.paused === true){

                me.startPlayIndex = i ;

                return ;
            }

            let {
                api,
                params,
                delay
            } = records[i] ;

            await new Promise(callback => {

                setTimeout(() =>{

                    include(api)(context , params) ;

                    callback() ;

                } , delay) ;

            }) ;
        }

        me.startPlayIndex = 0 ;
    }

    pause(){

        this.paused = true ;
    }

    reset(){

        let me = this ;

        me.paused = false ;

        arrayClear(me.records) ;
    }

    record(api , params){

        let me = this,
        {
            records
        } = me,
        record = {
            api,
            params,
            time:Date.now(),
            delay:0
        } ;

        let previousRecord = records[records.length - 1] ;

        if(previousRecord){

            record.delay = record.time - previousRecord.time ;
        }

        records.push(record) ;
    }
 }