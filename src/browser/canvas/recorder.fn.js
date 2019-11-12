
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

    record(api , params , async = true){

        let me = this,
        {
            user,
            previousTime
        } = me,
        record = {
            user,
            api,
            params
        } ;

        if(async){

            record.delay = Date.now() - previousTime ;
        
        }

        me.previousTime = Date.now() ;

        me.fireEvent('record' , record) ;
    }
 }