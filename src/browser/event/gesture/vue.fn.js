
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

 const directive = Object.freeze({

    bind(el, {
        arg:name,
        value:fn
    }){

      EventDom.install(el, name);

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

        EventDom.uninstall(el, name);
      
    }
}) ;

function main(Vue){

    if(Vue){

        Vue.directive('gesture' , directive) ;
        
    }else{

        return directive ;
    }
}

function addEventListener(el , name , fn){

    let event = `gesture:${name}` ;

    if(isObject(fn)){

        let {
            fn:listenerFn,
            ...options
        } = fn ;
        
        on(el , event , listenerFn , options);

    }else{

        on(el , event , fn) ;
    }
}

function removeEventListener(el , name , fn){

    let event = `gesture:${name}` ;

    if(isObject(fn)){
        
        un(el , event , fn.fn);

    }else if(isFunction(fn)){

        un(el , event , fn) ;
    }
}