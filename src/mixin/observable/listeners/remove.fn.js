
/**
 * 
 * 去除一组事件监听
 * 
 * @param {object} listeners 事件监听
 * 
 */

let me = this,
    events = Object.keys(listeners) ;

for(let event of events){

    let listener = listeners[event] ;

    if(isObject(listener)){

        let {
            fn
        } = listener ;

        me.removeListener(event , fn) ;

    }else if(isFunction(listener)){

        me.removeListener(event , listener) ;
    }
}