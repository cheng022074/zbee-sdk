
/**
 * 
 * 实现部署
 * 
 * @once
 * 
 * @return {object}
 * 
 */

 let {
    keys
 } = Object ;

 return {

    mounted(scope , subscriberSet , connections){

        let names = keys(connections),
            subscribers;

        for(let name of names){

            let varName = name === 'default' ? 'subscribers' : `${name}_subscribers` ;

            subscribers = subscriberSet[varName] ;

            if(subscribers){

                scope[`$${varName}`] = connections[name].subscribes({
                    ...subscribers,
                    scope
                }) ;
            }
        }
    },

    unmounted(scope , connections){

        let names = keys(connections),
            subscribers;

        for(let name of names){

            let subscribers = scope[`$${name === 'default' ? 'subscribers' : `${name}_subscribers`}`];

            if(subscribers){

                connections[name].unsubscribes(keys(subscribers)) ;
            }
        }
    }

 } ;