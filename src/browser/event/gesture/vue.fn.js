
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
 * @param {mixed} Vue VUE 实例
 * 
 * 
 */

Vue.directive('gesture' , {

    bind(el, {
        arg:name,
        value:fn
    }){

      EventDom.install(el, name);

      addEventListener(el , name , `gesture:${name}` , fn) ;

    },
  
    update(el, {
        arg:name,
        value:fn,
        oldValue:oldFn
    }) {

      let event = `gesture:${name}`;
  
      el.removeEventListener(event, oldFn);
  
      addEventListener(el , name , event , fn) ;
    },
  
    unbind(el, {
        arg:name,
        value:fn
    }){

        let event = `gesture:${name}` ;

        if(isObject(fn)){
        
            on(el , event , fn.fn);

        }else if(isFunction(fn)){

            on(el , event , fn) ;
        }

        un(el , `gesture:${name}`, fn);
    
        EventDom.uninstall(el, name);
      
    }
}) ;

function addEventListener(el , name , event , fn){

    if(isObject(fn)){

        let {
            fn:listenerFn,
            ...options
        } = fn ;
        
        on(el , event , listenerFn , options);

    }else if(isFunction(fn)){

        on(el , event , fn) ;
    }
}