
/**
 * 
 * 去除监听事件
 * 
 * @import listeners from ..listeners value
 * 
 * @import doRemove from event.listener.remove
 * 
 * @import isObject from is.object.simple
 * 
 * @param {mixed} target
 * 
 * @param {mixed} event 目标监听事件
 * 
 * @param {mixed} fn 目标监听回调
 * 
 * @return {mixed} 返回说明 
 * 
 */

 function main(target , event , fn){

    if(isObject(event)){

        let names = Object.keys(event) ;

        for(let name of names){

            if(name !== 'scope'){

                let fn,
                    listener = event[name];

                if(isObject(listener)){

                    fn = listener.fn ;
                
                }else{

                    fn = listener ;
                }

                remove(target , name , fn) ;
            }
        }
    }
 }

 function remove(target , event , fn){

    let listener = listeners.get(target , event , fn);

    if(listener){

        doRemove(target , event , listener) ;

        listeners.delete(target , event , fn) ;
    }
 }