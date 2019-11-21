/**
 * 
 * 消息发送器
 * 
 * @import is.promise
 * 
 * @import Subscriber from data.subscriber value
 * 
 * @param {data.Connection} connection 连接对象
 * 
 * @param {string} name 消息地址
 * 
 * @param {object} options 消息配置
 * 
 */

 
class main extends Subscriber{

    accept(data){
        
        let me = this,
            {
                connection
            } = me ;

        if(data.hasOwnProperty('id') && data.hasOwnProperty('params')){

            let {
                id,
                params
            } = data,
            result = super.accept(params);

            if(isPromise(result)){

                result.then(result => connection.resolve(id , result)).catch(error => connection.reject(id , error)) ;
            
            }else{

                connection.resolve(id , result) ;
            }

        }else{

            super.accept(data) ;
        }
        
            
    }
 }