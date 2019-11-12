
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
        user,
        ...options
    }){

        super(options) ;

        let me = this ;

        me.user = user ;

        me.previousTime = Date.now() ;
    }

    record(api , params , isTiming = true){

        let me = this,
        {
            user,
            previousTime
        } = me,
        record = {
            user,
            api,
            params,
            delay:0
        } ;

        if(isTiming){

            record.delay = Date.now() - previousTime ;
        }

        me.fireEvent('record' , record) ;
    }
 }