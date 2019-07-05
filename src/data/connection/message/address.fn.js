
/**
 * 
 * 消息地址
 * 
 * @import Subscriber from data.Subscriber value
 * 
 * @import is.defined
 * 
 * @param {string} name 消息地址
 * 
 * @param {object} options 消息配置
 * 
 */

 class main extends Subscriber{

    send(to , data){

        let me = this ;

        me.fireEvent('send' , {
            from:me.name,
            to,
            data
        }) ;
    }

    accept(data){

        let me = this,
            result = super.accept(data),
            {
                from
            } = data;

        if(from){

            if(isDefined(result)){

                if(result instanceof Promise){

                    result.then(data => me.send(from , data)) ;
                
                }else{

                    me.send(from , result) ;
                }
            }
        }
    }
 }

 