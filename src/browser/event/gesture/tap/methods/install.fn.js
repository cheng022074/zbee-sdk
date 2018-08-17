
/**
 * 
 * 安装事件
 * 
 * @import onStart from browser.event.gesture.tap.methods.onStart
 * 
 * @import getEventName from browser.event.pointer.down
 * 
 * @import set from object.data.set
 * 
 * @param {HTMLElement} el 页面元素
 * 
 * @param {object} config 配置
 * 
 * 
 */

if(config){

    let {
        defer
    } = config ;

    if(defer){

        set(el , 'tap:defer' , defer) ;
    }
}

el.addEventListener(getEventName() , onStart) ;