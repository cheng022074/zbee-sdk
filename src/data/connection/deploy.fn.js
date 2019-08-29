/**
 * 
 * 实现部署
 * 
 * @import generate from id.generate
 * 
 * @import isObject from is.object.simple
 * 
 * @import Socket from data.connection.socket value
 * 
 * @param {array} connectionNames 连接名称集合
 * 
 * @param {string} connectionsVarName 连接实例集合名称
 * 
 * @param {array} connections 连接实例集合
 * 
 * @param {object} subscriberMap 订阅器定义集合
 * 
 * @return {object}
 * 
 */

 let {
    keys
 } = Object,
 instanceId;

 function connect(){

    return new Promise(resolve =>{

        Socket.ready(async () =>{

            let names = Object.keys(connections);

            for(let name of names){

                if(!connectionNames.includes(name)){

                    await connections[name].end() ;
                    
                }
            }

            for(let name of names){

                if(connectionNames.includes(name)){

                    await connections[name].start() ;
                }
            }

            resolve() ;

        }) ;

    }) ;
 }

 function disconnect(){

    return new Promise(resolve =>{

        Socket.ready(async () =>{

            let names = Object.keys(connections);

            for(let name of names){

                if(connectionNames.includes(name)){

                    await connections[name].end() ;
                }
            }

            resolve() ;
        }) ;
    }) ;
 }

 function isMounted(){

    return !!this[connectionsVarName] ;
 }

 async function mounted(){

    let scope = this ;

    if(isMounted.call(scope)){

        return ;
    }

    scope[connectionsVarName] = connections ;

    await connect() ;

    let names = keys(subscriberMap);

    instanceId = instanceId || scope.connectionId || generate('connection-') ;

    for(let name of names){

        let {
            varName,
            connection,
            subscribers
        } = subscriberMap[name] ;
        

        if(subscribers){

            scope[varName] = connection.subscribes({
                ...subscribers,
                instanceId,
                scope
            }) ;
        }
    }

 }

 return {

    mounted(){

        return mounted.call(this) ;
    },

    unsubscribe(name , connectionName){

        let {
            subscribers
        } = subscriberMap[connectionName] ;

        delete subscribers[name] ;

        connections[connectionName].unsubscribe(name , instanceId) ;
    },

    subscribe(name , options){

        let scope = this,
            connectionName,
            subscriber;

        if(isObject(options)){

            let {
                connection = 'default',
                ...params
            } = options ;

            connectionName = connection ;

            subscriber = params ;
        
        }else{

            name = 'default' ;

            subscriber = {
                fn:options
            } ;
        }

        connections[connectionName].subscribe(name , {
            ...subscriber,
            instanceId,
            scope
        }) ;

        let {
            subscribers
        } = subscriberMap[connectionName] ;

        subscribers[name] = subscriber ;
    },

    unmounted(){

        let scope = this ;

        if(!isMounted.call(scope)){

            return ;
        }

        let names = keys(subscriberMap);

        for(let name of names){

            let {
                varName,
                connection,
                subscribers
            } = subscriberMap[name] ;

            connection.unsubscribes(keys(subscribers) , instanceId) ;

            delete scope[varName] ;
        }

        delete scope[connectionsVarName] ;

        disconnect() ;
    }

 } ;