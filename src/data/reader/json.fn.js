/**
 * 
 * JSON 数据读取器
 * 
 * @import Reader from data.reader value
 * 
 * @import get from object.value.get
 * 
 * @param {object} model 模型配置
 * 
 */

 class main extends Reader{

   getData(data , path){

      return get(data , path) ;
   }
   
 }