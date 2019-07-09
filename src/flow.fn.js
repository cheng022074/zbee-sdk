/**
 * 
 * 流程
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.string
 * 
 * @import is.function
 * 
 * @import is.array
 * 
 * @import is.promise
 * 
 * @import is.defined
 * 
 * @import generate from id.generate
 * 
 * @import get from function.get
 * 
 * @param {object} flows 流程定义
 * 
 * @param {object} nodes 流程节点定义
 * 
 */

 class main{

    constructor(message , flows , methods , callback , scope){

        let me = this ;
        
        me.flows = flows ;

        let currentMethods = me.methods = {},
            instanceId = me.flowId = generate('flow-'),
            scope = {},
            {
                next
            } = me,
            names = Object.keys(methods) ;

        for(let name of names){

            let method = methods[name] ;

            if(isFunction(method)){

                currentMethods[name] = ({
                    data
                }) => {

                    let result = method.call(scope , data) ;

                    if(isPromise(result)){

                        result.then(next.bind(me , name)) ;
                    
                    }else{

                        next.call(me , name , result) ;
                    }

                } ;
            }
        }

        message.subscribes({
            ...currentMethods,
            instanceId
        }) ;

        me.message = message ;

        me.callback = get(callback , scope) ;
    }

    send(method , value){

        let {
            message,
            flowId
        } = this ;

        message.send(`${method}<${flowId}>` , value) ;
    }

    start(name , value){

        this.send(name , value) ;
    }

    end(){

        let me = this,
        {
            message,
            methods,
            flowId
        } = me ;

        message.unsubscribes(Object.keys(methods) , flowId) ;
    }

    next(name , value){

        let me = this,
        {
            flows,
            callback
        } = me,
        flow = flows[name];

        if(isObject(flow)){

            let  {
                next
            } = flow ;

            if(isString(next)){

                me.send(next , value) ;
            
            }else if(isArray(next)){
    
                for(let {
                    value:caseValue,
                    call
                } of next){
    
                    if(caseValue === value){
    
                        me.send(call , value) ;
    
                        break ;
                    }
                }
    
            }else if(!isDefined(next)){
    
                callback(value) ;
            }
        }
    }
 }