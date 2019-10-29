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
 * @import is.function
 * 
 * @import is.string
 * 
 * @import isObject from is.object.simple
 * 
 * @import empty from function.empty value
 * 
 * @param {array} connections 连接实例集合
 * 
 * @param {object} subscriberMap 订阅器定义集合
 * 
 * @param {function} [getConnectionId] 获得连接编号
 * 
 * @return {object}
 * 
 */

 let {
    keys
 } = Object;

 getConnectionId = getConnectionId || empty ;

 let defaultConnectionId = generate('connection-') ;

 function isMounted(){

    return this.hasOwnProperty('$connectionId') ;
 }

 return {

    mounted(){

        let scope = this ;

        if(isMounted.call(scope)){

            return ;
        }

        let names = keys(subscriberMap),
            connectionId = scope.$connectionId = getConnectionId.call(scope) || defaultConnectionId ;

        for(let name of names){

            let {
                varName,
                connection,
                subscribers
            } = subscriberMap[name] ;
            
            if(subscribers){

                scope[varName] = new Proxy(connection.subscribes({
                    ...subscribers,
                    connectionId,
                    scope
                }) , {

                    set(subscribers , name , config){

                        if(!subscribers.hasOwnProperty(name)){

                            let subscriber = connection.subscribes({
                                [name]:config,
                                connectionId,
                                scope
                            })[name] ;

                            if(subscriber){

                                subscribers[name] = subscriber ;
                            }
                        }

                        return subscribers ;

                    },

                    get(subscribers , name){

                        return subscribers[name] ;
                    },

                    deleteProperty(subscribers , name){

                        if(subscribers.hasOwnProperty(name)){

                            connection.unsubscribe(name , connectionId) ;

                            delete subscribers[name] ;
                        }

                        return subscribers ;
                    },

                    ownKeys(subscribers){

                        return Object.keys(subscribers) ;
                    }

                }) ;

            }
        }

    },

    unmounted(){

        let scope = this ;

        if(!isMounted.call(scope)){

            return ;
        }

        let names = keys(subscriberMap),
            {
                $connectionId:connectionId
            } = scope;

        for(let name of names){

            let {
                varName,
                connection,
            } = subscriberMap[name] ;

            connection.unsubscribes(keys(scope[varName]) , connectionId) ;

            delete scope[varName] ;
        }

        delete scope.$connectionId ;
    }

 } ;