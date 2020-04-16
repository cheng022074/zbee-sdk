
/**
 * 
 * 开始事件监听
 * 
 * @import .contextmenu.event
 *
 * @param {Event} e 事件对象
 * 
 */

let {
    button
} = e ;

if(e.button === 2){

    this.dispatch('contextmenu' , {
        nativeEvent:e
    }) ;
    
}