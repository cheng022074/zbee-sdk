
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
 * @class
 * 
 */

 class main extends require('events'){

    constructor(){

        super() ;

        this.listeners = createMap() ;
    }

    clearAllEventListeners(){

        this.removeAllListeners() ;
    }

    clearEventListeners(event){

        this.removeAllListeners(event) ;
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
            listeners
        } = me,
        listener = fn.bind(scope);

        listeners.set(event , fn , scope , listener) ;

        if(once){

            me.once(event , listener) ;
        }

        super.addListener(event , listener) ;
    }

    un(event , fn , scope){

        this.removeListener(event , fn , scope) ;
    }

    removeListener(event , fn , scope){

        let me = this,
        {
            listeners
        } = me,
        listener = listeners.get(event , fn , scope) ;

        if(listener){

            super.removeListener(event , listener) ;

            listeners.delete(event , fn , scope) ;
        }
    }

    fireEvent(event , ...args){

        let me = this ;

        doFireBubbleEvent.call(me , event , me , ...args) ;
    }
 }

 function doFireBubbleEvent(event , target , ...args){

    let me = this,
    {
        bubbleTarget
    } = me ;

    me.emit(event , target ,  ...args) ;

    if(bubbleTarget && bubbleTarget instanceof main){

        doFireBubbleEvent.call(bubbleTarget , event , target , ...args) ;
    }
 }