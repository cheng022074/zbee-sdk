
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
        user,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.context = context ;

        me.records = [] ;

        me.user = user ;
    }

    record(api , params , isTiming = true){

        let me = this,
        {
            records,
            context,
            user
        } = me,
        record = {
            user,
            api,
            params,
            time:Date.now(),
            delay:0
        } ;

        let previousRecord = records[records.length - 1] ;

        if(isTiming && previousRecord){

            record.delay = record.time - previousRecord.time ;
        }

        records.push(record) ;

        include(api)(context , params) ;

        me.fireEvent('record' , record) ;
    }
 }