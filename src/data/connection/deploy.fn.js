
/**
 * 
 * 实现部署
 * 
 * @param {object} subscriberMap 订阅器定义集合
 * 
 * @param {object} connections 连接集合
 * 
 * @param {string} connectionVarName 连接集合的变量名称
 * 
 * @return {object}
 * 
 */

 let {
    keys
 } = Object ;

 return {

    mounted(){

        let scope = this,
            names = keys(subscriberMap);

        for(let name of names){

            let {
                varName,
                connection,
                subscribers
            } = subscriberMap[name] ;

            if(subscribers){

                scope[varName] = connection.subscribes({
                    ...subscribers,
                    scope
                }) ;
            }
        }
    },

    unmounted(){

        let scope = this,
            names = keys(subscriberMap);

        for(let name of names){

            let {
                varName,
                connection,
                subscribers
            } = subscriberMap[name] ;

            connection.unsubscribes(keys(subscribers)) ;

            delete scope[varName] ;
        }
    }

 } ;