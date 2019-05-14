
/**
 * 
 * 消息地址
 * 
 * @import Subscriber from data.Subscriber value
 * 
 * @param {string} name 消息地址
 * 
 * @param {object} options 消息配置
 * 
 * @once
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

    acceptData(data){

        let me = this,
            results = super.acceptData(data),
            {
                from
            } = data;

        if(from){

            for(let result of results){

                if(result instanceof Promise){

                    result.then(data => me.send(from , data)) ;
                
                }else{

                    me.send(from , data) ;
                }
            }
        }
    }
 }

 