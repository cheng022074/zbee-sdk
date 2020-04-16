
/**
 * 
 * 传统事件管理
 * 
 * @import createMap from map
 * 
 * @import doDispatch from browser.event.dispatch
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @once
 * 
 */

 const nameRe = /(?:start|end)$/ ;

 function dispatch(event , params){

    doDispatch(this , `gesture:${event}`  , params) ;
 }

 function getEvents(name){

    let events = include(`browser.event.gesture.${name}.event`)() ;

    if(isString(events)){

        return [
            events
        ] ;
    }

    return events ;
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

        let scope = {
            dispatch:dispatch.bind(el)
        },
        gestureEvents = getEvents(name),
        isAddMainListener = false,
        listeners = [];

        for(let event of gestureEvents){

            if(isString(event) && !isAddMainListener){

                let listener = include(`browser.event.gesture.${name}`).bind(scope) ;

                listeners.push(listener) ;

                el.addEventListener(event , listener , {
                    passive:false
                }) ;

                isAddMainListener = true ;
            
            }else if(isObject(event)){

                let {
                    event:name,
                    listener:fn
                } = event,
                listener = fn.bind(scope);

                listeners.push(listener) ;

                el.addEventListener(name , listener , {
                    passive:false
                }) ;
            }
        }

        events.set(el , name , listeners) ;
    }

    uninstall(el , name){

        let {
            events
        } = this,
        listeners = events.get(el , name);

        if(isArray(listeners)){

            let gestureEvents = getEvents(name),
                {
                    length:len
                } = gestureEvents;

            for(let i = 0 ; i < len ; i ++){

                let event = gestureEvents[i],
                    listener = listeners[i];

                if(isString(event)){

                    el.removeEventListener(event , listener) ;
                
                }else if(isObject(event)){

                    let {
                        event:name
                    } = event ;

                    el.removeEventListener(name , listener) ;
                }
            }

            events.delete(el , name) ;
        }

        
    }
 }