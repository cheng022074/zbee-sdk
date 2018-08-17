
/**
 * 
 * 手势事件的VUE插件
 * 
 * @import is.function
 * 
 * @import isObject from is.object.simple
 * 
 * @config plugins from vue...gestures
 * 
 * @once
 * 
 * @scoped
 * 
 * @return {object} VUE插件配置 
 * 
 */

const events = {};

function process_event_name(name){

    return `touch:${name}` ;
}

function process_event_listener(listener){

    if(isObject(listener)){

        if(listener.hasOwnProperty('fn')){

            let config = Object.assign({} , listener) ;

            delete config.fn ;

            return {
                fn:listener.fn,
                config
            } ;
        }

    }else if(isFunction(listener)){

        return {
            fn:listener,
            config:{}
        } ;
    }

    return {} ;
}

function adddEventListener(el , name , listener , isInstall = true){

    name = process_event_name(name) ;

    let {
        fn,
        config
    } = process_event_listener(listener) ;

    if(isFunction(fn)){

        if(events.hasOwnProperty(name)){

            if(isInstall){

                events[name].install(el , config) ;
            }

            el.addEventListener(name , fn) ;
        }
    }
}

function removeEventListener(el , name , listener , isUninstall = true){

    name = process_event_name(name) ;

    let {
        fn
    } = process_event_listener(listener) ;

    if(isFunction(fn)){

        if(events.hasOwnProperty(name)){

            if(isUninstall){

                events[name].uninstall(el) ;
            }

            el.removeEventListener(name , fn) ;
        }

    }
}

function bind(el , {
    value:fn,
    arg:name
}){
    adddEventListener(el , name , fn) ;

}

function unbind(el , {
    value:fn,
    arg:name
}){

    removeEventListener(el , name , fn) ;
}

function update(el , {
    value:fn,
    oldValue:oldFn,
    arg:name
}){

    removeEventListener(el , name , oldFn , false),
    adddEventListener(el , name , fn , false) ;
}

function main(){

    for(let plugin of plugins){

        plugin = include(plugin) ;
    
        let {
            handledEvents
        } = plugin ;
    
        for(let handledEvent of handledEvents){
    
            events[handledEvent] = plugin ;
        }
    }

    return {
        install(Vue){

            Vue.directive('touch' , {
                bind,
                unbind,
                update
            }) ;
       }
    } ;
} ;
