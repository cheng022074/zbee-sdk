
/**
 * 
 * 数据连接订阅
 * 
 * @import Connection from data.connection value
 * 
 */

 let connection = new Connection({
     rules:{
         '^\\w+$'(topic){

            return {
                params:{
                    topic
                }
            }
         }
     }
 }) ;

 connection.subscribe('ok' , {
     autoOpen:true
 }) ;