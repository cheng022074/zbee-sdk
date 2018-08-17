/**
 * 
 * 回复信息包
 * 
 * @param {object} message 需要回复的信息包
 * 
 * @param {object} [data] 回复数据
 * 
 * @return {object} 添加回复的信息包
 * 
 */

if(data){

   return {
       ...message,
       reply:{
           data
       }
   } ;
}

return {
    ...message,
    reply:false
} ;
