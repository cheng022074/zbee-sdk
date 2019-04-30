
/**
 * 
 * 添加一组事件监听
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @param {object} listeners 事件监听配置
 * 
 */

let me = this,
    events = Object.keys(listeners),
    {
        scope,
        ...realListeners
    } = listeners;

listeners = realListeners ;

for(let event of events){

    let listener = listeners[event] ;

    if(isObject(listener)){

        let {
            fn,
            scope:listenerScope,
            ...options
        } = listener ;

        me.addListener(event , fn , listenerScope || scope , options) ;

    }else if(isFunction(listener)){

        me.addListener(event , listener , scope) ;
    }
}