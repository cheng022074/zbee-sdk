
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
    }

    begin(api , params){

        record.call(this , api , params , 'start' , false) ;
    }

    record(api , params){

        record.call(this , api , params , 'process') ;
    }

    end(api , params){

        record.call(this , api , params , 'end' , false) ;
    }
 }

 function record(api , params , type , isCalcDelay = true){

    let me = this,
    {
        user,
        previousTime
    } = me,
    record = {
        type,
        user,
        api,
        params
    } ;

    if(isCalcDelay){

        record.delay = Date.now() - previousTime ;
    }

    me.previousTime = Date.now() ;

    me.fireEvent('record' , record) ;
 }