
/**
 * 
 * 传统事件管理
 * 
 * @import createMap from map
 * 
 * @import doDispatch from browser.event.dispatch
 * 
 * @once
 * 
 */

 const nameRe = /(?:start|end)$/ ;

 function dispatch(event , params){

    doDispatch(this , `gesture:${event}`  , params) ;
 }

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
            dispatch:dispatch.bind(el)
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