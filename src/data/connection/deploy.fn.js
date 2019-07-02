
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

 function deploy(scope , subscriberSet , connections , method){

    let names = keys(connections),
            subscribers;

    for(let name of names){

        let varName = name === 'default' ? 'subscribers' : `${name}_subscribers` ;

        subscribers = subscriberSet[varName] ;

        if(subscribers){

            scope[varName] = connections[name][method]({
                ...subscribers,
                scope
            }) ;
        }
    }
 }

 return {

    mounted(scope , subscriberSet , connections){

        deploy(scope , subscriberSet , connections , 'subscribes') ;
    },

    unmounted(scope , subscriberSet , connections){

        deploy(scope , subscriberSet , connections , 'unsubscribes') ;
    }

 } ;