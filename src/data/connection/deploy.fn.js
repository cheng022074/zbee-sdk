/**
 * 
 * 实现部署
 * 
 * @import generate from id.generate
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
 * 
 * @import Manager from data.connection.socket.manager value
 * 
 * @param {string} connectionId 连接编号
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
 } = Object;

 function isMounted(){

    return !!this[connectionsVarName] ;
 }

 connectionId = generate('connection-') ;

 return {

    mounted(){

        let scope = this ;

        if(isMounted.call(scope)){

            return ;
        }

        scope[connectionsVarName] = connections ;

        if(connectionNames){

            let names = Object.keys(connections);

            for(let name of names){

                if(!connectionNames.includes(name)){

                    Manager.disconnect(connections[name]) ;
                    
                }
            }

            for(let name of names){

                if(connectionNames.includes(name)){

                    Manager.connect(connections[name]) ;
                }
            }
        }

        let names = keys(subscriberMap) ;

        scope.$connectionId = connectionId ;

        for(let name of names){

            let {
                varName,
                connection,
                subscribers
            } = subscriberMap[name] ;
            

            if(subscribers){

                scope[varName] = connection.subscribes({
                    ...subscribers,
                    connectionId,
                    scope
                }) ;
            }
        }

    },

    unsubscribe(name , connectionName){

        let {
            subscribers
        } = subscriberMap[connectionName] ;

        delete subscribers[name] ;

        connections[connectionName].unsubscribe(name , connectionId) ;
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
            connectionId,
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

            connection.unsubscribes(keys(subscribers) , connectionId) ;

            delete scope[varName] ;
        }

        delete scope[connectionsVarName] ;
    }

 } ;