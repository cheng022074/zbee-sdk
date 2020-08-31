/**
 * 
 * JSON 数据读取器
 * 
 * @import Reader from data.reader value
 * 
 * @import get from object.value.get
 * 
 * @param {object} fields 字段配置
 * 
 * @param {function} addFields 附加字段配置
 * 
 */

 class main extends Reader{

   getData(data , path){

      return get(data , path) ;
   }
   
 }