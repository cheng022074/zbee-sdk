
/**
 * 
 * 结束事件监听
 * 
 * @import disabled from browser.event.gesture.tap.methods.disabled
 * 
 * @import dispatch from browser.event.dispatch
 * 
 * @import getEvent from browser.event.pointer
 * 
 * @import get from object.data.get
 * 
 * @import set from object.data.set
 * 
 * @param {Event} e 事件对象
 * 
 */

e.preventDefault() ;

let el = this,
    event = getEvent(e),
    defer = get(el , 'tap:defer');

dispatch(el , 'touch:beforetap' , {
    browserEvent:e,
    event:getEvent(e)
}) ;

if(defer){

    set(el , 'tap:deferTimer' , setTimeout(() =>{

        dispatch(el , 'touch:tap' , {
            browserEvent:e,
            event:getEvent(e)
        }) ;
        
        disabled(el) ;

    } , defer)) ;
    
}else{

    dispatch(el , 'touch:tap' , {
        browserEvent:e,
        event:getEvent(e)
    }) ;
    
    disabled(el) ;
}