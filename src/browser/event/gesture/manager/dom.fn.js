
/**
 * 
 * 传统事件管理
 * 
 * @import createMap from map
 * 
 * @once
 * 
 */

 const nameRe = /(?:start|end)$/ ;

 class main {

    constructor(){

        let me = this ;

        me.events = createMap() ;

    }

    install(el , name){

        let {
            events
        } = this ;

        name = name.replace(nameRe , '') ;

        if(events.has(el , name)){

            return ;
        }


        let listener = include(`browser.event.gesture.${name}.start`).bind({
            el
        });

        el.addEventListener(include(`browser.event.gesture.${name}.start.name`)() , listener) ;

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