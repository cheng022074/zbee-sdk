
/**
 * 
 * 开始事件监听
 * 
 * @import stop from browser.event.stop
 * 
 * @import .contextmenu.event
 *
 * @param {Event} e 事件对象
 * 
 */

stop(e) ;

let {
    button
} = e ;

if(e.button === 2){

    this.dispatch('contextmenu' , {
        nativeEvent:e
    }) ;
    
}