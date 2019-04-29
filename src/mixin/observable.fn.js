
/**
 * 
 * 观察者模式
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import createMap from map
 * 
 * @import remove from array.remove
 * 
 * @param {mixed} extend 需要扩展的类
 * 
 */

 const EventEmitter = require('events') ;

 function main(extend){

    return class extends extend{
   
       constructor(...args){
   
           super(...args) ;

           let me = this ;

           me.emitter = new EventEmitter() ;
   
           me.listeners = createMap() ;
       }
   
       clearAllListeners(){
   
           this.emitter.removeAllListeners() ;
       }
   
       clearListeners(event){
   
           this.emitter.removeAllListeners(event) ;
       }
   
       addListeners(listeners){
   
           let me = this,
               events = Object.keys(listeners),
               {
                   scope
               } = listeners;
   
           remove(events , 'scope') ;
   
           for(let event of events){
   
               let listener = listeners[event] ;
               
               if(isObject(listener)){
   
                   let {
                       fn,
                       scope:listenerScope,
                       ...options
                   } = listener ;
   
                   me.on(event , fn , listenerScope || scope , options) ;
               
               }else if(isFunction(listener)){
   
                   me.on(event , listener , scope) ;
               }
           }
       }
   
       removeListeners(listeners){
   
           let me = this,
               events = Object.keys(listeners) ;
   
           for(let event of events){
   
               let listener = listeners[event] ;
               
               if(isObject(listener)){
   
                   let {
                       fn
                   } = listener ;
   
                   me.un(event , fn) ;
               
               }else if(isFunction(listener)){
   
                   me.un(event , listener) ;
               }
           }
       }
   
       on(event , fn , scope , options){
   
           this.addListener(event , fn , scope , options) ;
       }
   
       addListener(event , fn , scope , {
           once = false
       } = {}){
   
           let me = this,
           {
                emitter,
               listeners
           } = me,
           listener = fn.bind(scope);
   
           listeners.set(event , fn , scope , listener) ;
   
           if(once){
               
                emitter.once(event , listener) ;
           
            }else{

                emitter.addListener(event , listener) ;
           }
       }
   
       un(event , fn , scope){
   
           this.removeListener(event , fn , scope) ;
       }
   
       removeListener(event , fn , scope){
   
           let me = this,
           {
               listeners,
               emitter
           } = me,
           listener = listeners.get(event , fn , scope) ;
   
           if(listener){
   
               emitter.removeListener(event , listener) ;
   
               listeners.delete(event , fn , scope) ;
           }
       }
   
       fireEvent(event , ...args){
   
           let me = this ;
   
           doFireBubbleEvent.call(me , event , me , ...args) ;
       }
    } ;
 }

 function doFireBubbleEvent(event , target , ...args){
   
    let {
        bubbleTarget,
        emitter
    } = this ;

    emitter.emit(event , target ,  ...args) ;

    if(bubbleTarget && bubbleTarget instanceof main){

        doFireBubbleEvent.call(bubbleTarget , event , target , ...args) ;
    }
 }