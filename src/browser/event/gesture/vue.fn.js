
/**
 * 
 * 初始化 VUE 触摸指令
 * 
 * @import generate from id.generate
 * 
 * @import EventDom from browser.event.gesture.manager.dom value
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import on from browser.event.listener.element.add
 * 
 * @import un from browser.event.listener.element.remove
 * 
 * @param {mixed} [Vue] VUE 实例
 * 
 * 
 */

 const gesture = Object.freeze({

    bind(el, {
        arg:name,
        value:fn
    }){

      addEventListener(el , name , fn) ;

    },
  
    update(el, {
        arg:name,
        value:fn,
        oldValue:oldFn
    }) {

        if(fn !== oldFn){

            removeEventListener(el , name , oldFn) ;
  
            addEventListener(el , name , fn) ;
        }
    },
  
    unbind(el, {
        arg:name,
        value:fn
    }){

        removeEventListener(el , name , fn) ;
      
    }
}) ;

function main(Vue){

    if(Vue){

        Vue.directive('gesture' , gesture) ;
        
    }else{

        return {
            gesture
        } ;
    }
}

function addEventListener(el , name , fn){

    let event = `gesture:${name}` ;

    if(isObject(fn)){

        let {
            fn:listenerFn,
            scope,
            ...options
        } = fn ;

        EventDom.install(el, name , options);
        
        on(el , event , listenerFn , {
            scope
        });

    }else{

        EventDom.install(el, name);

        on(el , event , fn) ;
    }
}

function removeEventListener(el , name , fn){

    let event = `gesture:${name}` ;

    if(isObject(fn)){

        let {
            fn:listenerFn,
            scope
        } = fn ;
        
        un(el , event , listenerFn , scope);

    }else if(isFunction(fn)){

        un(el , event , fn) ;
    }

    EventDom.uninstall(el, name);
}