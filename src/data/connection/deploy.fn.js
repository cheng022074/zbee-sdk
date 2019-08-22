
/**
 * 
 * 实现部署
 * 
 * @import generate from id.generate
 * 
 * @param {array} connectionNames 连接名称集合
 * 
 * @param {string} connectionsVarName 连接实例集合名称
 * 
 * @param {array} connections 连接实例集合
 * 
 * @param {object} subscriberMap 订阅器定义集合
 * 
 * @param {object} [flowMap = {}] 流程定义
 * 
 * @return {object}
 * 
 */

 let {
    keys
 } = Object,
 instanceId,
 resumeConnections = [];

 function doSubscribers(method){

    let names = keys(subscriberMap);

    for(let name of names){

        let {
            connection,
            subscribers
        } = subscriberMap[name] ;
        
        subscribers = connection.getSubscribers(keys(subscribers) , instanceId) ;

        for(let subscriber of subscribers){

            subscriber[method]() ;
        }
    }
 }

 async function disconnect(){

    let names = Object.keys(connections);

    for(let name of names){

        if(connectionNames.includes(name)){

           await connections[name].end() ;
        }
    }

    for(let connection of resumeConnections){

        await connection.start() ;
    }

    resumeConnections.length = 0 ;
 }

 async function connect(){

    let names = Object.keys(connections);

    for(let name of names){

        if(!connectionNames.includes(name)){

            let connection = connection[name];

            if(connection.isConnected || connection.isConnecting){

                resumeConnections.push(connection) ;

                await connection.end() ;
            }
        }
    }

    for(let name of names){

        if(connectionNames.includes(name)){

           await connections[name].start() ;
        }
    }
 }

 return {

    mounted(){

        let scope = this ;

        return new Promise(callback =>{

            connect().then(() =>{

                let names = keys(subscriberMap);
    
                instanceId = scope.connectionId || generate('connection-') ;
    
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
    
                {
                    let names = keys(flowMap) ;
    
                    for(let name of names){
    
                        let {
                            varName,
                            flow
                        } =  flowMap[name] ;
    
                        scope[varName] = flow(me) ;
                    }
                }

                callback() ;
    
            }) ;
    
            scope[connectionsVarName] = connections ;

        }) ;
    },

    open(){

        let me = this ;

        return new Promise(callback =>{

            connect().then(() =>{

                doSubscribers('prevOpen') ;

                callback() ;
            
            }) ;

        }) ;
    },

    close(){

        let me = this ;

        return new Promise(callback =>{

            doSubscribers('close') ;

            disconnect().then(callback) ;

        }) ;
    },

    unmounted(){

        let scope = this,
            names = keys(subscriberMap);

        return new Promise(callback =>{

            for(let name of names){

                let {
                    varName,
                    connection,
                    subscribers
                } = subscriberMap[name] ;
    
                connection.unsubscribes(keys(subscribers) , instanceId) ;
    
                delete scope[varName] ;
            }
    
            disconnect().then(callback) ;

        }) ;

       
    }

 } ;