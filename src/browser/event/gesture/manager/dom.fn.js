
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
 * @import on from ....listener.element.add
 * 
 * @import off from ....listener.element.remove
 * 
 * @config eventConfig from event
 * 
 * @once
 * 
 */

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

 function getName(name){

    return eventConfig[name] ;
 }

 class main {

    constructor(){

        let me = this ;

        me.events = createMap() ;

    }

    install(el , name , options = {}){

        let {
            events
        } = this ;

        name = getName(name);

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

                on(el , event , listener , options) ;

                isAddMainListener = true ;
            
            }else if(isObject(event)){

                let {
                    event:name,
                    listener:fn
                } = event,
                listener = fn.bind(scope);

                listeners.push(listener) ;

                on(el , name , listener , options) ;
            }
        }

        events.set(el , name , listeners) ;
    }

    uninstall(el , name){

        name = getName(name);

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

                    off(el , event , listener) ;

                }else if(isObject(event)){

                    let {
                        event:name
                    } = event ;

                    off(el , name , listener) ;
                }
            }

            events.delete(el , name) ;
        }

        
    }
 }