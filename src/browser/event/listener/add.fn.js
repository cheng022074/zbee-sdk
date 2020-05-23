
/**
 * 
 * 监听事件
 * 
 * @import listeners from ..listeners value
 * 
 * @import is from browser.selector.parent
 * 
 * @import stopEvent from ..stop
 * 
 * @import preventEvent from ..prevent
 * 
 * @import doAdd from event.listener.add
 * 
 * @import isObject from is.object.simple
 * 
 * @import get from function.get
 * 
 * @param {mixed} target 目标
 * 
 * @param {mixed} event 目标监听事件
 * 
 * @param {mixed} [fn] 目标监听回调
 * 
 * @param {object} [config = {}] 配置
 * 
 */

 function main(target , event , fn , config){

    if(isObject(event)){

        let {
            scope,
            ...listeners
        } = event ;

        let names = Object.keys(listeners) ;

        for(let name of names){

            let listener = listeners[name] ;

            if(isObject(listener)){

                let {
                    fn,
                    ...options
                } = listener ;
    
                options.scope = options.scope || scope ;
    
                add(target , name , fn , options) ;
            
            }else{

                add(target , name , listeners[name] , {
                    scope
                }) ;
            }
        }
        
    }else{

        add(target , event , fn , config) ;
    }

 }

 function add(target , event , fn , {
     selector,
     stop = false,
     prevent = false,
     scope,
     ...config
 }){

    if(listeners.has(target , event , fn)){

        return ;
    }

    let useFn = get(fn , scope),
        listener = e =>{
    
            let {
                target
            } = e ;
    
            if(stop){
                
                stopEvent(e) ;
            }
    
            if(prevent){
    
                preventEvent(e) ;
            }
    
            if(selector){
    
                if(is(target , selector)){
    
                    useFn(e) ;
                }
                
            }else{
    
                useFn(e) ;
            }
        };
    
    listeners.set(target , event , fn , listener) ;
    
    doAdd(target , event , listener , {
        passive:false,
        ...config
    }) ;
 }

