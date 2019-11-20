/**
 * 
 * 消息发送器
 * 
 * @import is.promise
 * 
 * @import Subscriber from data.Subscriber value
 * 
 */

 
class main extends Subscriber{

    accept({
        id,
        data
    }){

        let me = this,
            {
                connection
            } = me,
            result = super.accept(data);

        if(isPromise(result)){

            result.then(result => connection.resolve(id , result)).catch(error => connection.reject(id , error)) ;
        
        }else{

            connection.resolve(id , result) ;
        }
    }
 }