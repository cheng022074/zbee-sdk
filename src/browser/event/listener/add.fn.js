
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
 * @param {mixed} target 目标
 * 
 * @param {mixed} event 目标监听事件
 * 
 * @param {mixed} [fn] 目标监听回调
 * 
 * @param {object} [config = {}] 配置
 * 
 * @return {mixed} 返回说明 
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
     ...config
 }){

    if(listeners.has(target , event , fn)){

        return ;
    }
    
    let listener = e =>{
    
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
    
                    fn(e) ;
                }
                
            }else{
    
                fn(e) ;
            }
        };
    
    listeners.set(target , event , fn , listener) ;
    
    doAdd(target , event , listener , config) ;
 }

