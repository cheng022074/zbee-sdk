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
 * @param {data.connection.Mesage} message 消息机
 * 
 * @param {object} flows 流程定义
 * 
 * @param {object} methods 流程节点定义
 * 
 * @param {mixed} callback 回调函数
 * 
 * @param {mixed} scoped 回调函数作用域
 * 
 */

 class main{

    constructor(message , flows , methods , callback , scope){

        let me = this ;
        
        me.flows = flows ;

        let currentMethods = me.methods = {},
            instanceId = me.flowId = generate('flow-'),
            methodScope = {},
            {
                next
            } = me,
            names = Object.keys(methods) ;

        me.methodNames = names ;

        for(let name of names){

            let method = methods[name] ;

            if(isFunction(method)){

                currentMethods[name] = ({
                    data
                }) => {

                    let result = method.call(methodScope , data) ;

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

    getFullAddress(name){

        return `${name}<${this.flowId}>` ;
    }

    send(name , value){

        let me = this,
        {
            message
        } = me ;

        message.send(me.getFullAddress(name) , value) ;
    }

    start(value , name = 'start'){

        this.send(name , value) ;
    }

    end(){

        let me = this,
        {
            message,
            methodNames,
            flowId
        } = me ;

        message.unsubscribes(methodNames , flowId) ;
    }

    next(name , value){

        let me = this,
        {
            flows,
            message,
            callback
        } = me,
        next = flows[name];
    
        if(isString(next)){

            me.send(next , value) ;
        
        }else if(isObject(next)){

            let {
                external,
                next:from
            } = next ;

            message.send({
                from:me.getFullAddress(from),
                to:external
            } , value) ;

        }else if(isArray(next)){

            let defaultNext ;

            for(let {
                value:caseValue,
                type,
                next:caseNext
            } of next){

                if(!isDefined(caseValue)){

                    defaultNext = caseNext ;

                    continue ;
                }

                if(type){

                    if(typeof value === type){

                        me.send(caseNext , value) ;

                        break ;
                    }

                    continue ;
                }

                if(caseValue === value){

                    me.send(caseNext , value) ;

                    break ;
                }
            }

            if(defaultNext){

                me.send(defaultNext , value) ;
            }

        }else if(!isDefined(next)){

            callback(value) ;
        }
    }
 }