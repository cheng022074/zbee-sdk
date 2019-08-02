
/**
 * 
 * 初始化 VUE 触摸指令
 * 
 * @import generate from id.generate
 * 
 * @import EventDom from browser.event.gesture.manager.dom value
 * 
 * @import on from browser.event.listener.element.add
 * 
 * @import un from browser.event.listener.element.remove
 * 
 * @param {mixed} Vue VUE 实例
 * 
 * 
 */

 const prefix = generate('gestureoptions') ;

Vue.directive('gesture' , {

    bind(el, {
        arg:name,
        value:fn
    }){

      EventDom.install(el, name);

      addEventListener(el , `gesture:${name}` , fn) ;

    },
  
    update(el, {
        arg:name,
        value:fn,
        oldValue:oldFn
    }) {

      let event = `gesture:${name}`;
  
      el.removeEventListener(event, oldFn);
  
      addEventListener(el , event , fn) ;
    },
  
    unbind(el, {
        arg:name,
        value:fn
    }){

      un(el , `gesture:${name}`, fn);
  
      EventDom.uninstall(el, name);
      
    }
}) ;

Vue.directive('gesture-options' , {

    bind(el, {
        arg:name,
        value:options
    }){

      el.dataset[`${prefix}${name}`] = JSON.stringify(options) ;

    }
}) ;

function addEventListener(el , event , fn){

    let options = el.dataset[`${prefix}${name}`] ;

    if(options){

        options = JSON.parse(options) ;
    }

    on(el , event , fn , options);
}