
/**
 * 
 * 传统事件管理
 * 
 * @import getName from ....name.start
 * 
 * @import createMap from map
 * 
 * @once
 * 
 */

 class main {

    constructor(){

        let me = this ;

        me.events = createMap() ;

    }

    install(el , name){

        let {
            events
        } = this,
        listener = include(`browser.event.gesture.${name}.start`).bind({
            el
        });

        el.addEventListener(getName(name) , listener) ;

        events.set(el , name , listener) ;
    }

    uninstall(el , name){

        let {
            events
        } = this,
        listener = events.get(el , name);

        if(listener){

            el.removeEventListener(getName(name) , listener) ;

            events.delete(el , name) ;
        }

        
    }
 }