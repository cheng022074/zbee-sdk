/**
 * 
 * 流程启动
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.function
 * 
 * @import is.promise
 * 
 * @param {object} flows 流程定义
 * 
 * @param {object} nodes 流程节点定义
 * 
 * @return {Promise} 返回结果 
 * 
 */

 function main({
     start:startFlow,
     end:endFlow,
     ...flows
 } , {
     start:startMethod,
     ...methods,
     end:endMethod
 }){

    if(startFlow){


    }
 }

 function call(scope , name , value , flows , methods){

    let flow = flows[name] ;

    if(isObject(flow)){

        let method = methods[name] ;

        if(isFunction(method)){

            let result = method.call(scope , value) ;

            if(isPromise(result)){

                result.then() ;
            
            }else{


            }
        }
    }
 }