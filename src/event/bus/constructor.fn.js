/**
 * 
 * @config event from event
 * 
 * @import on from .on scoped
 * 
 * 初始化集中事件侦听器
 * 
 */

this.emitters = {} ;

const {
    keys
} = Object ;

let moduleNames = keys(event) ;

for(let moduleName of moduleNames){

    let events = event[moduleName],
        eventNames = keys(events) ;

    for(let eventName of eventNames){

        let listeners = events[eventName] ;

        on(moduleName , eventName , (...args) =>{

            for(let listener of listeners){

                include(listener)(...args) ;
            }
        }) ;
    }
}