
/**
 * 
 * 数据推送器
 * 
 * @import is.defined
 * 
 * @import clear from array.clear
 * 
 * @import defer from function.defer
 * 
 * @param {function} onOpen 当开始推送时回调函数
 * 
 * @param {function} onClose 当开始推送时回调函数
 * 
 */

 class main{

    constructor(onOpen , onClose){

        let me = this ;

        me.onOpen = onOpen ;

        me.onClose = onClose ;

        me.callbacks = [] ;

        defer(open , {
            scope:me
        }) ;
    }

    close(){

        let {
            callbacks,
            onClose
        } = this ;

        clear(callbacks) ;

        onClose() ;
    }

    push(callback){

        let me = this,
            {
                callbacks
            } = me;

        callbacks.push(callback) ;

        return me ;
    }
 }

 function open(){

    let me = this,
    {
        callbacks,
        onOpen
    } = me;

    onOpen(data => {

        for(let callback of callbacks){

            let result = callback(data) ;

            if(isDefined(result)){

                data = result ;
            }
        }

    }) ;
 }